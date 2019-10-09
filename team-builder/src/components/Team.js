import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faUserTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faUserEdit, faUserTimes);

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const TeamMembers = props => {
  console.log(props);
  return (
    <div className="team-list">
      {props.teamMembers.map(person => {
        return (
          <div className={"person person-color-"+random(0,3)} key={person.id}>
            <h2>{person.name}</h2>
            <p><strong>{person.role}</strong></p>
            <p><a href={"mailto:"+person.email}>{person.email}</a></p>
            <div className="flex button-group">
              <button onClick={() => props.delTeamMember(person.id)}><FontAwesomeIcon icon={faUserTimes} />&nbsp;Remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TeamMembers;
