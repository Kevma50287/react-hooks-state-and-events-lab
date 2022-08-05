import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"

  const [appClass, setClass] = useState("App light")
  console.log(appClass)
  
  function handleToggle(){
    appClass === "App dark" ? setClass('App light') : setClass('App dark');
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggle}>{appClass==="App dark" ? 'Dark Mode' : 'Light Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
