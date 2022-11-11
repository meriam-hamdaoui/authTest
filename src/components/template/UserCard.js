import React from "react";
import { TiUserDelete } from "react-icons/all";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../JS/userReducer";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  return (
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
  );
};

export default UserCard;
