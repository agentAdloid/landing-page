import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import img1 from "../../assets/Group 5564.svg";
import img2 from "../../assets/Group 5565.svg";
import img3 from "../../assets/Group 5566.svg";
import img4 from "../../assets/Group 5567.svg";
import img5 from "../../assets/Group 5568.svg";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TwitterShareButton,
  InstagramShareButton
} from "react-share";
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
            <a href="https://www.youtube.com/">
              <img src={img1} />
            </a>
            <TwitterShareButton url={shareUrl} title={title}>
              <img src={img3} />
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl} quote={title}>
              <img src={img4}/>
            </FacebookShareButton>
            <LinkedinShareButton url={shareUrl} summary={title}>
              <img src={img5}/>
            </LinkedinShareButton>
            
      </div>
      // <div className="share-overlay">
      //   <div className="share-on-div">
      //     <div className="share-header">
      //       <div className="share-heading">
      //         <p>Share</p>
      //       </div>
      //       <div
      //         className="close-share"
      //          onClick={() => this.props.setIsShare(!this.props.isShare)}
      //       >
      //        <img src={"/images/" + "cancel-icon.svg"} />
      //       </div>
      //     </div>

      //     <div className="share-contents">
      //       <div className="share-btn1">
      //         <CopyToClipboard
      //           text={shareUrl}
      //           onCopy={() => {
      //             this.setState({ copied: true });
      //             setTimeout(() => {
      //               this.setState({ copied: false });
      //             }, 1000);
      //           }}
      //         >
      //           <div className="share-icon">
      //           <img src={"/images/" + "copyLink.svg"} />
      //           </div>
      //         </CopyToClipboard>
      //         <div className="share-name">
      //           <p>Copy Link</p>
      //         </div>
      //       </div>
      //       <div className="share-btn1">
              // <FacebookShareButton url={shareUrl} quote={title}>
              //   <div className="share-icon">
                  
              //   <img src={"/images/" + "facebook.svg"} />
              //   </div>
              // </FacebookShareButton>
      //         <div className="share-name">
      //           <p>Facebook</p>
      //         </div>
      //       </div>
      //       {/* <div className="share-btn1">
      //         <FacebookShareButton url={shareUrl} quote={title}>
      //           <div className="share-icon">
                  
      //           <img src={"/images/" + "instagram.svg"} />
      //           </div>
      //         </FacebookShareButton>
      //         <div className="share-name">
      //           <p>Instagram</p>
      //         </div>
      //       </div> */}
      //       <div className="share-btn1">
      //         <TwitterShareButton url={shareUrl} title={title}>
      //           <div className="share-icon">
      //             {" "}
      //             <img src={"/images/" + "twitter.svg"} />
      //           </div>
      //         </TwitterShareButton>
      //         <div className="share-name">
      //           <p>Twitter</p>
      //         </div>
      //       </div>
      //       <div className="share-btn1">
      //         <EmailShareButton url={shareUrl} subject={title} separato=" " body={title}>
      //           <div className="share-icon">
      //           <img src={"/images/" + "email.svg"} />
      //           </div>
      //         </EmailShareButton>
      //         <div className="share-name">
      //           <p>Email</p>
      //         </div>
      //       </div>

      //       <div className="share-btn1">
      //         <WhatsappShareButton url={shareUrl} title={title} separator="  ">
      //           <div className="share-icon">
      //           <img src={"/images/" + "whatsapp.svg"} />
      //           </div>
      //         </WhatsappShareButton>
      //         <div className="share-name">
      //           <p>Whatsapp</p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   {this.state.copied ? (
      //     <div className="copied-alert">
      //       <p>Copied to clipboard</p>
      //     </div>
      //   ) : null}
      // </div>
    );
  }
}

export default Share;
