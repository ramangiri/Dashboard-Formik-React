import React, { useState } from "react";

let userContext = React.createContext();

export default userContext;

// This will provide data to all its Children
export const UserProvider = ({children}) => {
    let [userData,setUserData] = useState([
        {
            firstName:'Tiger Nixon',
            position:'System Architect',
            Office:'Edinburgh',
            Age:'61',
            Date:'2011-04-25',
            Salary:320800
        },
        {
            firstName:'Garrett Winters',
            position:'Accountant',
            Office:'Tokyo',
            Age:'63',
            Date:'2011-07-25',
            Salary:170750
        },

    ]);
    let [productData,setProductData] = useState([
        {
            Name:"Desktop",
            Category:"IT",
            Price:200
        },
        {
            Name:"Laptop",
            Category:"IT",
            Price:3000
        }
    ]);
    return <userContext.Provider value={{userData,setUserData,productData,setProductData}}>
        {children}
    </userContext.Provider>
}