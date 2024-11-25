import "../App.css";
import { Link } from "react-router-dom";
import { HomeScreen } from "../home/screens/home-screen";
import RegisterPage from "./RegisterPage";
import { Header } from "../Components/Header";
function HomePage() {

  return (
    <>
      <article className="inicio">
        <Header/>
        <div className="header-bottom">
          <h1>Centro Ecuestre Apóstol Santiago S.A.</h1>
          <p>
            Entrena, diviértete y vive experiencias inolvidables en nuestro
            campo ecuestre.
          </p>
        </div>
      </article>
      <HomeScreen/>
      <RegisterPage/>
    </>
  );
}

export default HomePage;
