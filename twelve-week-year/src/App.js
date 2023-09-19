import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <h1>Twelve Week Year App</h1>
      <MyButton />
      <AddText />

    </div>
  );
}

function MyButton() {
  return (
    <button>Add Goal</button>

  )
  
}

function AddText() {
  return (
    <input type="text" name="goal" value="goal"></input>
  )
}
export default App;
