import React from "react";
import "./index.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import backGroundImage from "../../assets/backGroundImage.svg";
import polyGon from "../../assets/whitePolygon.svg";
import Metadome from "../../assets/Metadome.svg";
import KanavsImage from "../../assets/KanavsImage.svg";
import Share from "../Share/Share";
import {
  EmailShareButton,
} from "react-share";

export default function LandingPage() {
  return (
    <div className="container">
      <div className="top-panel">
        <img src={backGroundImage} className="cover-screen-img"></img>
        <img src={polyGon} className={"polyGon " + "cover-screen"}></img>
        <img src={Metadome} className={"cover-screen " + "logo"}></img>
        <img src={KanavsImage} className={"kanavs"}></img>
      </div>
      <div className="bottom-panel">
        <div className="intro">
          <p className="name">Hi, I’m Kanav Singla</p>
          <p className="foundingInfo">Founder & CEO, Metadome.ai</p>
          <p className="intro-details">
            An inventor in the XR space dedicated <br />
            to making immersive tech more accessible.
          </p>
          <div className="contact-row ">
            <div className="contact-button center">Follow</div>
            <EmailShareButton url={"https://metadome.ai/"} subject={"Metadome"} separato=" " body={"Metadome"}>
              <div className="contact-button center">Email</div>
            </EmailShareButton>
            
            <CopyToClipboard text={919971312806}>
              <div className="contact-button center">Call</div>
            </CopyToClipboard>
          </div>
        </div>
        <div className="about">
          <p className="about-header">About Metadome.ai</p>
          <p className="about-name">
            Metadome.ai is a Metaverse ecosystem built to enable shopping
            <br></br>
            experiences in the virtual world. We are dedicated to creating the
            <br></br>
            most inspiring virtual world(s) for everyone. Our mission is to
            <br></br>
            onboard 1B+ people to experience our virtual worlds by 2023.
            <br></br>
            virtual worlds by 2023.
          </p>
        </div>
        <div className="about">
          <p className="about-header">Address</p>
          <div className="adderessChilds">
            <p className="about-name">
              3 E 3rd Ave Suite 200,
              <br></br>
              San Mateo, CA 94401,
              <br></br>
              United States
            </p>
            <p className="about-name">
              DLF Forum, 1st Floor,<br></br>
              Cyber City, Phase III,<br></br>
              Gurugram,<br></br>
              Haryana, 122002
            </p>
          </div>
        </div>
        <div className="about">
          <p className="about-header">About Metadome.ai</p>
          <Share></Share>
        </div>
      </div>
    </div>
  );
}
