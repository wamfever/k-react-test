import React from 'react'
import { Link } from 'react-router-dom';

function HeaderButton({title}) {
    return (
        <div>
            <Link
                to="/contacts"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
                {title}
            </Link>
        </div>
    )
}

export default HeaderButton
