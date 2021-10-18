import { Link, NavLink } from "react-router-dom";
import styles from '../../assets/styles/Navigation/Navigation.module.scss'
import { ReactComponent as BookIcon } from '../../assets/images/icon-book.svg'

export const Navigation = (): JSX.Element => {
    return (
        <div className={styles.navigation}>
            <div className={styles.navigation__container}>
                <div className={styles.navigation__holder}>
                    <div className={styles.navigation__holder__left_side}>
                        <Link
                            to="/"
                            className={styles.navigation__holder__left_side__item}
                        >
                            <span>
                                <BookIcon className={styles.navigation__holder__left_side__item__svg} />
                                My agenda
                            </span>
                        </Link>
                    </div>
                    <ul className={styles.navigation__holder__right_side}>
                        <li className={styles.navigation__holder__right_side__list_item}>
                            <NavLink to="/"
                                exact
                                activeClassName={styles.navigation__holder__right_side__list_item__link__active}
                                className={styles.navigation__holder__right_side__list_item__link}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className={styles.navigation__holder__right_side__list_item}>
                            <NavLink to="/contacts"
                                exact
                                activeClassName={styles.navigation__holder__right_side__list_item__link__active}
                                className={styles.navigation__holder__right_side__list_item__link}
                            >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};