import React from "react";

function GroupMembersList() {
  const group10Members = [
    "John",
    "Sarah",
    "Mike",
    "Emily",
    "Alex",
    "Grace",
    "Daniel",
    "Olivia",
    "Ethan",
    "Sophia",
  ];

  return (
    <div>
      <h2>Group 10 Members</h2>
      <ul>
        {group10Members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
}

export default GroupMembersList;
