import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav/Nav";
import HomePages from "./pages/HomePages/HomePages";
import "./App.css";

function App() {
  const [checkedNavMenu, setCheckedNavMenu] = React.useState(false);
  const onCheckedNavMenu = (checked) => {
    setCheckedNavMenu(checked);
  };
  return (
    <div className="App">
      <Header handlerCheckedNavMenu={onCheckedNavMenu} />
      <div>
        <HomePages />
      </div>

      <Nav
        handlerCheckedNavMenu={onCheckedNavMenu}
        checkedNavMenu={checkedNavMenu}
      />
    </div>
  );
}

export default App;
