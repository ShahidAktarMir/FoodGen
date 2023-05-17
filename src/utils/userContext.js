import { createContext } from "react";
const userContext = createContext({
  user: {
    name: "Dummy Named",
    email: "dummy@email.com",
  },
});
export default userContext;
