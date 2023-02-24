import './DisplayPosts.css';

const displayPosts = (props) => {
    return ( 
        <table className="table">
            <tbody>
                {props.parentEntries.map((entry)=>{
                return (
                    <tr>
                        <tr>
                            <td>{entry.name}</td>
                        </tr>
                        <tr>
                        <td>{entry.post}</td>
                        </tr>
                        <tr>
                        <button type='button' className='btn btn-secondary btn-sm' data-toggle="button" aria-pressed="false" autocomplete="off">👍</button>
                        <button type="button" className="btn btn-secondary btn-sm" disabled>👎</button>
                        </tr>
                    </tr>
                    
                );
            })}
            </tbody>
        </table>
     );
}
 
export default displayPosts;