import { createContext } from "react";

const UserContext = createContext({
    appUser: null,
    setAppUser: () => {}
});

export default UserContext;
