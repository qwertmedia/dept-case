import "./App.scss";
import ClientCard from "./components/ClientCard/ClientCard";
import ClientList from "./components/ClientList/ClientList";
import Footer from "./components/Footer/Footer";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroBanner />
      <ClientCard />
      <ClientList />
      <Footer />
    </div>
  );
}

export default App;
