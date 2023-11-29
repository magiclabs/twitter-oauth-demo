import { magic } from "../lib/magic";
import { FaTwitter } from "react-icons/fa";

const Login = () => {
  const handleSocialLogin = async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: "twitter",
        redirectURI: new URL("/dashboard", window.location.origin).href,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Magic + Twitter</h1>
      <button onClick={handleSocialLogin}>
        <FaTwitter size={"2.5rem"} />
        Log in with Twitter
      </button>
    </div>
  );
};

export default Login;
