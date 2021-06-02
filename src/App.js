import './App.css';
import { Provider } from "react-redux";
// import { Values } from "redux-form-website-template";
import DishForm from "./components/DishForm";
import store from "./components/store";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Dish Form</h2>
        <Provider store={store}>
          <div style={{ padding: 15 }}>
            <DishForm/>
            {/* <Values form="simple" /> */}
          </div>
        </Provider>
      </header>
    </div>
  );
}

export default App;
