function TableHead () {
    return (
        <thead>
            <tr>
                <th>Full Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

function TableBody (props) {
    const { persons, handleRemove } = props

    const rows = persons.map((person, index) => {
        return (
            <tr key={index}>
                <td>{person.fullName}</td>
                <td>{person.job}</td>
                <td>
                    <button onClick={() => handleRemove(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    return (
        <tbody>{rows}</tbody>
    )
}

export function Table (props) {
    const { persons, handleRemove } = props

    return (
        <table>
            <TableHead />
            <TableBody persons={persons} handleRemove={handleRemove} />
        </table>
    )
}
