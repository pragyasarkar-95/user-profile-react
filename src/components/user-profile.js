import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import logo from "../assets/img/profilePicture.jpg";
import malelogo from "../assets/img/Male.jpg";
import EditUserProfile from "../components/edit-user.profile";
import './user-profile.css'
export default function UserProfile({ value }) {
  // console.log(value);
  const [img, setImg] = useState(malelogo);
  const [radioSelected, setSelected] = useState("male");
  const onChangeValue = (param) => {
    if (param === "female") {
      setImg(logo);
      setSelected(param);
    } else {
      setImg(malelogo);
      setSelected(param);
    }
  };
  return (
    // <div>
    //   <span style={{ color: "green" }}>Deepak</span>
    //   <button onClick={() => handleClick("deepak from parameter")}>
    //     Deepak
    //   </button>
    // </div>
    <Card className="card-container">
      <EditUserProfile logoName={img}></EditUserProfile>
      <Card.Body>
        {/* <Card.Title>Pragya Sarkar</Card.Title>
        <Card.Subtitle>Software Engineer</Card.Subtitle> */}
        <div class="profile-name">Pragya Sarkar</div>
        <div class="profile-designation">Software Engineer</div>
        <div class="profile-email">pragya.sarkar@xyramsoft.com</div>
        <div className="gender-selection">
          <input
            type="radio"
            defaultChecked={radioSelected === "female"}
            onClick={() => onChangeValue("female")}
            value="Female"
            name="gender"
          />{" "}
          Female &nbsp;
          <input
            type="radio"
            defaultChecked={radioSelected === "male"}
            onClick={() => onChangeValue("male")}
            value="Male"
            name="gender"
          />{" "}
          Male
        </div>
   
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
