import { Link } from 'react-router-dom'
import styles from '../../../assets/styles/Contacts/Add/CancelButton.module.scss'

interface ButtonProps {
    title: string;
}

export const CancelButton = ({ title }: ButtonProps): JSX.Element => <Link to="/contacts" className={styles.cancel_button}>{title}</Link>