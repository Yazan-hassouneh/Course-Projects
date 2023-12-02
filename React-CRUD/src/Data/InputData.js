export const InputData = (errors, info) => {
    const {nameError, emailError, PasswordError} = errors
    const {name, email, Password} = info
    return [
        {name: "name", type: "text", id: "name", title: "User Name", value: name, error: nameError},
        {name: "email", type: "email", id: "email", title: "User email", value: email, email: emailError},
        {name: "password", type: "password", id: "napasswordme", title: "User password", value: Password, error: PasswordError}
    ]
}