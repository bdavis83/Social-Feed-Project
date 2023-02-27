import React, { useState } from 'react';

const Posts = (props) => {
    return (        <li>
        <div>
            <h3>
                {props.entry.name}
            </h3>
            <p>
                {props.entry.post}
            </p>
        </div>
    </li> );
}
 
export default Posts;