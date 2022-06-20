import "./App.scss";
import ClientCard from "./components/ClientCard/ClientCard";
import ClientList from "./components/ClientList/ClientList";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroBanner />
      <ClientCard />
      <ClientList />
    </div>
  );
}

export default App;
