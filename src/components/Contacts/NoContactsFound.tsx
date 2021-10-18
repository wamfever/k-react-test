import styles from '../../assets/styles/Contacts/NoContactsFound.module.scss'

export const NoContactsFound = (): JSX.Element => {
    return (
        <div className={styles.no_contacts_found}>
            You don't have any contacts!
            <p>You can add one by clicking the <span>Add New Contact</span> button.</p>
        </div>
    )
}
