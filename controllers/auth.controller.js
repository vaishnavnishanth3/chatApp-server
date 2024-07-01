async function login() {
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;
    } catch(error) {
         
    }

}

async function logout() {
    console.log("logoutUser");
}

async function signup() {
    console.log("signupUser");
}

export { login, logout, signup };
