import React, { useState } from 'react';
import './CreatePostForm.css';

const CreatePostForm = (props) => {
    
    const [name, setName] = useState (''); //setName is function that is called to update the name variable
    const [post, setPost] = useState ('')

    function handleSubmit (event){
        event.preventDefault(); // stops entire page from refreshing adter submitting
        let newEntry ={
            name: name,
            post: post
        };
        console.log(newEntry)
        props.CreatePostFormProperty(newEntry)
    }
    
    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' value={name} onChange={(event)=>setName(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Post</label>
                <input type='text' className='form-control' value={post} onChange={(event)=>setPost(event.target.value)}/>
            </div>
            <button type ='submit' className='btn btn-primary'>Post</button>
         </form>
     );
}
 
export default CreatePostForm;