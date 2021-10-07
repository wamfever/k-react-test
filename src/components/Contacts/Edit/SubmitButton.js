import React from 'react'

function SubmitButton({title}) {
    return (
        <button type="submit" className="bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 font-medium px-6 py-2 text-white rounded-full shadow-md text-sm">{title}</button>
    )
}

export default SubmitButton
