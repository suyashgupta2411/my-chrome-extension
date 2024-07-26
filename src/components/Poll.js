import React, { useState } from "react";
import "../styles/Poll.css";

const Poll = () => {
  // Dummy poll options with vote counts
  const [pollOptions, setPollOptions] = useState([
    { option: "Option 1", votes: 5 },
    { option: "Option 2", votes: 3 },
    { option: "Option 3", votes: 2 },
  ]);

  const [selectedOption, setSelectedOption] = useState("");

  const handleVote = () => {
    if (selectedOption) {
      setPollOptions(
        pollOptions.map((option) =>
          option.option === selectedOption
            ? { ...option, votes: option.votes + 1 }
            : option
        )
      );
      setSelectedOption("");
    }
  };

  // Calculate total votes
  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div className="poll">
      <h1>Poll</h1>
      <form>
        {pollOptions.map((option, index) => (
          <div key={index} className="poll-option">
            <input
              type="radio"
              id={`option${index}`}
              name="poll"
              value={option.option}
              checked={selectedOption === option.option}
              onChange={() => {
                setSelectedOption(option.option);
                handleVote();
              }}
            />
            <label htmlFor={`option${index}`}>{option.option}</label>
            <div className="poll-bar-container">
              <div
                className="poll-bar"
                style={{
                  width: `${
                    totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0
                  }%`,
                }}
              ></div>
              <span className="poll-percentage">
                {totalVotes > 0
                  ? ((option.votes / totalVotes) * 100).toFixed(1)
                  : 0}
                %
              </span>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Poll;

// Commented-out code for future admin integration

/* 
const handleAdminUpdate = (newOptions) => {
  // Example function to update poll options by admin
  setPollOptions(newOptions);
};

// Example admin form to add new options
const AdminForm = () => {
  const [newOption, setNewOption] = useState("");
  
  const handleAddOption = () => {
    setPollOptions([...pollOptions, { option: newOption, votes: 0 }]);
    setNewOption("");
  };

  return (
    <div className="admin-form">
      <input
        type="text"
        value={newOption}
        onChange={(e) => setNewOption(e.target.value)}
        placeholder="Add new option"
      />
      <button onClick={handleAddOption}>Add Option</button>
    </div>
  );
};
*/
