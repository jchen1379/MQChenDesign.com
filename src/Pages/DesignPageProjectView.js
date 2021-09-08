import {ProjectDisplayContainer} from "../Components/ProjectDisplay/ProjectDisplayContainer";
import {ProjectDisplayInfoRight, ProjectDisplayTitle} from "../Components/Text";
import {FullSizeProjectImage, PosterStyleProjectImage} from "../Components/Image";
import React from "react";

export const HelveticaFilmPoster = () => {
  return (
    <ProjectDisplayContainer id="helvetica_film_poster">
      <ProjectDisplayInfoRight projectTitle="HELVETICA FILM POSTER"
                               projectDescription={`This is a poster that designed for the "Helvetica" film.`}/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/helvetica_film_poster/helvetica.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const GabrielsNovels = () => {
  return (
    <ProjectDisplayContainer id="gabriel's_novels">
      <ProjectDisplayInfoRight projectTitle="GABRIEL'S NOVELS"
                               projectDescription="A series of covers for books by Gabriel Garcia Marquez
                               is created by using one motif, the circle, and three colors."/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/gabriel's_novels/6x9+2.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/gabriel's_novels/1.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/gabriel's_novels/2.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/gabriel's_novels/3.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const ChineseTeaPosters = () => {
  return (
    <ProjectDisplayContainer id="chinese_tea_posters">
      <ProjectDisplayInfoRight projectTitle="CHINESE TEA POSTERS"
                               projectDescription="This is a series of Chinese tea posters.
                               You can feel the aroma of the teas through typography."/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/chinese_tea_posters/7_37.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/chinese_tea_posters/1_3.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/chinese_tea_posters/8_5.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/chinese_tea_posters/3_9.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/chinese_tea_posters/4_10.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/chinese_tea_posters/5_47.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const StrollSeafoodRestaurant = () => {
  return (
    <ProjectDisplayContainer id="stroll_seafood_restaurant">
      <ProjectDisplayInfoRight projectTitle="STROLL SEAFOOD RESTURANT"
                               projectDescription="Stroll Seafood Restaurant provides a relaxing environment
                               for people to enjoy food and make friends. Most of the food is seafood.
                               Our special dishes is shrimp."/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/stroll_seafood_resturant/stroll+seafood+resturant.png").default}/>
        <FullSizeProjectImage src={require("../Projects/stroll_seafood_resturant/Business+Card.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/stroll_seafood_resturant/letterhead.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/stroll_seafood_resturant/circle+coaster+1.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/stroll_seafood_resturant/circle+coaster+2.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/stroll_seafood_resturant/Square_Coaster+1.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/stroll_seafood_resturant/Square_Coaster_2.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/stroll_seafood_resturant/Coffee+Cup.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const FahrenheitChocolate = () => {
  return (
    <ProjectDisplayContainer id="fahrenheit_chocolate">
      <ProjectDisplayInfoRight projectTitle="FAHRENHEIT CHOCOLATE"
                               projectDescription={`This is a series of four chocolate bars unified by the theme
                                of changing temperature. It is called "Fahrenheit". Each flavor is designed based 
                                on the average temperature in each season. The big number on the top is not only 
                                representing the temperature, but it is also showing the percentage of each flavor. 
                                The different clothes on the bottom can give you the feeling of each season.`}/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/fahrenheit_chocolocate/chocolate+thumbnail.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/fahrenheit_chocolocate/chocolate+1.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/fahrenheit_chocolocate/Chocolate+2.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/fahrenheit_chocolocate/chocolate+box+mackup.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const RiskCircusBranding = () => {
  return (
    <ProjectDisplayContainer id="risk_circus_branding">
      <ProjectDisplayInfoRight projectTitle="RISK CIRCUS BRANDING"/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/risk_circus_branding/risk+circus.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/risk_circus_branding/Circus+Poster.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/risk_circus_branding/Circus_series.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/risk_circus_branding/Circus_series.png").default}/>
        <FullSizeProjectImage src={require("../Projects/risk_circus_branding/Circus_series+4.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/risk_circus_branding/Circus_series2.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const DokoFont = () => {
  return (
    <ProjectDisplayContainer id="doko_font">
      <ProjectDisplayInfoRight projectTitle="DOKO FONT | SPECIMEN PUBLICATION"
                               projectDescription="This is a specimen publication. It was designed by using
                               the theme of doko font. Doko font is a type family for magazines inspired
                               by cartoons, illustration, and hand-lettering. ">

      </ProjectDisplayInfoRight>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/doko_font_specimen_publication/1.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/doko_font_specimen_publication/2.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/doko_font_specimen_publication/3.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/doko_font_specimen_publication/4.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/doko_font_specimen_publication/5.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const MagicDrinksBranding = () => {
  return (
    <ProjectDisplayContainer id="magic_drinks_branding">
      <ProjectDisplayInfoRight projectTitle="MAGIC DRINKS BRANDING"
                               projectDescription="This pack of magic drinks contain six themes.
                               Each favor of the magic drinks will give you different magical powers.
                               The themes include poison, love charm, immortality, mind reading,
                               levitation, and magical body transformation."/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/magic_drinks_branding/magic+drink.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/magic_drinks_branding/1-front.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/magic_drinks_branding/2-side.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/magic_drinks_branding/3-bottle.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/magic_drinks_branding/label+1+2.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/magic_drinks_branding/label+3+4.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/magic_drinks_branding/label+5+6.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const FiftyFacialExpression = () => {
  return (
    <ProjectDisplayContainer id="50_facial_expression">
      <ProjectDisplayTitle>FACIAL EXPRESSION</ProjectDisplayTitle>
      <div style={{display:"flex", justifyContent:"center", marginTop:"36px"}}>
        <img style={{width:"88%"}} src={require("../Projects/50_facial_expression/facial-expression.jpg").default} alt=""/>
      </div>
    </ProjectDisplayContainer>
  )
}

export const InvitationCards = () => {
  return (
    <ProjectDisplayContainer id="invitation_cards">
      <ProjectDisplayInfoRight projectTitle="INVITATION CARDS"
                               projectDescription="These invitation cards are designed base on the contents of each specific event."/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/invitation_cards/invitation+card+2.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/invitation_cards/horizontal+invitation+card.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/invitation_cards/Invitation+card+1.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const CoffeeShopJourney = () => {
  return (
    <ProjectDisplayContainer id="coffee_shop_journey">
      <ProjectDisplayInfoRight projectTitle="COFFEE SHOP JOURNEY"
                               projectDescription="This User Experience (UX) Design is about the experience
                               of a customer in a coffee shop. It encompasses the entire user journey.
                               The second photo is a poster for the promotion of the coffee beans.
                               You can feel the aroma of the coffee bean through the placement."/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/coffee_shop_journey/Coffee+Journey.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/coffee_shop_journey/A.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const LogosDesign = () => {
  return (
    <ProjectDisplayContainer id="logos_design">
      <ProjectDisplayInfoRight projectTitle="LOGOS DESIGN"
                               projectDescription="Logos design include Tear of Crocodile wine,
                               MOMI branding redesign, and Aluminum Window And Door company."/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/logos_design/Shopping+Bag+PSD+MockUp+2.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/logos_design/tear+wine+branding.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/logos_design/momi+branding.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/logos_design/letterhead+mock+up.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/logos_design/business+card.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/logos_design/Hanging+Wall+Sign+MockUp+4.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/logos_design/Leterpress.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}