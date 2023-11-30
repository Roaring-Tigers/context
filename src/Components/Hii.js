import CricketContext from "../context/CricketContext";


const Hii = () => {


    return(
        <div>
             <h1> Hii Component</h1>
             {
                <CricketContext.Consumer> 
                    {
                        (info)=>{
                            console.log(info)
                            return(
                                <div>
                                    <h1> Lets access ....</h1>
                                     <p>{info} </p>
                                </div>
                            )
                        }
                          
                        

                        
                    }
                </CricketContext.Consumer>
             }
        </div>
    )
}

export default Hii;