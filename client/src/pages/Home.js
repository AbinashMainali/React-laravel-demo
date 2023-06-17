import { useEffect, useState } from "react";
import http from "../helper/http";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http
      .get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <h2>User Listing</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>edit</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
