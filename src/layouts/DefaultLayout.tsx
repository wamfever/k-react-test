import { Navigation } from "../components/Navigation/Navigation"
import { Footer } from "../components/Footer/Footer";
import styles from '../assets/styles/Layouts/DefaultLayout.module.scss'

type LayoutProps = {
    children: JSX.Element;
}

export const DefaultLayout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Navigation />
            <main className={styles.default_layout}>{children}</main>
            <Footer />
        </>
    )
}