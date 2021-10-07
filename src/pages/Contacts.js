import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import DexieDatabase from '../modules/DexieDatabase'
import AddContactCard from '../components/Contacts/AddContactCard'
import HeaderTitle from '../components/Contacts/HeaderTitle'
import ContactCard from '../components/Contacts/ContactCard'

function Contacts() {

    /* Query the database and retrieving all the database contacts */
    const allContacts = useLiveQuery(() => DexieDatabase.toArray(), []);
    
    /* Checking if the query returns any data */
    if (!allContacts) return null

    return (
        <>
            <HeaderTitle title="Contacts list" />
            <div className="flex flex-wrap -mx-2 mt-10">
                <div className="w-1/4 my-2 px-2">
                    <AddContactCard />
                </div>

                {allContacts.map((props) => (
                    <div key={props.id} className="w-1/4 my-2 px-2">
                        <ContactCard {...props}/>
                    </div>
                ))
                }

            </div>
        </>
    )
}

export default Contacts
