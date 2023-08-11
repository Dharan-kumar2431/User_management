import { createContext } from "react";

export const userContext = createContext("hiii");
console.log(userContext);

export const UserProvider = userContext.Provider;
console.log(UserProvider)
export const UserConsumer = userContext.Consumer;



