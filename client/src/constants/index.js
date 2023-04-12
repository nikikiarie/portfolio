import {
  AiFillAlipayCircle,
  AiFillBuild,
  AiOutlineTwitter,
  AiOutlineMail,
  AiFillApi,
  AiOutlineGithub,
} from "react-icons/ai";
import soft from "../assets/software.svg";
import web from "../assets/web.svg";
import design from "../assets/design.svg";


export const navItems = [
  {
    item: "About Me",
    id: 1,
    to:'aboutme'
  },
  {
    item: "Services",
    id: 2,
    to:'services'
  },
  {
    item: "Contact",
    id: 3,
    to:'contact'
  },
];

export const detailsList = [
  {
    name: "Full Name",
    text: "Kiarie Ng'ang'a",
    icon: <AiOutlineTwitter />,
    id:1
  },
  {
    name: "Github",
    text: "nikikiaire",
    icon: <AiOutlineGithub />,
    id:2
  },
  {
    name: "Email",
    text: "nix.kiarie@gmail.com",
    icon: <AiOutlineMail />,
    id:3
  },
  {
    name: "Twitter",
    text: "@nix.kiarie",
    icon: <AiOutlineTwitter />,
    id:4
  },
];

export const SkillsList = [
  {
    text: "Web Applications",
    icon: soft,
    id:1
  },
  {
    text: "Web Development",
    icon: web,
    id:2
  },
  {
    text: "Web Design",
    icon: design,
    id:3
  },
];
