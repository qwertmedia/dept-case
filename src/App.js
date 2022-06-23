import "./App.scss";
import ClientCard from "./components/ClientCard/ClientCard";
import ClientList from "./components/ClientList/ClientList";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <HeroBanner />
      <ClientCard />
      <ClientList />
      <Form />
      <Footer />
    </>
  );
}

export default App;
