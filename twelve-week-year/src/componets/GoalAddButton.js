import React from 'react';

function GoalAddButton({ onAddGoal }) {
  const handleAddGoal = () => {
    onAddGoal("Default goal text"); // You can provide a default goal text here.
  };

  return (
    <button onClick={handleAddGoal}>Add Goal</button>
  );
}

export default GoalAddButton;
