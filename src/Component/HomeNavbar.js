import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// import { IconName } from '@heroicons/react/outline';


import "./homeNavbar.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from "react-router-dom";
import Fly from './Fly';


export default function Example() {

  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    const response = await fetch('https://localhost:8081/api/Logins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    if (response.ok) {
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('password', password);
      setLoggedIn(true);
      //   file();
    } else {
      // handle error
    }

  }

  if (sessionStorage.getItem("email")) {

  }
  const handleClickLogo = () => {
    navigate('/');
  };
  const handleLoginClick = () => {
    navigate("/Login")
  }
  const handlecart = () => {
    navigate("/cart")
  }
  const handleRegisterClick = () => {
    navigate("/Register")
  }
  const breadcrumbs = [
    {
      path: "Home",
    },
    {
      path: "Projects",
    },
    {
      path: "UI components",
    },
    {
      path: "Project",
    },
  ]
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                {/* <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    // <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    // <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ml-0">
                <div className="flex flex-shrink-0 items-center" >
                  <img
                    className="hidden h-8 w-auto lg:block mx-5"
                    src="../images/Onestop.jpg"
                    alt="Your Company"
                    onClick={handleClickLogo}
                  />
                </div>
                <div className="hidden sm:ml-56 sm:block">
                  <div className="flex space-x-22">
                    {/* Search Bar */}
                    <input
                      type="text"
                      placeholder="Search"
                      className="rounded-md px-3 py-2 text-sm w-96"
                    />

                    {/* Search Symbol */}
                    {/* <i className="fas fa-search fa-2x text-red-500"></i> */}

                    <button class="bg-white rounded-full p-2 scroll mr-40">
                      <svg class="w-6 h-6 text-gray-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M15 15l6 6-6-6z"></path>
                        <path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"></path>
                      </svg>
                    </button>
                    <svg class="w-10 h- mr-2 text-white hover:cursor-pointer first-line:" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" onClick={handlecart}>
                      <path d="M1 1h4l2.6 12.3A2 2 0 0 0 9 16h10a2 2 0 0 0 1.9-2.7L19 6H6"></path>
                      <circle cx="8.5" cy="19.5" r="1.5"></circle>
                      <circle cx="18.5" cy="19.5" r="1.5"></circle>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                   


                    {/* Login and Registration Form */}
                    <div>
                      <button className="rounded-md bg-gray-900 text-white px-3 py-2 text-sm hover:bg-green-600 font-medium mr-3 " onClick={handleLoginClick}>
                        Login
                      </button>
                      <button className="rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-green-600" onClick={handleRegisterClick}>
                        Register
                      </button>
                    </div>
                    {/* <Fly></Fly> */}
                  </div>
                </div>
              </div>
            </div>


            {/* <Corosrol></Corosrol> */}

            {/* <!-- Component: Flat breadcrumb with text & leading icon --> */}
            <nav aria-label="Breadcrumb">
              <ol class="flex items-stretch ml-60 list-inside">
                <li class="flex items-center gap-2 ">
                  <a href="/" class="flex max-w-[20ch] items-center gap-1 truncate whitespace-nowrap text-yellow-100 transition-colors hover:text-emerald-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true" aria-labelledby="title-01 description-01" role="link">
                      <title id="title-01">Home</title>
                      <desc id="description-01">
                        Home button indicating the homepage of the website.
                      </desc>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span class="hidden md:block">Home</span>
                  </a>

                </li>
                <nav>
                  <ul>
                    <li class="inline-flex  hidden gap-2 md:flex mr-6">
                      <a href="" class="flex max-w-[20ch] truncate whitespace-nowrap text-yellow-100 transition-colors hover:text-emerald-500">Fashion</a>
                      <ul class="dropdown-list space-y-4">
                        <li class="pt-1"><a href="/productsbycat/13">Mens</a></li>
                        <li class=""><a href="/productsbycat/14">Women</a></li>
                        <li class=""><a href="/productsbycat/15">Kids</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                
                <nav>
                  <ul>
                  <li class="inline-flex  hidden gap-2 md:flex mr-6">
                      <a href="" class="flex max-w-[20ch] truncate whitespace-nowrap text-yellow-100 transition-colors hover:text-emerald-500">Beauty</a>
                      <ul class="dropdown-list space-y-2">
                        <li class="pt-1"><a href="/productsbycat/19">Oil</a></li>
                        <li class=""><a href="/productsbycat/10">Shampoo</a></li>
                        <li class=""><a href="/productsbycat/11">Facewash</a></li>
                        <li class=""><a href="/productsbycat/11">Soap</a></li>
                      </ul>
                    </li>
                    </ul>
                </nav>
                <nav>
                  <ul>
                  <li class="inline-flex  hidden gap-2 md:flex mr-6">
                      <a href="" class="flex max-w-[20ch] truncate whitespace-nowrap text-yellow-100 transition-colors hover:text-emerald-500">Super market</a>
                      <ul class="dropdown-list space-y-2">
                        <li class="pt-1"><a href="/productsbycat/20">House Hold Care</a></li>
                        <li class=""><a href="/productsbycat/21">Fruits and vegetables</a></li>
                        <li class=""><a href="/productsbycat/22">Pulses and Dal</a></li>
                        <li class=""><a href="/productsbycat/23">Package food</a></li>
                      </ul>
                    </li>
                    </ul>
                </nav>
                <nav>
                  <ul>
                  <li class="inline-flex  hidden gap-2 md:flex mr-6">
                      <a href="" class="flex max-w-[20ch] truncate whitespace-nowrap text-yellow-100 transition-colors hover:text-emerald-500">Home Appliances</a>
                      <ul class="dropdown-list space-y-2">
                        <li class=""><a href="/productsbycat/6">Kitchen Appliances</a></li>
                        <li class=""><a href="/productsbycat/7">Furniture</a></li>
                        <li class=""><a href="/productsbycat/8">Electronics</a></li>
                      </ul>
                    </li>
                    </ul>
                </nav>
                <nav>
                  <ul>
                  <li class="inline-flex  hidden gap-2 md:flex mr-6">
                      <a href="" class="flex max-w-[20ch] truncate whitespace-nowrap text-yellow-100 transition-colors hover:text-emerald-500">Electronics</a>
                      <ul class="dropdown-list space-y-2">
                        <li class=""><a href="/productsbycat/16">TV</a></li>
                        <li class=""><a href="/productsbycat/17">Laptop</a></li>
                        <li class=""><a href="/productsbycat/18">Camera</a></li>
                        <li class=""><a href="/productsbycat/19">Mobile</a></li>
                      </ul>
                    </li>
                    </ul>
                </nav>
              </ol>
            </nav>
          </div>
          {/* <!-- End Flat breadcrumb with text & leading icon --> */}
          {/* <!-- End Elevated breadcrumb with text & leading icon --> */}

        </>
      )
      }




    </Disclosure>
  )
}
/*
 {isAddedToCart && (
        <Button variant="success" disabled>
          Added to Cart
        </Button>
      )}-
*/
