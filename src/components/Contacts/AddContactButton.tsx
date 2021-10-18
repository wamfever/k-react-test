import { Link } from 'react-router-dom'
import styles from '../../assets/styles/Contacts/AddContactButton.module.scss'
import { ReactComponent as PlusIcon } from '../../assets/images/icon-plus.svg'

export const AddContactButton = (): JSX.Element => {
    return (
        <div className={styles.add_contact_button__container}>
            <Link to="/contacts/add" className={styles.add_contact_button}>
                <PlusIcon className={styles.add_contact_button__svg} />
                Add New Contact
            </Link>
        </div>
    )
}
