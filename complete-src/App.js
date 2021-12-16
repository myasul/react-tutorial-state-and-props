import React from 'react'
// TODO: Point out the advantages of not using default exports
import { FunctionForm } from './FunctionForm'
import { Table } from './Table'

class App extends React.Component {
    // TODO: Create a state
    state = {
        persons: [
            {
                fullName: 'Jeff Bezos',
                job: 'Janitor'
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

    // TODO: Add method for removing a person
    removePerson = (indexToBeRemoved) => {
        const { persons } = this.state

        this.setState({ persons: persons.filter((person, index) => index !== indexToBeRemoved) })
    }

    addPerson = (person) => {
        this.setState({ persons: [...this.state.persons, person] })
    }

    render () {
        return (
            <div className="container">
                {/** TODO: Create Table component */}
                <Table personData={this.state.persons} removePerson={this.removePerson} />
                <FunctionForm handleSubmit={this.addPerson} />
            </div>
        )
    }
} 

export default App