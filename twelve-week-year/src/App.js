import React, { useState } from 'react';
import GoalAddButton from './components/GoalAddButton'; // Update the import path
import AddText from './components/AddText'; // Update the import path
import './styles/App.css';

function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = (goalText) => {
    setGoals([...goals, goalText]);
  };

  return (
    <div className="App">
      <h1>Twelve Week Year App</h1>
      <AddText onAddGoal={addGoal} />
      <GoalAddButton onAddGoal={addGoal} /> {/* Pass the onAddGoal function */}
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
