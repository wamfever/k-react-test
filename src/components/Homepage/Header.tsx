import { HeaderButton } from './HeaderButton'
import styles from '../../assets/styles/Homepage/Header.module.scss'

export const Header = (): JSX.Element => {
    return (
        <div className={styles.header}>
            <h2>Hi and welcome to your own personal agenda!</h2>
            <p>
                Here you can manage your contacts easy and fast with just a few clicks.<br /> View, add, edit and even delete them right away.
            </p>
            <HeaderButton title="Let's get started!" />

        </div>
    )
}
