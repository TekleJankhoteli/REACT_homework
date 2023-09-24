import './index.css';

function UserText({name,age}){
    return(
        <main>
            <h2 ><span className="styleName">Name:</span>{name}</h2>
            <h3><span className="styleName">Age:</span>{age}</h3>
        </main>
    )
}
export default UserText