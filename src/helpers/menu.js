import constants from "./constants";
const { SIGN_IN, SIGN_UP } = constants;
const principalMenu = [
  {
    label: "Inicio",
    path: "/home",
  },
  {
    label: SIGN_IN,
    path: "/login",
  },
  {
    label: SIGN_UP,
    path: "/signup",
  },
];

export { principalMenu };
