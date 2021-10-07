import React from 'react'
import HeaderButton from './HeaderButton'

function Header() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-2 font-sans text-xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
                            Hi and welcome to your own <span className="text-deep-purple-accent-400">personal agenda!</span>
                        </h2>
                        <p className="text-sm text-gray-700 px-12">
                            Here you can manage your contacts easy and fast with just a few clicks. View, add, edit and even delete them right away.
                        </p>
                    </div>
                    <HeaderButton title="Let's get started!"/>
                </div>
            </div>
        </div>
    )
}

export default Header
