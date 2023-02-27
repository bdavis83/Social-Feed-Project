import React, { useState } from 'react';


const DisLikeButton = (props) => {

    const [dislikeButtonClass, setdislikeButtonClass] = useState("inactive");

    function handleClick (){
        if (dislikeButtonClass==="inactive"){
            setdislikeButtonClass('active');
        }
        else {
            setdislikeButtonClass('inactive')
        }

    }
    return ( 
        <div>
            <button className={dislikeButtonClass} onClick={()=>handleClick()} style={{position: 'absolute', right: '210px', }}>{props.message}</button>
        </div>
     );
}
 
export default DisLikeButton;
