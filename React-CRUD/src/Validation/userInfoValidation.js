export const userValidation = (values) => {
    let errors = {}
    let exp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/ig;
    const {name, email, password} = values
    if(name.trim() === "") {
        errors.nameError = "Name Is Required"
    }else if(name.length < 4) {
        errors.nameError = "Name must be at least 4 Character"
    }
    
    if(email.trim() === "") {
        errors.emailError = "email Is Required"
    }else if(!exp.test(email)) {
        errors.emailError = "unVailed Email"
    }

    if(password.trim() === "") {
        errors.passwordError = "password Is Required"
    }else if(password.length < 4) {
        errors.passwordError = "password must be at least 4 Character"
    }


    return errors;
}