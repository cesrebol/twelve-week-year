import React, { useState } from 'react';

function AddText({onAddGoal}) {
    const [goal, setGoal] = useState('');

    const handleInputChange = (e) => {
        setGoal(e.AddText.value);
    };

    const handleAddGoal = () => {
        onAddGoal(goal);
        setGoal('');
    };

    return (
        <div>
            <input
            type="text"
            name="goal"
            value={goal}
            onChange={handleInputChange}
            />
        <button onClick={handleAddGoal}>Add Goal</button>
        </div>
    )
}

export default AddText;