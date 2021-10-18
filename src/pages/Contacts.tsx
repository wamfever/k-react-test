import { useLiveQuery } from 'dexie-react-hooks'
import DexieDatabase from '../modules/DexieDatabase'
import { AddContactButton } from '../components/Contacts/AddContactButton'
import { HeaderTitle } from '../components/Contacts/HeaderTitle'
import { ContactCard } from '../components/Contacts/ContactCard'
import { NoContactsFound } from '../components/Contacts/NoContactsFound'

export const Contacts = (): JSX.Element | null => {

    /* Query the database and retrieving all the database contacts */
    const allContacts = useLiveQuery(() => DexieDatabase.contacts.toArray(), []);

    /* Checking if the query returns any data */
    if (!allContacts) return null

    const renderContacts = (): JSX.Element[] => {
        return allContacts.map(({ id, name, avatar, occupation, phone, email, age, gender }) => (
            <ContactCard key={id} id={id} name={name} avatar={avatar} occupation={occupation} phone={phone} email={email} age={age} gender={gender} />
        ))
    }

    return (
        <>
            <HeaderTitle title="Contacts list" />
            <AddContactButton />
            {allContacts && allContacts.length > 0 ? renderContacts() : <NoContactsFound />}
        </>
    )
}
