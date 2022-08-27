import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

import { auth } from '../components/firebase-config';

const Main = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        navigate("/login");
      }
    });
  }, [])
  return (
    <div>
      <div style={{zIndex: 10, position: "relative", color: "#fff"}}>
        <h1 style={{fontSize: "4rem", textAlign: 'center'}}>
          {
            currentUser &&
            <Typewriter
              options={{
                strings: [`Hello, ${currentUser?.displayName}!`, `Welcome...`],
                autoStart: true,
                loop: true,
              }}
            />
          }
        </h1>
      </div>
    </div>
  );
};

export default Main;