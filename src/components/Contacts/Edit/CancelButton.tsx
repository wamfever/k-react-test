import { Link } from 'react-router-dom'
import styles from '../../../assets/styles/Contacts/Edit/CancelButton.module.scss'

type CancelButtonProps = {
    title: string;
    to: string;
}

export const CancelButton = ({ title, to }: CancelButtonProps): JSX.Element => <Link to={to} className={styles.cancel_button}>{title}</Link>