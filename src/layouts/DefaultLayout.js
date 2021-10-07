import { Navigation } from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer";

const DefaultLayout = ({children}) => {
    return (
        <>
            <Navigation />
            <main className="bg-white mt-4 rounded-t-xl p-10 px-12 relative border sm:max-w-xl md:max-w-full lg:max-w-4xl w-full mx-auto">{children}</main>
            <Footer />
        </>
    )
}

export default DefaultLayout;