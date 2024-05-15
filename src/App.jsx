import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/projects"} element={<Projects/>}/>
                </Routes>
            </Layout>
        </>
    );
}

export default App;
