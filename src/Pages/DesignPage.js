import React from 'react';
import {ProjectThumbnails} from "../Components/Layout/ProjectThumbnails";
import {ProjectThumbnail} from "../Components/Layout/ProjectThumbnail";
import {ProjectDisplayContainer} from "../Components/ProjectDisplay/ProjectDisplayContainer";
import {
  ProjectDisplayInfoRight,
  ProjectDisplayTitle
} from "../Components/Text";
import {
  FullSizeProjectImage,
  PosterStyleProjectImage
} from "../Components/Image";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ScrollToTop from "../Utils/ScrollToTop";
import {ProjectNavBar} from "../Components/ProjectDisplay/ProjectNavBar";
import {useLocation} from "react-router";

const urlBase = '/graphic-design';

const projectList = [
  "helvetica_film_poster",
  "gabriel's_novels",
  "chinese_tea_posters",
  "stroll_seafood_restaurant",
  "fahrenheit_chocolate",
  "risk_circus_branding",
  "doko_font",
  "magic_drinks_branding",
  "50_facial_expression",
  "invitation_cards",
  "coffee_shop_journey",
  "logos_design"
];

export function getPrevProject(currentProject, projectList) {
  const index = projectList.indexOf(currentProject);
  if (index === 0)
    return null;
  return projectList[index - 1];
}

export function getNextProject(currentProject, projectList) {
  const index = projectList.indexOf(currentProject);
  if (index === projectList.length - 1)
    return null;
  return projectList[index + 1];
}

export function getCurrentProject(path) {
  const tokens = path.split("/");
  return tokens[tokens.length - 1];
}

export function DesignPage() {
  const location = useLocation();
  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path={urlBase}/>
            <Route exact path={`${urlBase}/helvetica_film_poster`} component={HelveticaFilmPoster}/>
            <Route exact path={`${urlBase}/gabriel's_novels`} component={GabrielsNovels}/>
            <Route exact path={`${urlBase}/chinese_tea_posters`} component={ChineseTeaPosters}/>
            <Route exact path={`${urlBase}/stroll_seafood_restaurant`} component={StrollSeafoodRestaurant}/>
            <Route exact path={`${urlBase}/fahrenheit_chocolate`} component={FahrenheitChocolate}/>
            <Route exact path={`${urlBase}/risk_circus_branding`} component={RiskCircusBranding}/>
            <Route exact path={`${urlBase}/doko_font`} component={DokoFont}/>
            <Route exact path={`${urlBase}/magic_drinks_branding`} component={MagicDrinksBranding}/>
            <Route exact path={`${urlBase}/50_facial_expression`} component={FiftyFacialExpression}/>
            <Route exact path={`${urlBase}/invitation_cards`} component={InvitationCards}/>
            <Route exact path={`${urlBase}/coffee_shop_journey`} component={CoffeeShopJourney}/>
            <Route exact path={`${urlBase}/logos_design`} component={LogosDesign}/>
          </Switch>
        </ScrollToTop>
      </Router>

      {location.pathname.includes('graphic-design/') && (
        <ProjectNavBar backTo="GRAPHIC DESIGN"
                       backToPath="/graphic-design"
                       prev={getPrevProject(getCurrentProject(location.pathname), projectList)}
                       next={getNextProject(getCurrentProject(location.pathname), projectList)}/>
      )}

      <ProjectThumbnails>
        <ProjectThumbnail
          apiBase={urlBase}
          projectName="helvetica_film_poster"
          projectTitle="HELVETICA FILM POSTER"
          projectCoverUrl={require("../Projects/helvetica_film_poster/helvetica.jpg").default}
        />
        <ProjectThumbnail
          apiBase={urlBase}
          projectName="gabriel's_novels"
          projectTitle="GABRIEL'S NOVELS"
          projectCoverUrl={require("../Projects/gabriel's_novels/gabriel's_novels_cover+1.jpg").default}
        />
        <ProjectThumbnail
          apiBase={urlBase}
          projectName="chinese_tea_posters"
          projectTitle="CHINESE TEA POSTERS"
          projectCoverUrl={require("../Projects/chinese_tea_posters/tea_poster_cover.gif").default}
        />
        <ProjectThumbnail
          apiBase={urlBase}
          projectName="stroll_seafood_restaurant"
          projectTitle="STROLL SEAFOOD RESTAURANT"
          projectCoverUrl={require("../Projects/stroll_seafood_resturant/stroll_seafood_cover.gif").default}
        />
        <ProjectThumbnail
          apiBase={urlBase}
          projectName="fahrenheit_chocolate"
          projectTitle="FAHRENHEIT CHOCOLATE"
          projectCoverUrl={require("../Projects/fahrenheit_chocolocate/fahrenheit_chocolate_thumbnail.jpg").default}
        />
        <ProjectThumbnail
          apiBase={urlBase}
          projectName="risk_circus_branding"
          projectTitle="RISK CIRCUS BRANDING"
          projectCoverUrl={require("../Projects/risk_circus_branding/risk_circus_cover.jpg").default}
        />
        <ProjectThumbnail
          apiBase={urlBase}
          projectName="doko_font"
          projectTitle="DOKO FRONT | SPECIMEN PUBLICATION"
          projectCoverUrl={require("../Projects/doko_font_specimen_publication/doko_front_thumbnail.jpg").default}
        />
        <ProjectThumbnail
          apiBase={urlBase}
          projectName="magic_drinks_branding"
          projectTitle="MAGIC DRINKS BRANDING"
          projectCoverUrl={require("../Projects/magic_drinks_branding/magic_drinks_thumbnail.jpg").default}
        />
        <ProjectThumbnail
          apiBase={urlBase}
          projectName="50_facial_expression"
          projectTitle="50 FACIAL EXPRESSION"
          projectCoverUrl={require("../Projects/50_facial_expression/facial_expression_thumbnail.gif").default}
        />
        <ProjectThumbnail
          apiBase={urlBase}
          projectName="invitation_cards"
          projectTitle="INVITATION CARDS"
          projectCoverUrl={require("../Projects/invitation_cards/invitation_card_thumbnail.gif").default}
        />
        <ProjectThumbnail
          apiBase={urlBase}
          projectName="coffee_shop_journey"
          projectTitle="COFFEE SHOP JOURNEY"
          projectCoverUrl={require("../Projects/coffee_shop_journey/coffee_journey_thumbnail.jpg").default}
        />
        <ProjectThumbnail
          apiBase={urlBase}
          projectName="logos_design"
          projectTitle="LOGOS DESIGN"
          projectCoverUrl={require("../Projects/logos_design/logos_design_thumbnail.jpg").default}
        />
      </ProjectThumbnails>
    </>
  );
}

const HelveticaFilmPoster = () => {
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

const GabrielsNovels = () => {
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

const ChineseTeaPosters = () => {
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

const StrollSeafoodRestaurant = () => {
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

const FahrenheitChocolate = () => {
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

const RiskCircusBranding = () => {
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

const DokoFont = () => {
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

const MagicDrinksBranding = () => {
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

const FiftyFacialExpression = () => {
  return (
    <ProjectDisplayContainer id="50_facial_expression">
      <ProjectDisplayTitle>FACIAL EXPRESSION</ProjectDisplayTitle>
      <div style={{display:"flex", justifyContent:"center", marginTop:"36px"}}>
        <img style={{width:"88%"}} src={require("../Projects/50_facial_expression/facial-expression.jpg").default} alt=""/>
      </div>
    </ProjectDisplayContainer>
  )
}

const InvitationCards = () => {
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

const CoffeeShopJourney = () => {
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

const LogosDesign = () => {
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