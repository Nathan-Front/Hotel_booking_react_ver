export function subscribe(mail){
    const storage = JSON.parse(localStorage.getItem("subscribers")) || [];
    if(!storage) return;
    const existEmail = storage.find(item => item && item.email === mail.email);
    if(existEmail) {
        return {success: false, errorType: "Already_Exist"}
    }
    storage.push(mail);
    localStorage.setItem("subscribers", JSON.stringify(storage));
    return {success: true}
}

export function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email)
}