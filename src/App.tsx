import { Routes, Route } from "react-router-dom";

import Main from "./components/Layout/Main";
import LandingHero from "./components/Layout/Heros/LandingHero";
import UsersGridHero from "./components/Users/UsersGridHero/UsersGridHero";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import User from "./pages/User/User";
import "./styles/Button.css";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route
          path="/"
          element={
            <>
              <LandingHero />
              <UsersGridHero />
            </>
          }
        />
        <Route path="/user/:id" element={<User/>}/>
        <Route path="about" element={<About />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound /> } />
      </Route>
    </Routes>
  )
}

export default App;
