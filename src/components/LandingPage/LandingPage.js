import React from 'react'
import './index.css';
import backGroundImage from "../../assets/backGroundImage.svg";
import polyGon from "../../assets/whitePolygon.svg";
import Metadome from "../../assets/Metadome.svg";
import KanavsImage from "../../assets/KanavsImage.svg";

export default function LandingPage() {
  return (
    <div className='container'>
      <div className='top-panel'>
        <img src={backGroundImage} className='cover-screen-img'>
        </img>
        <img src={polyGon} className={'polyGon ' + 'cover-screen'}>
        </img>
        <img src={Metadome} className={'cover-screen ' + 'logo'}>
        </img>
        <img src={KanavsImage} className={'kanavs'}>
        </img>
      </div>
    </div>
  )
}
