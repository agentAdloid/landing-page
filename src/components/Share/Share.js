import React, { Component } from "react";

import img1 from "../../assets/Group 5564.svg";

import img3 from "../../assets/Group 5566.svg";
import img4 from "../../assets/Group 5567.svg";
import img5 from "../../assets/Group 5568.svg";

import './Share.css';


class Share extends Component {
  state = {
    value: "",
    copied: false,
  };
  render() {
    let shareUrl = this.props.url || "https://metadome.ai/";
    let title = this.props.title || "Metadome";


    return (
      <div className="share-icons">
            <a href="https://youtube.com/channel/UCxFWklZHyg_xerMvb-s9AYg">
              <img src={img1} />
            </a>
            <a href={"https://twitter.com/metadome_ai?t=m5gpKBHcsJYVGyW9ZTFxsA&s=09"} title={title}>
              <img src={img3} />
            </a>
            <a href={"https://m.facebook.com/236096316565892/"} quote={title}>
              <img src={img4}/>
            </a>
            <a href={"https://www.linkedin.com/company/metadome/"} summary={title}>
              <img src={img5}/>
            </a>
            
      </div>
    
    );
  }
}

export default Share;
