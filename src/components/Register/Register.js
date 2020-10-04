import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Register.css";
import logo from "../../images/logos/Group 1329.png";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";

const Register = () => {
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  const {name, email} = loggedInUser;
  let { voluntaryWork } = useParams();

  console.log(voluntaryWork)
  return (
    <Container>
      <div className="w-100 text-center">
        <img src={logo} alt="" className="" width="320px" />
      </div>

      <form className="form-container p-md-5" action="/addVoluntaryWork" method="post" >
        <h3>Register as a Voluteer</h3>
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" class="form-control" readOnly id="name" value={name} />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" readOnly value={email} />
        </div>

        <div class="form-group">
          <label for="date">Date</label>
          <input type="date" class="form-control" id="date" />
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description" />
        </div>

        <div class="form-group">
          <label for="work">Voluntary Work</label>
          <input type="text" class="form-control" id="work" readOnly value={voluntaryWork} />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </Container>
  );
};

export default Register;
