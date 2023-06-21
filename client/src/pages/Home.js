import { useEffect, useState } from "react";
import http from "../helper/http";
import {Link} from "react-router-dom";

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

  const deleteUser = (id) => {
    http.delete("/users/"+id).then((response) => {
        fetchAllUsers();
    }
    ).catch((error) => {
        console.log(error);
    }
    );
  }
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
                <td>{++index}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link className={"btn btn-primary m-2"} to={"/edit/" + user.id}>Edit</Link>
                  <Link className={"btn btn-primary"} to={"/view/" + user.id}>View</Link>&nbsp;
                  <button type={"button"} className={"btn btn-danger m-2"} onClick={()=>deleteUser(user.id)}>Delete</button>

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
