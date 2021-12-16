import React, { Component } from 'react'

export class Form extends Component {
    initialState = {
        fullName: '',
        job: ''
    }

    state = this.initialState

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
        event.preventDefault()
    }

    render () {
        const { fullName, job } = this.state

        return (
            <form action="submit" onSubmit={this.handleSubmit}>
                <h3>Person Form</h3>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={fullName}
                    onChange={this.handleChange}
                />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
