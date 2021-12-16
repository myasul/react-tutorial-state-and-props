import { useState } from 'react'

export function FormTwo (props) {
    const [fullName, setFullName] = useState('')
    const [job, setJob] = useState('')

    const handleSubmit = (event) => {
        props.handleSubmit({ fullName, job })
        setFullName('')
        setJob('')

        event.preventDefault()
    }

    return (
        <form action="submit">
            <h2>Updated Form</h2>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="fullName"
                id="fullName"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
            />
            <label htmlFor="name">Job</label>
            <input
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={(event) => setJob(event.target.value)}
            />
            <button type='submit' onClick={handleSubmit}>Add</button>
        </form>
    )
}