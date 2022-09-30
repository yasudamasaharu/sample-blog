import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const loginHandler = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginHandler}>Googleでログイン</button>
    </div>
  );
};

export default Login;
