import enrouteIcon from "../assets/images/enroute-icon.jpeg";
import defaultAvatarIcon from "../assets/images/default-avatar.webp";

export interface IExperience {
  company: string;
  dateRange: string;
  position: string;
  icon: string;
}

const experiences: IExperience[] = [
  {
    company: "Enroute",
    dateRange: "2022 - 2025",
    position: "Full-Stack developer",
    icon: enrouteIcon,
  },
  {
    company: "Software Developer",
    dateRange: "2025 - 20??",
    position: "Trying my best",
    icon: defaultAvatarIcon,
  },
];

export default experiences;
