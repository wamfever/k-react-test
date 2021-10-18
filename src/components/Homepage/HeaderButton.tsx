import { Link } from 'react-router-dom';
import styles from '../../assets/styles/Homepage/HeaderButton.module.scss'
import { ReactComponent as ArrowIcon } from '../../assets/images/icon-arrow.svg'

type HeaderButtonProps = {
    title: string;
}

export const HeaderButton = ({ title }: HeaderButtonProps): JSX.Element => {
    return (
        <div className={styles.header_button_container}>
            <Link
                to="/contacts"
                className={styles.header_button}
            >
                {title}
                <ArrowIcon className={styles.header_button__svg} />
            </Link>
        </div>
    )
}
