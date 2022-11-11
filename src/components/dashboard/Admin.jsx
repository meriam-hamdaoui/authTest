import React from "react";
import UserCard from "../template/UserCard";

const styleMap = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  gap: "1%",
  margin: "6% 1%",
};

const Admin = ({ userList }) => {
  return (
    <div style={styleMap}>
      {userList.map((user) => !user.admin && <UserCard user={user} />)}
    </div>
  );
};

export default Admin;
