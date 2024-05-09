import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import cl from "./Login.module.scss";
import {login} from "../../../store/Slicers/authSlicer";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const loading = useSelector((state) => state.auth.status === "loading");
    const error = useSelector((state) => state.auth.error);

    const handleLogin = () => {
        dispatch(login({password, email})).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                navigate("/");
            } else {
                console.log("Ошибка входа:", response.error.message);
            }
        });
    };


    return (
        <div className={cl.Login}>
            <div>
                <h2>Войти</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span>
                    <button onClick={handleLogin} disabled={loading}>
                        {loading ? "Загрузка..." : "Войти"}
                    </button>
                    <Link to="/register">Регистрация</Link>
                </span>
                {error && <p>Error: {error}</p>}
            </div>
        </div>
    );
};

export default Login;
