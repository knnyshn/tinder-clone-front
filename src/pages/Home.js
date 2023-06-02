import React from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import Authmodal from "../components/Authmodal";
import { useCookies } from "react-cookie";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const authToken = cookies.AuthToken

  const handleClick = () => {
    if (authToken) {
      removeCookie('UserId', cookies.UserId)
      removeCookie('AuthToken', cookies.AuthToken)
      window.location.reload()
      return
    }
    setShowModal(true);
    setIsSignUp(true);

  };
  return (
    <div className="overlay">
      <Nav
        authToken={authToken}
        minimal={false}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp}
      />
      <div className="home">
        <h1 className="primary-title">Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal && (
          <Authmodal
            setShowModal={setShowModal}
            isSignUp={isSignUp}
            isSignUUp={isSignUp}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
