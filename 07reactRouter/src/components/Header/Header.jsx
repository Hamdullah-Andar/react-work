import React from 'react'
// for routing we have to install react-router-dom package
// As we get useState, useEffect in React
// Similarly we get Link NavLink in react-router-dom
// Link and NavLink is both the same, but NavLink has some additional features 
// Link is used instead of <a> tag, where <a> reload the page, and Link tag does not reload the complete page

// 🧭 NavLink in React Router
// NavLink is just like Link but with built-in awareness of the current route.
// It lets you style or highlight the active link automatically.
// You can pass a function to className (or style) which gives you { isActive }.
// Useful for navigation bars, side menus, or tabs where the active page should stand out.
// 👉 In short: Link navigates, NavLink navigates + tells you “you’re here.”

// 1️⃣ Without a function
// <NavLink to="/about">About</NavLink>

    // NavLink renders an <a> tag.
    // React Router automatically adds the class active when the route matches.
    // You style it with CSS:

// nav a.active { color: blue; }

// 2️⃣ With a className function
// <NavLink
//   to="/about"
//   className={({ isActive }) => (isActive ? "text-blue-600" : "text-gray-600")}
// >
//   About
// </NavLink>


    // NavLink still renders an <a> tag.
    // React Router does NOT apply the default active class anymore.
    // Instead, it passes an object to your function with a property isActive (boolean).
    // You return the class name string you want based on isActive.


// Important:

    // isActive is not a class — it’s just a boolean flag that your function receives.
    // Whatever string your function returns becomes the actual class on the <a>.
    // The default active class is skipped when using a function.


// ✅ In short:

    // No function → NavLink adds active automatically.
    // With function → React gives you isActive boolean → you return a class → active is not applied.
    // There’s no automatic conversion from active → isActive.

import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        // isActive is a property recieved to above function, and base on isActive we can change the style of active link as below 
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    // We can add as many nav link as we want
                                    // As we were using to="/" to redirect us to the give path as to="/"
                                    // We should add to="/" here as well
                                    // We can give any path we like as to="/", to="/about"
                                    to="/about"
                                    className={({isActive}) =>
                                        // isActive is a property recieved to above function, and base on isActive we can change the style of active link as below 
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}