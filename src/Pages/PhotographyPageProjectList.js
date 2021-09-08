import {Aquarium, Contrast, DoubleExposure, Human, Landscape, Wedding} from "./PhotographyPageProjectView";

export const photographyPageProjectList = [
  {
    projectId: "human",
    projectTitle: "HUMAN",
    projectCoverUrl: require("../Projects/photography_human/photography_human_thumbnail.jpg").default,
    component: Human
  },
  {
    projectId: "double_exposure",
    projectTitle: "DOUBLE EXPOSURE",
    projectCoverUrl: require("../Projects/photography_double_exposure/photography_double_exposure_thumbnail.jpg").default,
    component: DoubleExposure
  },
  {
    projectId: "landscape",
    projectTitle: "LANDSCAPE",
    projectCoverUrl: require("../Projects/photography_landscape/photography_landscape_thumbnail.jpg").default,
    component: Landscape
  },
  {
    projectId: "contrast",
    projectTitle: "CONTRAST",
    projectCoverUrl: require("../Projects/photography_contrast/photography_contrast_thumbnail.jpg").default,
    component: Contrast
  },
  {
    projectId: "wedding",
    projectTitle: "WEDDING",
    projectCoverUrl: require("../Projects/photography_wedding/photography_wedding_thumbnail.jpg").default,
    component: Wedding
  },
  {
    projectId: "aquarium",
    projectTitle: "AQUARIUM",
    projectCoverUrl: require("../Projects/photography_aquarium/photography_aquarium_thumbnail.jpg").default,
    component: Aquarium
  }
]