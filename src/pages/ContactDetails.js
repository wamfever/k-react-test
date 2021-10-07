import { useParams } from "react-router";
import DexieDatabase from "../modules/DexieDatabase";
import { useLiveQuery } from "dexie-react-hooks";
import HeaderTitle from "../components/Contacts/HeaderTitle";
import ContactProfile from "../components/Contacts/Details/ContactProfile";

/**
 * Using useLiveQuery() from 'dexie-react-hooks' for retrieving the details about a certain contact from database. 
 * useLiveQuery() is acting like the useEffect() hook from React.
 **/

const ContactsDetails = () => {

    /* Getting the contactId parameter passed into the route using the useParams() hook */
    const { contactId } = useParams()

    /* Query the database and retrieving the contact which match the contacId passed into the route as parameter */
    const contactDetails = useLiveQuery(() => DexieDatabase.where({ id: Number(contactId) }).toArray(), []);

    /* Checking if the query returns any data */
    if (!contactDetails) return null

    /* Destructuring the query result and take the name of the contact which is used into the HeaderTitle component */
    const { name } = contactDetails[0];


    return (
        <div>
            <HeaderTitle title={`Details for ${name}`} />
            <ContactProfile {...contactDetails[0]} />
        </div>
    )
}

export default ContactsDetails;