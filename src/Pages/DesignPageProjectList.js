import {
  ChineseTeaPosters, CoffeeShopJourney, DokoFont, FahrenheitChocolate, FiftyFacialExpression,
  GabrielsNovels,
  HelveticaFilmPoster, InvitationCards, LogosDesign, MagicDrinksBranding, RiskCircusBranding,
  StrollSeafoodRestaurant
} from "./DesignPageProjectView";

export const designPageProjectList = [
  {
    projectId: "helvetica_film_poster",
    projectTitle: "HELVETICA FILM POSTER",
    projectCoverUrl: require("../Projects/helvetica_film_poster/helvetica.jpg").default,
    component: HelveticaFilmPoster
  },
  {
    projectId: "gabriel's_novels",
    projectTitle: "GABRIEL'S NOVELS",
    projectCoverUrl: require("../Projects/gabriel's_novels/gabriel's_novels_cover+1.jpg").default,
    component: GabrielsNovels
  },
  {
    projectId: "chinese_tea_posters",
    projectTitle: "CHINESE TEA POSTERS",
    projectCoverUrl: require("../Projects/chinese_tea_posters/tea_poster_cover.gif").default,
    component: ChineseTeaPosters
  },
  {
    projectId: "stroll_seafood_restaurant",
    projectTitle: "STROLL SEAFOOD RESTAURANT",
    projectCoverUrl: require("../Projects/stroll_seafood_resturant/stroll_seafood_cover.gif").default,
    component: StrollSeafoodRestaurant
  },
  {
    projectId: "fahrenheit_chocolate",
    projectTitle: "FAHRENHEIT CHOCOLATE",
    projectCoverUrl: require("../Projects/fahrenheit_chocolocate/fahrenheit_chocolate_thumbnail.jpg").default,
    component: FahrenheitChocolate
  },
  {
    projectId: "risk_circus_branding",
    projectTitle: "RISK CIRCUS BRANDING",
    projectCoverUrl: require("../Projects/risk_circus_branding/risk_circus_cover.jpg").default,
    component: RiskCircusBranding
  },
  {
    projectId: "doko_font",
    projectTitle: "DOKO FRONT | SPECIMEN PUBLICATION",
    projectCoverUrl: require("../Projects/doko_font_specimen_publication/doko_front_thumbnail.jpg").default,
    component: DokoFont
  },
  {
    projectId: "magic_drinks_branding",
    projectTitle: "MAGIC DRINKS BRANDING",
    projectCoverUrl: require("../Projects/magic_drinks_branding/magic_drinks_thumbnail.jpg").default,
    component: MagicDrinksBranding
  },{
    projectId: "50_facial_expression",
    projectTitle: "50 FACIAL EXPRESSION",
    projectCoverUrl: require("../Projects/50_facial_expression/facial_expression_thumbnail.gif").default,
    component: FiftyFacialExpression
  },
  {
    projectId: "invitation_cards",
    projectTitle: "INVITATION CARDS",
    projectCoverUrl: require("../Projects/invitation_cards/invitation_card_thumbnail.gif").default,
    component: InvitationCards
  },
  {
    projectId: "coffee_shop_journey",
    projectTitle: "COFFEE SHOP JOURNEY",
    projectCoverUrl: require("../Projects/coffee_shop_journey/coffee_journey_thumbnail.jpg").default,
    component: CoffeeShopJourney
  },
  {
    projectId: "logos_design",
    projectTitle: "LOGOS DESIGN",
    projectCoverUrl: require("../Projects/logos_design/logos_design_thumbnail.jpg").default,
    component: LogosDesign
  }
]