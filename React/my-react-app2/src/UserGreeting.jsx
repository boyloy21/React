import PropTypes from 'prop-types'

function UserGreeting(props){
    const welcomeMessage = <h2 className="welcom-message">Welcome {props.username}</h2>
    const loginPromt = <h2 className="login-prompt">Please log in to continue</h2>
    return(props.isLoggedIn ? welcomeMessage : loginPromt);
}
UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting