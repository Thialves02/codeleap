import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainScreen from "./pages/MainScreen/MainScreen";
import Signup from "./pages/Signup/Signup";
import GlobalStyle from "./assets/style/global";
import CtxApp from "./context/CtxApp"

function App() {
  return (
    <>
      <GlobalStyle />
      <CtxApp>
        <Router>
          <Routes>
            <Route path="/" element={<Signup />}></Route>
            <Route path="/main" element={<MainScreen />}></Route>
          </Routes>
        </Router>
      </CtxApp>
    </>
  );
}

export default App;
