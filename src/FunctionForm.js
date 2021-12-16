import React, { useState } from 'react'

export function FunctionForm ({ handleSubmit }) {
    const [fullName, setFullName] = useState('')
    const [job, setJob] = useState('')

    const submit = (event) => {
        handleSubmit({ fullName, job })
        setFullName('')
        setJob('')

        event.preventDefault()
    }

    return (
        <form action="submit" onSubmit={submit}>
            <h2>Person Form</h2>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="fullName"
                id="fullName"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
            />
            <label htmlFor="job">Job</label>
            <input
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={(event) => setJob(event.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}
