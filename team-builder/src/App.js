import React, { useState } from 'react';
import logo from './logo.svg';
import PersonForm from './components/Form';
import TeamMembers from './components/Team';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 0,
      name: "Paul M Edwards",
      email: "pauledwards@gmail.com",
      role: "Full Stack Web Application Engineer"
    }
  ]);
  
  const addTeamMember = person => {
    const newPerson = {
      id: teamMembers.length,
      name: person.name,
      role: person.role,
      email: person.email
    };

    setTeamMembers([...teamMembers, newPerson]);
  };
  
  const delTeamMember = id => {
    const newArray = teamMembers.filter(person => {
      return person.id !== id;
    });
    setTeamMembers(newArray);
  };

  return (
    <div className="App">
      <h1 className="App-header"><img src={logo} className="App-logo" />My Team</h1>
      <PersonForm addTeamMember={addTeamMember} />
      <TeamMembers teamMembers={teamMembers} delTeamMember={delTeamMember} />
    </div>
  );
}

export default App;
