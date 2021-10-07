import React from 'react'
import { Link } from 'react-router-dom'

function Cancel({title}) {
    return (
        <Link to="/contacts" className="px-6 py-2 text-gray-900 rounded-lg text-sm mr-2">{title}</Link>
    )
}

export default Cancel
