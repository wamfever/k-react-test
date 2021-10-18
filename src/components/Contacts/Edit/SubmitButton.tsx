import styles from '../../../assets/styles/Contacts/Edit/SubmitButton.module.scss'
import { ReactComponent as CheckmarkIcon } from '../../../assets/images/icon-checkmark.svg'


type SubmitButtonProps = {
    title: string;
}

export const SubmitButton = ({ title }: SubmitButtonProps): JSX.Element => {
    return (
        <button type="submit" className={styles.submit_button}>
            <CheckmarkIcon className={styles.submit_button__svg} />
            {title}
        </button>
    )
}