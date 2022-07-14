import './App.css';
import Usa from "./components/USA_USD/Usa.js"
import Calcul from "./components/Calcul/Calcul"
function App() {
  return (
    <div className="App">
      {/* <Usa ply={"USD"} plx ={"USA"} son = {11000}/>
      <Usa ply={"USA"} plx ={"USD"} son = {1/11000}/> */}
      <Calcul />
    </div>
  );
}
export default App;
