import React, { useState, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserEdit } from '@fortawesome/free-solid-svg-icons';

library.add(faUserPlus, faUserEdit);

const PersonForm = props => {
  const defaultPerson = {
    name: "",
    role: "",
    email: "",
    cardColor: random(0,3)
  };
  const [person, setPerson] = useState(defaultPerson);

  useEffect(() => {
    if (props.memberToEdit) {
      console.log('props.memberToEdit: ', props.memberToEdit);
      setPerson(props.memberToEdit);
    }
  }, [props.memberToEdit]);

  const handleChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit e: ', e);

    if (props.memberToEdit) {
      console.log('props.memberToEdit: ', props.memberToEdit);
      console.log('editTeamMember person: ', person);
      props.editTeamMember(person);
    } else {
      console.log('addTeamMember person: ', person);
      props.addTeamMember(person);
    }

    setPerson(defaultPerson);
  };

  function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        value={person.name}
        type="text"
        name="name"
        onChange={handleChange}
      />

      <label htmlFor="role">Role</label>
      <select id="role" name="role" value={person.role} onChange={handleChange}>
        <option value="">...Select a Role...</option>
        <option value="Director of Software Engineering">Director of Software Engineering</option>
        <option value="Application Architect">Application Architect</option>
        <option value="Full Stack Web Application Engineer">Full Stack Web Application Engineer</option>
        <option value="Sr Software Engineer">Sr Software Engineer</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Jr Software Engineer">Jr Software Engineer</option>
        <option value="Sr QA Engineer">Sr QA Engineer</option>
        <option value="QA Engineer">QA Engineer</option>
        <option value="Jr QA Engineer">Jr QA Engineer</option>
        <option value="Sr Technical Support Engineer">Sr Technical Support Engineer</option>
        <option value="Technical Support Engineer">Technical Support Engineer</option>
        <option value="Jr Technical Support Engineer">Jr Technical Support Engineer</option>
        <option value="UI/UX Engineer">UI/UX Engineer</option>
        <option value="Product Owner">Product Owner</option>
        <option value="Product Designer">Product Designer</option>
        <option value="Product Analyst">Product Analyst</option>
      </select>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={person.email}
        type="text"
        name="email"
        onChange={handleChange}
      />

      <button type="submit">
        <FontAwesomeIcon icon={props.memberToEdit ? faUserEdit : faUserPlus} />&nbsp;{props.memberToEdit ? 'Update' : 'Add'} Team Member
      </button>
    </form>
  );
};

export default PersonForm;
