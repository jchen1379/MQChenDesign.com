import React from 'react';
import '../Style/style.css';

export const FullSizeProjectImage = ({src}) => {
  return (
    <img className="project-picture-fullsize" src={src} alt=""/>
  )
};

export const DualSquareProjectImage = ({src1, src2}) => {
  return (
    <div className="wrapper">
      <div className="picture-container ratio-1-1">
        <div className="project-display-picture ratio-1-1 margin-offset-1-1">
          <img src={src1} alt=""/>
        </div>
      </div>
      {src2 && (
        <div className="picture-container ratio-1-1">
          <div className="project-display-picture ratio-1-1 margin-offset-1-1">
            <img src={src2} alt=""/>
          </div>
        </div>
      )}
    </div>
  )
}

export const DualLandscapeProjectImage = ({src1, src2}) => {
  return (
    <div className="wrapper">
      <div className="picture-container ratio-4-3">
        <div className="project-display-picture ratio-4-3 margin-offset-4-3">
          <img src={src1} alt=""/>
        </div>
      </div>
      {src2 && (
        <div className="picture-container ratio-4-3">
          <div className="project-display-picture ratio-4-3 margin-offset-4-3">
            <img src={src2} alt=""/>
          </div>
        </div>
      )}
    </div>
  )
}

export const DualLandscapeWideProjectImage = ({src1, src2}) => {
  return (
    <div className="wrapper">
      <div className="picture-container ratio-16-9">
        <div className="project-display-picture ratio-16-9 margin-offset-16-9">
          <img src={src1} alt=""/>
        </div>
      </div>
      {src2 && (
        <div className="picture-container ratio-16-9">
          <div className="project-display-picture ratio-16-9 margin-offset-16-9">
            <img src={src2} alt=""/>
          </div>
        </div>
      )}
    </div>
  )
}

export const DualPortraitProjectImage = ({src1, src2}) => {
  return (
    <div className="wrapper">
      <div className="picture-container ratio-3-4">
        <div className="project-display-picture ratio-3-4 margin-offset-3-4">
          <img src={src1} alt=""/>
        </div>
      </div>
      <div className="picture-container ratio-3-4">
        <div className="project-display-picture ratio-3-4 margin-offset-3-4">
          <img src={src2} alt=""/>
        </div>
      </div>
    </div>
  )
}

export const DualPortraitProjectImageWithSubtitle = ({src1, subtitle1, src2, subtitle2}) => {
  return (
    <div className="wrapper">
      <div className="picture-container">
        <img src={src1} alt=""/>
        <p className="project-picture-subtitle">{subtitle1}</p>
      </div>
      <div className="picture-container">
        <img src={src2} alt=""/>
        <p className="project-picture-subtitle">{subtitle2}</p>
      </div>
    </div>
  )
}

export const PosterStyleProjectImage = ({children}) => {
  return (
    <div className="poster-picture-container">
      {children}
    </div>
  )
}

export const DualProjectImageLeftWideRightNarrow = ({src1, src2}) => {
  return (
    <div className="wrapper">
      <div className="picture-container ratio-16-9 width-3-of-4">
        <div className="project-display-picture ratio-16-9 margin-offset-16-9">
          <img src={src1} alt=""/>
        </div>
      </div>
      <div className="picture-container ratio-9-16 width-1-of-4">
        <div className="project-display-picture ratio-9-16 margin-offset-9-16">
          <img src={src2} alt=""/>
        </div>
      </div>
    </div>
  )
}

export const VideoContainer = ({videoUrl}) => {
  return (
    <div className="iframe-container">
      <iframe className="responsive-iframe"
              src={videoUrl}
              frameBorder="0"
              title={"Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen/>
    </div>
  )
}
