import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import HomePages from "./pages/HomePages/HomePages";

function App() {
  const [checkedNavMenu, setCheckedNavMenu] = React.useState(false);
  const onClickCheckedNavMenu = (checked) => {
    setCheckedNavMenu(checked);
  };
  return (
    <div className="App">
      <Header onClickCheckedNavMenu={onClickCheckedNavMenu} />
      <div>
        <HomePages />
      </div>

      <Nav
        onClickCheckedNavMenu={onClickCheckedNavMenu}
        checkedNavMenu={checkedNavMenu}
      />
    </div>
  );
}

export default App;
