import DexieDatabase from '../../../modules/DexieDatabase'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
import styles from '../../../assets/styles/Contacts/Details/ContactProfile.module.scss'
import { ReactComponent as EmailIcon } from '../../../assets/images/icon-email.svg'
import { ReactComponent as PhoneIcon } from '../../../assets/images/icon-phone.svg'
import { ReactComponent as GenderIcon } from '../../../assets/images/icon-gender.svg'
import { ReactComponent as TrashIcon } from '../../../assets/images/icon-trash.svg'
import { ReactComponent as EditIcon } from '../../../assets/images/icon-edit.svg'

type ContactProfileProps = {
    id: any;
    name: string;
    email: string;
    phone: string;
    age: string;
    gender: string;
    occupation: string;
    avatar: string;
}

export const ContactProfile = ({ id, name, email, phone, age, gender, occupation, avatar }: ContactProfileProps): JSX.Element => {

    /* Getting the contactId parameter passed into the route using the useParams() hook */
    const history = useHistory();

    /* Deleting the selected contact by id */
    const deleteContactHandle = async (id: number) => {
        /* Showing confirmation popup to ensure the user actually wants to delete the contact */
        if (window.confirm('Are you sure you wish to delete this contact?')) {
            /* Deleting the contact from the database */
            await DexieDatabase.contacts.delete(id);

            /* Redirecting to the /contacts page */
            history.push("/contacts");
        }
    }

    return (
        <div className="w-full mx-auto mt-10 p-8">
            <div className="flex flex-col">
                <div>
                    <div className="flex-none sm:flex">
                        <div className="h-32 w-32 sm:mb-0 mb-3 flex justify-center items-center mx-auto">
                            <img src={avatar} alt="Contact Avatar" className="w-32 h-32 object-cover rounded-full shadow-lg align-middle" />
                        </div>
                        <div className="flex-auto sm:ml-5 justify-evenly">
                            <div className="flex items-center justify-center md:justify-between sm:mt-2">
                                <div className="flex items-center">
                                    <div className="flex flex-col">
                                        <div className="w-full flex-none text-center sm:text-left text-lg text-[#eeeeee] font-bold leading-none">{name}</div>
                                        <div className="flex-auto text-gray-300 my-1">
                                            <span className="mr-3 ">{occupation}</span><span className="mr-3 border-r border-gray-300  max-h-0"></span><span>{age} yrs old</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end pt-2 text-sm text-gray-300">
                                <div className="flex flex-col">
                                    <div className="flex-1 inline-flex items-center">
                                        <EmailIcon className={styles.contact_profile__svg} />
                                        <p className="">{email}</p>
                                    </div>
                                    <div className="flex-1 inline-flex items-center my-1">
                                        <PhoneIcon className={styles.contact_profile__svg} />
                                        <p className="">{phone}</p>
                                    </div>
                                    <div className="flex-1 inline-flex items-center">
                                        <GenderIcon className={styles.contact_profile__svg} />
                                        <p className="capitalize">{gender}</p>
                                    </div>
                                </div>
                                <div className="mt-8 md:mt-0">
                                    <button onClick={() => deleteContactHandle(id)} className="inline-flex items-center justify-center h-8 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-400 hover:bg-red-500 focus:shadow-outline focus:outline-none mr-2 text-xs">
                                        <TrashIcon className={styles.contact_profile__svg__trash} /> Delete</button>
                                    <Link to={`/contacts/edit/${id}`} className="inline-flex items-center justify-center h-8 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#1663ad] focus:shadow-outline focus:outline-none text-xs">
                                        <EditIcon className={styles.contact_profile__svg__edit} />
                                        Edit user details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}