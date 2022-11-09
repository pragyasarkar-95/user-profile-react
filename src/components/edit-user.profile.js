import React from "react";
export default function EditUserProfile({ logoName }) {
  return (
    <>
      {/* <img
        style={{ width: "100px", height: "100px", }}
        alt="logo"
        src={logoName}
      /> */}
      <div className="profile-pic-container">
        <div className="outerCircle-div">
          <div className="innerCircle-div">
            <img
              className="profile-icon"
              alt="logo"
              src={logoName}
            />
            {/* <div className="edit-icon">
              <img src="assets/svg/Camera.svg" for="uploadPrfileImage" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
