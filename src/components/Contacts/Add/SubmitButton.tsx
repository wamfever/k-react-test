import styles from '../../../assets/styles/Contacts/Add/SubmitButton.module.scss'
import { ReactComponent as CheckmarkIcon } from '../../../assets/images/icon-checkmark.svg'

interface ButtonProps {
    title: string;
}

export const SubmitButton = ({ title }: ButtonProps): JSX.Element => {
    return (
        <button type="submit" className={styles.submit_button}>
            <CheckmarkIcon className={styles.submit_button__svg} />
            {title}
        </button>
    )
}