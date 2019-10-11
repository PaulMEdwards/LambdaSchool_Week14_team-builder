import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import PersonForm from './components/Form';
import TeamMembers from './components/Team';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    // {
    //   id: 0,
    //   name: "Paul M Edwards",
    //   email: "pauledwards@gmail.com",
    //   role: "Full Stack Web Application Engineer",
    //   cardColor: 0
    // }
  ]);
  const [memberToEdit, setMemberToEdit] = useState();

  //Fetch previously input Team Members from local storage, if any.
  useEffect(() => {
    if (localStorage.getItem('teamMembers'))
      setTeamMembers(JSON.parse(localStorage.getItem('teamMembers')));
  }, []);

  //Store input Team Members into local storage
  useEffect(() => {
    reflowTeamMemberIds();
    localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
  }, [teamMembers]);
  
  const addTeamMember = person => {
    console.log('addTeamMember person: ', person);

    const newPerson = {
      id: teamMembers.length,
      name: person.name,
      role: person.role,
      email: person.email,
      cardColor: person.cardColor
    };

    setTeamMembers([...teamMembers, newPerson]);
  };

  const editTeamMember = selectedPerson => {
    console.log('editTeamMember: ', selectedPerson);

    let newTeam = teamMembers;
    newTeam[selectedPerson.id] = selectedPerson;
    setTeamMembers(newTeam);

    setMemberToEdit();
  };
  
  const delTeamMember = id => {
    const newArray = teamMembers.filter(person => {
      return person.id !== id;
    });
    setTeamMembers(newArray);
  };

  const reflowTeamMemberIds = () => {
    // console.log('teamMembers before reflow: ', teamMembers);

    let i = 0;
    teamMembers.forEach(p => {
      // console.log('p.name: ', p.name);
      // console.log('p.id before: ', p.id);
      // console.log('i: ', i);
      p.id = i;
      // console.log('p.id after: ', p.id);
      i++;
    })

    // console.log('teamMembers after reflow: ', teamMembers);
  }

  return (
    <div className="App">
      <h1 className="App-header"><img src={logo} className="App-logo" alt="App Logo" />My Team</h1>
      <PersonForm 
        addTeamMember={addTeamMember} 
        editTeamMember={editTeamMember} 
        memberToEdit={memberToEdit} 
      />
      <TeamMembers 
        teamMembers={teamMembers} 
        // editTeamMember={editTeamMember} 
        setMemberToEdit={setMemberToEdit} 
        delTeamMember={delTeamMember} 
      />
    </div>
  );
}

export default App;
