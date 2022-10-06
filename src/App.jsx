import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainScreen from "./pages/MainScreen/MainScreen";
import Signup from "./pages/Signup/Signup";
import GlobalStyle from "./assets/style/global";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Signup />}></Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/main" element={<MainScreen />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
