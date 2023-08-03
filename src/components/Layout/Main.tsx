import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Main(): JSX.Element {

  return (
    <>
      <Header />
      <main className="f-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Main;
