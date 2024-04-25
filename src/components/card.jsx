import React from "react";

function Card(data){

    return(
         <div className="term"> 
            <dt>
                <span className="emoji" role="img">
                    {data.emoji}
                </span>
                <span>
                    {data.name}
                </span>
            </dt>
            <dd>
                {data.description}
            </dd>
          </div>
            
    );
}



export default Card;