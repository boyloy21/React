
function ProfilePicture(){
    const imageUrl = './src/assets/IRON.png';
    // const imageUrl2 = './src/assets/Spiderman.jpeg';
    
    const handleClick = (e) => e.target.style.display = "none";

    return (<img className="imgclick" onClick={(e) => handleClick(e)} src={imageUrl}></img>)
}

export default ProfilePicture