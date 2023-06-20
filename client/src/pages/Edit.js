import http from "../helper/http";
import {useEffect, useState} from "react";

import {useNavigate, useParams} from "react-router-dom";
export default function Edit() {
  const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const {id}= useParams();

    useEffect(() => {
        fetchUserById();
    }
    , []);
    const fetchUserById = () => {
        http.get("/users/"+id+'/edit').then((response) => {
            setInputs(
                {
                    name: response.data.name,
                    email: response.data.email,

                }
            );
        }).catch((error) => {
            console.log(error);
        });
    }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitForm = () => {
    console.log(inputs);
    http.post("/users/"+id, inputs).then((response) => {
        navigate("/");
        }).catch((error) => {
        console.log(error);

    }
    );
  };

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Create</h3>
        {/*<iframe src={"https://triviacontest.azurewebsites.net"} title={"Trivia"} width="100%" height="800px" ></iframe>*/}
        <div className="container border-1">
          <div className="row">
            <div className="col-md-6 justify-content-center">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control mb-2"
                placeholder="Name"
                value={inputs.name || ""}
                onChange={handleChange}
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control mb-2"
                placeholder="Email"
                value={inputs.email || ""}
                onChange={handleChange}
              />

              <button className="btn btn-primary" onClick={submitForm}>
                Update
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}