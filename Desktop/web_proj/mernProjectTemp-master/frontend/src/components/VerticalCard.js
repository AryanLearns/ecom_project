import React, { useContext } from 'react'
import scrollTop from '../helpers/scrollTop'
import displayINRCurrency from '../helpers/displayCurrency'
import Context from '../context'
import addToCart from '../helpers/addToCart'
import { Link } from 'react-router-dom'

const VerticalCard = ({loading,data = []}) => {
    const loadingList = new Array(13).fill(null)
    const { fetchUserAddToCart } = useContext(Context)

    const handleAddToCart = async(e,id)=>{
       await addToCart(e,id)
       fetchUserAddToCart()
    }

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(260px,300px))] justify-center md:justify-between md:gap-4 overflow-x-scroll scrollbar-none transition-all'>
    {

         loading ? (
             loadingList.map((product,index)=>(
                 <div key={index} className='w-full min-w-[280px]  md:min-w-[320px] max-w-[280px] md:max-w-[320px]  bg-white rounded-xl shadow-lg'>
                     <div className='bg-gray-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse'>
                     </div>
                     <div className='p-4 grid gap-3'>
                         <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-gray-800 p-1 py-2 animate-pulse rounded-full bg-gray-200'></h2>
                         <p className='capitalize text-gray-500 p-1 animate-pulse rounded-full bg-gray-200 py-2'></p>
                         <div className='flex gap-3'>
                             <p className='text-teal-600 font-medium p-1 animate-pulse rounded-full bg-gray-200 w-full py-2'></p>
                             <p className='text-gray-400 line-through p-1 animate-pulse rounded-full bg-gray-200 w-full py-2'></p>
                         </div>
                         <button className='text-sm text-white px-3 rounded-full bg-gray-200 py-2 animate-pulse'></button>
                     </div>
                 </div>
             ))
         ) : (
             data.map((product,index)=>(
                 <Link key={product?._id || index} to={"/product/"+product?._id} className='w-full min-w-[280px] md:min-w-[300px] max-w-[280px] md:max-w-[300px] bg-white rounded-xl shadow-lg' onClick={scrollTop}>
                     <div className='bg-gray-100 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center'>
                         <img src={product?.productImage[0]} className='object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply'/>
                     </div>
                     <div className='p-4 grid gap-3'>
                         <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-gray-800'>{product?.productName}</h2>
                         <p className='capitalize text-gray-500'>{product?.category}</p>
                         <div className='flex gap-3'>
                             <p className='text-teal-600 font-medium'>{displayINRCurrency(product?.sellingPrice)}</p>
                             <p className='text-gray-400 line-through'>{displayINRCurrency(product?.price)}</p>
                         </div>
                         <button className='text-sm bg-teal-600 hover:bg-teal-700 text-white px-3 py-0.5 rounded-full transition-all' onClick={(e)=>handleAddToCart(e,product?._id)}>Add to Cart</button>
                     </div>
                 </Link>
             ))
         )
     }
    </div>
  )
}

export default VerticalCard