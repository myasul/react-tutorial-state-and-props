import React, { Component } from 'react'

const TableHeader = () => (
    <thead>
        <tr>
            <th>Full Name</th>
            <th>Job</th>
            <th>Remove</th>
        </tr>
    </thead>
)

const TableBody = (props) => {
    const { personData, removePerson } = props
    const rows = personData.map((person, index) => (
        <tr key={index}>
            <td>{person.fullName}</td>
            <td>{person.job}</td>
            <td>
                <button onClick={() => removePerson(index)}>Delete</button>
            </td>
        </tr>
    ))

    return (
        <tbody>{rows}</tbody>
    )
}

export class Table extends Component {
    render () {
        const { personData, removePerson } = this.props

        // TODO: Create TableHeader and TableBody component
        return (
            <div>
                <h2>List of Persons</h2>
                < table >
                    <TableHeader />
                    <TableBody personData={personData} removePerson={removePerson} />
                </table >
            </div>
        )
    }
}
