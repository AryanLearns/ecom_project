const chatbotResponses = [
    {
        keywords: ['hello', 'hi', 'hey', 'greetings'],
        response: "👋 Hello! Welcome to our e-commerce app. I'm your shopping assistant. I can help you with:\n• Browsing and finding products\n• Managing your orders\n• Tracking shipments\n• Account and profile settings\n\nWhat would you like to know about?"
    },
    {
        keywords: ['login', 'signin', 'log in', 'sign in'],
        response: "To log in to your account:\n• Tap the 'Login' button in the top right corner\n• Enter your email and password\n• Or use Google or Facebook Sign-In for a quick login\n\nForgot your password?\n• Click 'Forgot Password' on the login page\n• Enter your email to receive a reset link\n• Follow the link to create a new password"
    },
    {
        keywords: ['signup', 'register', 'sign up', 'create account'],
        response: "Create your account:\n• Tap 'Sign Up' in the top right corner\n• Fill in your details:\n  - Name\n  - Email\n  - Password (min. 8 characters)\n• Verify your email address\n\nTip: Use Google or Facebook Sign-Up for faster registration!"
    },
    {
        keywords: ['logout', 'signout', 'log out', 'sign out'],
        response: "To sign out of your account:\n• Click your profile icon in the top right corner\n• Select 'Sign Out' from the dropdown menu\n\nSecurity Tip: Always sign out when using shared devices!"
    },
    {
        keywords: ['orders', 'track order', 'my orders', 'order history'],
        response: "Managing your orders is easy:\n\n1. View Orders:\n• Go to 'My Orders' in the account menu\n• See your current and past orders\n\n2. Track Shipments:\n• Select an order to view tracking details\n\n3. Order History:\n• Access all your purchases and reorder with one click!"
    },
    {
        keywords: ['cart', 'shopping cart', 'view cart'],
        response: "Manage your shopping cart:\n\n1. Access Your Cart:\n• Tap the 'Cart' icon in the top right corner\n\n2. Manage Items:\n• Add or remove products\n• Update quantities\n\n3. Proceed to Checkout:\n• Review your cart and click 'Checkout' to place your order."
    },
    {
        keywords: ['payment', 'checkout', 'pay', 'payment options'],
        response: "We support multiple secure payment options:\n\n1. Credit/Debit Cards:\n• Visa, Mastercard, American Express\n\n2. Digital Wallets:\n• PayPal, Google Pay, Apple Pay\n\n3. Bank Transfers & UPI:\n• Convenient for local transactions\n\n4. Cash on Delivery:\n• Available in select locations.\n\nYou can choose your preferred method during checkout."
    },
    {
        keywords: ['delivery', 'shipping', 'track shipment'],
        response: "Delivery details:\n\n1. Delivery Timelines:\n• Standard Delivery: 3-5 business days\n• Express Delivery: 1-2 days (select locations)\n\n2. Track Shipments:\n• Go to 'My Orders' and click 'Track'\n\n3. Shipping Costs:\n• Free shipping for orders above $50\n• Nominal charges for smaller orders."
    },
    {
        keywords: ['returns', 'refund', 'return policy', 'replace'],
        response: "We make returns and refunds easy:\n\n1. Return Policy:\n• Return items within 30 days of delivery\n• Ensure the product is unused and in original packaging\n\n2. Refund Process:\n• Refunds are issued within 5-7 business days after approval\n\n3. Replacements:\n• Damaged or defective items are eligible for replacements\n\nStart your return process from the 'My Orders' section."
    },
    {
        keywords: ['profile', 'settings', 'account settings'],
        response: "Manage your account settings:\n\n1. Edit Profile:\n• Update your name, email, and phone number\n\n2. Manage Addresses:\n• Add or edit delivery addresses\n\n3. Payment Methods:\n• Save or update your cards and wallet info\n\n4. Notifications:\n• Customize alerts for promotions, orders, and updates."
    },
    {
        keywords: ['deals', 'offers', 'discounts', 'sales'],
        response: "Find the best deals here:\n\n1. Daily Deals:\n• Check out 'Today's Deals' section for discounts\n\n2. Lightning Deals:\n• Limited-time offers on popular items\n\n3. Coupons:\n• Apply promo codes during checkout\n\n4. Sales Events:\n• Look out for festive and seasonal sales for huge savings!"
    },
    {
        keywords: ['help', 'support', 'contact', 'issue'],
        response: "Need help? We're here for you:\n\n1. Customer Support:\n• Email: support@ecommerceapp.com\n• Phone: 1-800-555-1234\n\n2. FAQs:\n• Visit the Help Center for common questions\n\n3. Report Issues:\n• Submit problems related to orders, payments, or accounts via the 'Help' section."
    },
    {
        keywords: ['wishlist', 'favorites', 'save for later'],
        response: "Manage your wishlist:\n\n1. Add to Wishlist:\n• Click the 'Heart' icon on any product to save it\n\n2. View Wishlist:\n• Go to 'My Wishlist' from your account menu\n\n3. Purchase Items:\n• Move products from your wishlist to your cart anytime."
    }
];

module.exports = chatbotResponses;
