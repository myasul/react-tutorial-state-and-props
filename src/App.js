

import { Component } from 'react'
import { Form } from './Form'
import { FormTwo } from './FormTwo'
import { Table } from './Table'

// TODO: Create state
// TODO: Add method for removing a person
// TODO: Add method for adding a person
// TODO: Create render method encapsulating all child components

/** TODO: Create Table component */
/** TODO: Create Form component */
// TODO: Create parent class component named App
export class App extends Component {
    state = {
        persons: [
            {
                fullName: 'Marian Rivera',
                job: 'Driver'
            },
            {
                fullName: 'Elon Musk',
                job: 'Bouncer'
            },
            {
                fullName: 'Bill Gates',
                job: 'Magician'
            },
            {
                fullName: 'Steve Jobs',
                job: 'Bartender'
            }
        ]
    }

    removePerson = (personIndex) => {
        const updatedPersons = this.state.persons.filter((person, index) => { return index !== personIndex })

        this.setState({ persons: updatedPersons })
    }

    addPerson = (person) => {
        const updatedPersons = [...this.state.persons, person]

        this.setState({persons: updatedPersons})
    }

    render () {
        return (
            <div className='container'>
                <h2>List of People</h2>
                <Table persons={this.state.persons} handleRemove={this.removePerson} />
                <h2>Add Person</h2>
                <FormTwo handleSubmit={this.addPerson}/>
            </div>
        )
    }
}
