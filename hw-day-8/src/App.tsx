
import './App.css';
import NavBar from './components/Navbar/Navbar';
// import Home from './components/Home/Home'
import MySongs from "./components/MySongs/MySongs"

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Home/> */}
      < MySongs title="hello world"/>
    </div>
  );
}

export default App;
