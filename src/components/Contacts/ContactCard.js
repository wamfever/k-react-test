import React from 'react'
import { Link } from 'react-router-dom'

function ContactCard({ id, name, avatar, occupation }) {
    return (
        <div className="flex flex-col items-center justify-center h-[250px] p-5 text-center shadow-sm border rounded-xl w-full relative overflow-hidden">
            <img
                className="object-cover w-full h-full absolute top-0 left-0 bottom-0 right-0 -z-1 opacity-10"
                src={avatar}
                alt={`${name}`}
            />
            <img
                className="object-cover w-20 h-20 mb-2 rounded-full shadow z-10 border-2 border-white"
                src={avatar}
                alt={`${name}`}
            />
            <div className="flex flex-col items-center z-10">
                <p className="text-sm font-bold capitalize">{name}</p>
                <p className="text-xs text-gray-800 capitalize">{occupation}</p>
            </div>

            <Link to={`/contacts/details/${id}`} className="text-white bg-deep-purple-accent-400 mt-8 text-xs font-medium flex items-center absolute bottom-0 py-2 border-t w-full left-0 right-0 mx-auto justify-center">
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </Link>
        </div>
    )
}

export default ContactCard
