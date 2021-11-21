import logo from "./birdie-logo.svg";

const routes = [
  {
    id: "home",
    text: "",
    path: "/",
    content: <img src={logo} alt="bird next to golf ball" />,
  },
  {
    id: "newReleases",
    text: "New Releases",
    path: "/new-releases",
    content: "",
  },
  {
    id: "clubs",
    text: "Clubs",
    path: "/clubs",
    content: "",
  },
  {
    id: "balls",
    text: "Balls",
    path: "/balls",
    content: "",
  },
  // {
  //   id: "accessories",
  //   text: "Accessories",
  //   path: "/accessories",
  //   content: "",
  // },
];

export default routes;
