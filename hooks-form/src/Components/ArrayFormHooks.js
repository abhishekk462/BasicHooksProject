import React, { useState } from 'react'

const ArrayFormHooks = () => {

    const [items, setItem] = useState([])

    const addItem = () => {
        setItem([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <h3>Add Item in Array Form Hooks</h3>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map(item => <li key={item.id}>{item.value}</li>)}
            </ul>
        </div>
    )
}
export default ArrayFormHooks;