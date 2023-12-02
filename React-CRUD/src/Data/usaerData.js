export const Data = (info) => {
    const {_id, name, status, email, createdAt, password, role, updatedAt} = info
    return [{name: "id", value: _id},
            {name: "name", value: name},
            {name: "stats", value: status},
            {name: "email", value: email},
            {name: "Created At", value: createdAt},
            {name: "Passowrd", value: password},
            {name: "Role", value: role},
            {name: "Updated At", value: updatedAt},
            ]
}