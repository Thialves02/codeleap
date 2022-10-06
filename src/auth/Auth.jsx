//Check if exist a username on localStorage
const userLogged = () => {
    const token = localStorage.getItem('username');
    return token != null ? true : false
}

export default userLogged