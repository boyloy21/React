import profilePic from './assets/IRON.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">IRON MAN</h2>
            <p className='card-text'>I'm Web-developer and Engeneering of Robotics.</p>
        </div>
    );
}

export default Card