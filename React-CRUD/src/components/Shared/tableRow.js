import React from 'react'

function Tr({name, value}) {
    return (
        <tr>
            <th>{name}</th>
            <td>{value}</td>
    </tr>
    )
}

export default Tr