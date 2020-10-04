import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { UserContext } from "../../App";
import "./VoluntaryWorks.css";

const VoluntaryWorks = (props) => {

  const { value, value2 } = useContext(UserContext);
  const [voluntary, setVoluntary] = value2;

  const { name, img, id } = props.data;

  const handleVoluntary =(work) =>{
    setVoluntary(work);
  }


  return (
    <div className="col-md-6 col-lg-3" onClick={()=>handleVoluntary(props.data)}>
      <div className={`card card-${id} mb-3`}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-light text-center">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default VoluntaryWorks;
