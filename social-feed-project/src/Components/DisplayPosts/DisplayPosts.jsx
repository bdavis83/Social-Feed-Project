import Posts from "../Posts/Posts";
import LikeButton from "../LikeButtons/LikeButtons";
import DisLikeButton from "../DisLikeButton/DisLikeButton";
import "./DisplayPosts.css";

const DisplayPosts = (props) => {
    return(
        <ul>
           {props.parentEntries.map( entry => <Posts entry = {entry}/>)}
           
            <LikeButton message='👍'/>
            <DisLikeButton message='👎'/>
           
        </ul>
    )
  ;
};

export default DisplayPosts;






