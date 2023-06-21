import http from "../helper/http";
import {useEffect, useState} from "react";

import { useParams} from "react-router-dom";
export default function View() {

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


  return (
    <div className="container">
      <header className="jumbotron">
        <h3>View</h3>
        {/*<iframe src={"https://triviacontest.azurewebsites.net"} title={"Trivia"} width="100%" height="800px" ></iframe>*/}
        <div className="card p-2">
          <div className="row">
            <div className="col-md-6 justify-content-center">
              <h4>Name</h4>
              <p>{inputs.name}</p>
              <h4>Email</h4>
                <p>{inputs.email}</p>



            </div>
          </div>
        </div>
      </header>
    </div>
  );
}