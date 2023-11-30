import { useState } from "react";
import CricketContext from "./CricketContext";


const CricketProvider = (props) => {
    const [cricketer, setCricketer] = useState({
        name: "Sachin",
        age: 45,
        country: "India"
    });
    let a = undefined

    return(
        <CricketContext.Provider value={a}>
            {props.children}
        </CricketContext.Provider>
    )

}

export default CricketProvider;