import Navbar from "../Navbar/Navbar.jsx";
// import Footer from "../Footer/Footer.jsx";

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    return (
        <main>
            <Navbar/>
            <div>
                {children}
            </div>
            {/*<Footer/>*/}
        </main>
    )
}

export default Layout