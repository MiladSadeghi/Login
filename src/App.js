import {GlobalStyle, MainDiv, Container} from "./styles/styles"
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp"
import {Routes, Route} from "react-router-dom";
import { createContext, useState } from "react";
import Main from "./components/Main";

export const StartApp = createContext();

function App() {
  const [scaleX, setScaleX] = useState(-1);
  return (
    <MainDiv scaleX={scaleX}>
      <GlobalStyle />
      <Container>
        <StartApp.Provider value={{setScaleX}}>
          <Routes>
            <Route path={"/login"} element={<Login />} />
            <Route path={"/signup"} element={<SignUp />} />
            <Route path={"/"} element={<Main />} />
          </Routes>
        </StartApp.Provider>
      </Container>
    </MainDiv>
  );
}

export default App;
