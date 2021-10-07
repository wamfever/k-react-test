import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <div className="bg-white sticky top-0 w-full left-0 right-0 shadow z-50">
            <div className="p-3 sm:max-w-xl md:max-w-full lg:max-w-4xl w-full mx-auto">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="inline-flex items-center mr-8"
                        >
                            <span className="text-xl font-bold tracking-tight text-gray-900 uppercase flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="#651fff">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                My agenda
                            </span>
                        </Link>
                    </div>
                    <ul className="flex items-center text-sm space-x-8 lg:flex">
                        <li>
                            <NavLink to="/"
                                exact
                                activeClassName="text-deep-purple-accent-400"
                                className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts"
                                exact
                                activeClassName="text-deep-purple-accent-400"
                                className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};