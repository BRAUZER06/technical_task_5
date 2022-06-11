import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import HomePages from "./pages/HomePages/HomePages";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <HomePages />
      </div>

      {/* <Nav/> */}
    </div>
  );
}

export default App;
