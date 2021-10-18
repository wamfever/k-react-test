import { Link } from 'react-router-dom'
import styles from '../../assets/styles/Contacts/ContactCard.module.scss'

type ContactProps = {
    id: any;
    name: string;
    avatar: any;
    occupation: string;
    phone: string;
    email: string;
    age: string;
    gender: string;
}

export const ContactCard = ({ id, name, phone, email, age, gender, avatar, occupation }: ContactProps): JSX.Element => {
    return (
        <Link to={`/contacts/details/${id}`} className={styles.contact_card}>
            <div className={styles.contact_card__left_side}>
                <img
                    className={styles.contact_card__left_side__avatar}
                    src={avatar}
                    alt={`${name}`}
                />
                <div className={styles.contact_card__left_side__text}>
                    <p className={styles.contact_card__left_side__text__name}>{name} <small className={styles.contact_card__left_side__text__age}>({age} yrs. old)</small></p>
                    <p className={styles.contact_card__left_side__text__occupation}>{occupation}</p>
                </div>
            </div>

            <div className={styles.contact_card__right_side}>
                <div className={styles.contact_card__right_side__item}>
                    <div className={styles.contact_card__right_side__item__label}>Email address</div>
                    <div className={styles.contact_card__right_side__item__text}>{email}</div>
                </div>
                <div className={styles.contact_card__right_side__item}>
                    <div className={styles.contact_card__right_side__item__label}>Phone number</div>
                    <div className={styles.contact_card__right_side__item__text}>{phone}</div>
                </div>
                <div className={styles.contact_card__right_side__item}>
                    <div className={styles.contact_card__right_side__item__label}>Gender</div>
                    <div className={styles.contact_card__right_side__item__text}>{gender}</div>
                </div>
            </div>
        </Link>
    )
}