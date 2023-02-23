
const displayPosts = (props) => {
    return ( 
        <table className="table">
            <tbody>
                {props.parentEntries.map((entry, index)=>{
                return (
                    <tr key={index}>
                        <td></td>
                        <td>{entry.name}</td>
                        <td>{entry.post}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
     );
}
 
export default displayPosts;