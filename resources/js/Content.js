// import images
import Hero_person from "./assets/images/Akib.jpg";

// import icons from react-icons
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "/",
      icon: TbSmartHome,
    },
    {
      link: "/skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Md Akib",
    LastName: "Rahman",
    btnText: "Hire Me",
    image: Hero_person,
    typed_title:[
      "Web Designer",
      "Web Developer",
      "MERN stack Developer",
      "Laravel-VUE Developer",
      "Laravel-React Developer",
    ],
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
};
