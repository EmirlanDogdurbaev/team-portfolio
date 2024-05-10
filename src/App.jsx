import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Home from "./pages/Home/Home.jsx";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";

function App() {
  return (
    <>
      {localStorage.getItem("access_token") ? (
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path={"/about"} element={<About/>}/>
              <Route path={"/projects"} element={<Projects/>}/>
            </Routes>
          </Layout>
      ) : (
          <Layout>
            <Routes>
              <Route exact path="/register" element={<Register/>}/>
              <Route path={"/login"} element={<Login/>}/>
              <Route path="/*" element={<Navigate to="/register"/>}/>
            </Routes>
          </Layout>
      )}
    </>
  );
}

export default App;
