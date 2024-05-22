import ChatIcon from "@/components/icons/ChatIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import ProgressIcon from "@/components/icons/ProgressIcon";
import ProjectIcon from "@/components/icons/ProjectIcon";
import { ImBlog } from "react-icons/im";

export const routes = [
  {
    icon: <HomeIcon />,
    name: "Home",
    link: "/",
  },
  {
    icon: <ProjectIcon />,
    name: "Projects",
    link: "/projects",
  },
  {
    icon: <ProgressIcon />,
    name: "About",
    link: "/about",
  },
  {
    icon: <ImBlog />,
    name: "Blogs",
    link: "/blogs",
  },
  {
    icon: <ChatIcon />,
    name: "Contact",
    link: "/contact",
  },
];
