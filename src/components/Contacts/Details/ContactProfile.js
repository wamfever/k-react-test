import React from 'react'
import DexieDatabase from '../../../modules/DexieDatabase'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';

function ContactProfile({ id, name, email, phone, age, gender, occupation, avatar }) {

    /* Getting the contactId parameter passed into the route using the useParams() hook */
    const history = useHistory();

    /* Deleting the selected contact by id */
    const deleteContactHandle = async id => {
        /* Showing confirmation popup to ensure the user actually wants to delete the contact */
        if (window.confirm('Are you sure you wish to delete this contact?')) {
            /* Deleting the contact from the database */
            await DexieDatabase.delete(id);

            /* Redirecting to the /contacts page */
            history.push("/k-react-test/contacts");
        }
    }

    return (
        <div className="w-full mx-auto mt-10">
            <div className="flex flex-col">
                <div className="">
                    <div className="flex-none sm:flex">
                        <div className="h-32 w-32 sm:mb-0 mb-3">
                            <img src={avatar} alt="aji" className=" w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg" />
                        </div>
                        <div className="flex-auto sm:ml-5 justify-evenly">
                            <div className="flex items-center justify-between sm:mt-2">
                                <div className="flex items-center">
                                    <div className="flex flex-col">
                                        <div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">{name}</div>
                                        <div className="flex-auto text-gray-500 my-1">
                                            <span className="mr-3 ">{occupation}</span><span className="mr-3 border-r border-gray-200  max-h-0"></span><span>{age} yrs old</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-end pt-2 text-sm text-gray-500">
                                <div className="flex flex-col">
                                    <div className="flex-1 inline-flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                        <p className="">{email}</p>
                                    </div>
                                    <div className="flex-1 inline-flex items-center my-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <p className="">{phone}</p>
                                    </div>
                                    <div className="flex-1 inline-flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <p className="capitalize">{gender}</p>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => deleteContactHandle(id)} className="inline-flex items-center justify-center h-8 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-red-400 hover:bg-red-500 focus:shadow-outline focus:outline-none mr-2 text-xs">Delete</button>
                                    <Link to={`/k-react-test/contacts/edit/${id}`} className="inline-flex items-center justify-center h-8 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none text-xs">Edit user details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactProfile
