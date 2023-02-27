import React, { useState } from 'react';


const LikeButton = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick (){
        if (buttonClass==="inactive"){
            setButtonClass('active');
        }
        else {
            setButtonClass('inactive')
        }

    }
    return ( 
        <div>
            <button className={buttonClass} onClick={handleClick} style={{position: 'absolute', right: '250px'}}>{props.message}</button>
        </div>
     );
}
 
export default LikeButton;
