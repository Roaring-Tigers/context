import { useContext } from "react";
import CricketContext from "../context/CricketContext";


const Hello = () => {
        const t  = useContext(CricketContext)

        console.log(t)

    return(
        <div>
             <h1> Lets access ....</h1>
             {/* <p> Name: {cricketer.name}</p>
             <p> Age: {cricketer.age}</p>
             <p> Country: {cricketer.country}</p>

             <button onClick={()=>changeAge(50)}> Update Age</button> */}
             
        </div>
    )
}

export default Hello;