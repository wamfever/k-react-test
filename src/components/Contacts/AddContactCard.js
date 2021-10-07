import React from 'react'
import { Link } from 'react-router-dom'

function AddContactCard() {
    return (
        <Link to="/k-react-test/contacts/add" className="bg-white border shadow-sm flex items-center justify-center flex-col rounded-2xl flex-1 h-[250px] w-full transition-all cursor-pointer hover:scale-[1.02]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 drop-shadow" viewBox="0 0 20 20" fill="#651fff">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <div className="font-bold text-sm mt-1 text-deep-purple-400">Add Contact</div>
        </Link>
    )
}

export default AddContactCard
