import { Component } from 'react'

export class Form extends Component {
    initialState = {
        fullName: '',
        job: ''
    }

    state = this.initialState

    handleInputChange = (event) => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)

        event.preventDefault()
    }

    render () {
        return (
            <form action="submit">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={this.state.fullName}
                    onChange={this.handleInputChange}
                />
                <label htmlFor="name">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={this.state.job}
                    onChange={this.handleInputChange}
                />
                <button type='submit' onClick={this.handleSubmit}>Add</button>
            </form>
        )
    }
}
