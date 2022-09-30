import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logoutHandler}>ログアウト</button>
    </div>
  );
};

export default Logout;
