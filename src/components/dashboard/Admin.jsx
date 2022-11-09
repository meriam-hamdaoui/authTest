import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { deleteUser } from "../../JS/userReducer";
import { TiUserDelete } from "react-icons/all";

const styleMap = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  gap: "5px",
  margin: "1%",
};

const Admin = () => {
  const users = useSelector((state) => state.user);

  // console.log(users);

  const dispatch = useDispatch();

  return (
    <div style={styleMap}>
      {users.map((user) => (
        <Card
          key={user.id}
          style={{ display: "flex", width: "15rem", justifyContent: "center" }}
        >
          <TiUserDelete
            onClick={() => dispatch(deleteUser(user.id))}
            style={{ marginLeft: "90%" }}
          />

          <Card.Img
            src={user.pic}
            alt={user.name}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              alignSelf: "center",
            }}
          />
          <Card.Body style={{ alignSelf: "center" }}>
            <Card.Title>{user.username}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Admin;
