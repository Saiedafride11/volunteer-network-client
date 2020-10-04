import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Home.css";
import Header from "../Header/Header"
import VoluntaryWorksContainer from "../VoluntaryWorks/VoluntaryWorksContainer";

const Home = () => {
  return (
    <div>
        <Header></Header>
      <Container className="home-container">
        <div className="banner-container">
          <h2>I GROW UP HELPING PEOPLE IN NEED</h2>
          <div className="row no-gutters">
            <div className="col-md-9">
              <input type="text" className="form-control form-control-lg" />
            </div>
            <div className="col-md-3">
              <Button variant="primary" size="lg">
                Register
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <VoluntaryWorksContainer></VoluntaryWorksContainer>
    </div>
  );
};

export default Home;
