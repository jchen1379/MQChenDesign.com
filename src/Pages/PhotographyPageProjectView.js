import {ProjectDisplayContainer} from "../Components/ProjectDisplay/ProjectDisplayContainer";
import {ProjectDisplayInfoRight} from "../Components/Text";
import {FullSizeProjectImage, PosterStyleProjectImage} from "../Components/Image";
import React from "react";

export const Human = () => {
  return (
    <ProjectDisplayContainer id="human">
      <ProjectDisplayInfoRight projectTitle="HUMAN"/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/photography_human/Mingqin_Portrait03.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_human/Mingqin_Portrait12.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_human/Mingqin_Portrait15.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_human/Mingqin_rhythm10.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_human/Mingqin_rhythm17.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_human/21.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_human/Ming_Light14.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_human/Ming_Light08.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const DoubleExposure = () => {
  return (
    <ProjectDisplayContainer id="double_exposure">
      <ProjectDisplayInfoRight projectTitle="DOUBLE EXPOSURE"
                               projectDescription="Double exposure photography and post card design."/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/photography_double_exposure/灏.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_double_exposure/6.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_double_exposure/Post+Card.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const Landscape = () => {
  return (
    <ProjectDisplayContainer id="landscape">
      <ProjectDisplayInfoRight projectTitle="LANDSCAPE"/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/photography_landscape/23.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_landscape/25.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_landscape/30.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_landscape/29.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_landscape/40.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_landscape/Ming_Light15.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_landscape/33.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const Contrast = () => {
  return (
    <ProjectDisplayContainer id="contrast">
      <ProjectDisplayInfoRight projectTitle="CONTRAST"/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/photography_contrast/WechatIMG592.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_contrast/WechatIMG600.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_contrast/WechatIMG593.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_contrast/WechatIMG597.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_contrast/WechatIMG594.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_contrast/WechatIMG583.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_contrast/WechatIMG595.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const Wedding = () => {
  return (
    <ProjectDisplayContainer id="wedding">
      <ProjectDisplayInfoRight projectTitle="WEDDING"/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/photography_wedding/IMG_8434.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_wedding/IMG_8506.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_wedding/IMG_8539.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_wedding/IMG_8559.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_wedding/IMG_8532.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_wedding/IMG_4844.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_wedding/IMG_8442.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_wedding/IMG_8553.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_wedding/IMG_8653.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_wedding/IMG_4866.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_wedding/IMG_8525.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const Aquarium = () => {
  return (
    <ProjectDisplayContainer id="aquarium">
      <ProjectDisplayInfoRight projectTitle="AQUARIUM"/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/photography_aquarium/WechatIMG578.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_aquarium/WechatIMG579.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_aquarium/WechatIMG581.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/photography_aquarium/WechatIMG580.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}
