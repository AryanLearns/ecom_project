const addToCartModel = require("../../models/cartProduct");
const nodemailer = require("nodemailer");
// require('dotenv').config(); // Load environment variables
const productModel = require("../../models/productModel")
const userModel = require("../../models/userModel")

// Configure nodemailer transporter using environment variables
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Sender's email from environment variable
        pass: process.env.EMAIL_PASS, // Sender's email app password from environment variable
    },
});

const sendConfirmationEmail = async (userEmail, productName) => {
    const mailOptions = {
        from: `"Shop" <${process.env.EMAIL_USER}>`, // Sender address from env
        to: userEmail, // Receiver's email
        subject: "Product Added to Cart", // Subject line
        text: `"The product ${productName} has been successfully added to your cart."`, // Plain text body
        html: `<p>The product <strong>${productName}</strong> has been successfully added to your cart.</p>`, // HTML body
    };

    await transporter.sendMail(mailOptions);
};

const addToCartController = async (req, res) => {
    try {
        const { productId } = req.body; // Assuming userEmail and productName are passed in the request body
        const currentUser = req.userId;
        console.log(req.body);
        // Check if the product is already in the cart
        const isProductAvailable = await addToCartModel.findOne({ productId, userId: currentUser });
        console.log("isProductAvailable", isProductAvailable);

        if (isProductAvailable) {
            return res.json({
                message: "Already exists in Add to cart",
                success: false,
                error: true,
            });
        }
        // Fetch product details using productId
        const product = await productModel.findById(productId);
        if (!product) {
            return res.json({
                message: "Product not found",
                success: false,
                error: true,
            });
        }
        const productName = product.productName; // Assuming the product name is stored as name in the Product model

        // Fetch user details using userId
        const user = await userModel.findById(currentUser);
        if (!user) {
            return res.json({
                message: "User not found",
                success: false,
                error: true,
            });
        }
        const username = user.username; // Assuming the username is stored as username in the User model
        const userEmail = user.email; // Assuming the user email is stored as email in the User model
        // Prepare payload for the new cart entry
        const payload = {
            productId,
            quantity: 1,
            userId: currentUser,
        };

        // Save the new product in the cart
        const newAddToCart = new addToCartModel(payload);
        const saveProduct = await newAddToCart.save();

        // Send email notification to the user
        await sendConfirmationEmail(userEmail, productName);

        // // Prepare payload for the new cart entry
        // const payload = {
        //     productId,
        //     quantity: 1,
        //     userId: currentUser,
        // };

        // // Save the new product in the cart
        // const newAddToCart = new addToCartModel(payload);
        // const saveProduct = await newAddToCart.save();

        // // Send email notification to the user
        // await sendConfirmationEmail("anneshu123@gmail.com", productId);

        // Respond with success
        return res.json({
            data: saveProduct,
            message: "Product added to cart and email sent",
            success: true,
            error: false,
        });
    } catch (err) {
        return res.json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
};

module.exports = addToCartController;