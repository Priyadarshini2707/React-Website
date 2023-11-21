import './App.css';
import Featured from './Components/Featured';
import TopNav from './Components/TopNav';
import Delivery from './Components/Delivery';
import TopPicks from './Components/TopPicks';



function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
    </div>
  );
}

export default App;
