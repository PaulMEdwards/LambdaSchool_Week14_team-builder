import React, { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faUserPlus);

const PersonForm = props => {
  const [person, setPerson] = useState({ name: "", role: "", email: "" });

  const handleChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addTeamMember(person);
    setPerson({ name: "", role: "", email: "" });
  };

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
      {/* <input
        id="role"
        value={person.role}
        type="text"
        name="role"
        onChange={handleChange}
      /> */}
      <select id="role" name="role" onChange={handleChange}>
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
      <button type="submit"><FontAwesomeIcon icon={faUserPlus} />&nbsp;Add Team Member</button>
    </form>
  );
};

export default PersonForm;
