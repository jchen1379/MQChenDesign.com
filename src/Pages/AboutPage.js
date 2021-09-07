import React from 'react';

export function AboutPage() {
  const email = "mailto:mingqchen95@gmail.com";
  // const resume = "https://static1.squarespace.com/static/5a0b241964b05f2730b887fe/t/5b0c52592b6a288855bb55f4/1527534169944/Mingqin%27s+Resume.pdf";
  const resume = "../Mingqin's+Resume.pdf";
  const ins = "https://www.instagram.com/h.y.photographer/";

  return (
    <>
      <div>
        <div className="project-thumbnail" id="page">
          <div className="wrapper">
            <div className="my-picture ratio-special">
              <div className="picture ratio-special margin-offset-special"/>
            </div>
            <div className="self-intro">
              <h1>ABOUT</h1>
              <p>Hi, I am Mingqin Chen!</p>
              <p>I graduated from Queens College, CUNY with B.F.A. in Graphic Design.
                I am passionate about advertising design, minimalism design, and branding design.  </p>
              <p>Feel free to contact me for any collaborations or freelance projects!</p>
              <div className="contact-breakline"/>
              <p style={{fontWeight:"bold"}}>Contact and More Info</p>
              <p><a href={email} target="_blank" rel="noreferrer">mingqchen95@gmail.com</a> / 347-933-1109</p>
              <p>
                <a href={resume} target="_blank" rel="noreferrer" className="hyperlink-underline">RESUME</a>
                &nbsp;<span style={{color:"#999999"}}>I</span>&nbsp;
                <a href={ins} target="_blank" rel="noreferrer" className="hyperlink-underline">INSTAGRAM</a>
              </p>
            </div>
          </div>
        </div>
        <br/><br/><br/><br/>
      </div>
    </>
  );
}