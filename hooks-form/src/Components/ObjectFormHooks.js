import React, { useState } from 'react'

const ObjectFormHooks = () => {
    const [name, setName] = useState(
        {
            FirstName: '',
            LastName: ''
        })

    return (
        <div>
            <h3>Object Name using Hooks</h3>
            <input type='text'
                value={name.FirstName}
                onChange = {e => setName({ ...name, FirstName:e.target.value})}
            />
            <input type='text'
                value={name.LastName}
                onChange = {e => setName ({ ...name, LastName:e.target.value})}
            />
            <h5>Customer First Name :  {name.FirstName}</h5>
            <h5>Customer Last Name  :  {name.LastName}</h5>
        </div>
    )
}

export default ObjectFormHooks;