import React, { useContext, useState } from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify'
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';

const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const [menuDisplay, setMenuDisplay] = useState(false)
  const context = useContext(Context)
  const navigate = useNavigate()
  const searchInput = useLocation()
  const URLSearch = new URLSearchParams(searchInput?.search)
  const searchQuery = URLSearch.getAll("q")
  const [search, setSearch] = useState(searchQuery)

  const handleLogout = async() => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    })

    const data = await fetchData.json()

    if (data.success) {
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if (data.error) {
      toast.error(data.message)
    }
  }

  const handleSearch = (e) => {
    const { value } = e.target
    setSearch(value)

    if (value) {
      navigate(`/search?q=${value}`)
    } else {
      navigate("/search")
    }
  }

  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        {/* Logo */}
        <div className="w-16 h-16 flex items-center justify-center overflow-hidden rounded-full">
          <Link to="/">
            <img src="./loogo.jpg" className="max-w-full max-h-full object-contain rounded-full" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border border-gray-300 rounded-full focus-within:shadow-md pl-2'>
          <input type='text' placeholder='Search products...' className='w-full outline-none p-2 text-black' onChange={handleSearch} value={search} />
          <div className='text-lg min-w-[50px] h-8 bg-yellow-600 flex items-center justify-center rounded-r-full text-white cursor-pointer'>
            <GrSearch />
          </div>
        </div>

        {/* User & Cart Section */}
        <div className='flex items-center gap-7'>
          {/* User Profile Dropdown */}
          <div className='relative flex justify-center'>
            {user?._id && (
              <div className='text-3xl cursor-pointer relative flex justify-center' onClick={() => setMenuDisplay(prev => !prev)}>
                {user?.profilePic ? (
                  <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                ) : (
                  <FaRegCircleUser className='text-black' />
                )}
              </div>
            )}

            {/* Dropdown Menu */}
            {menuDisplay && (
              <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded'>
                <nav>
                  {user?.role === ROLE.ADMIN && (
                    <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-gray-100 p-2' onClick={() => setMenuDisplay(prev => !prev)}>
                      Admin Panel
                    </Link>
                  )}
                </nav>
              </div>
            )}
          </div>

          {/* Cart */}
          {user?._id && (
            <Link to={"/cart"} className='text-2xl relative'>
              <FaShoppingCart className='text-black' />
              <div className='bg-yellow-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                <p className='text-sm'>{context?.cartProductCount}</p>
              </div>
            </Link>
          )}

          {/* Login/Logout Button */}
          <div>
            {user?._id ? (
              <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-yellow-600 hover:bg-yellow-700'>
                Logout
              </button>
            ) : (
              <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-yellow-600 hover:bg-yellow-700'>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
