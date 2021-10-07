import React from 'react'

function HeaderTitle({title}) {
    return (
        <h1 className="text-base font-semibold mb-6 absolute top-0 left-0 right-0 w-full p-2 pt-[0.60rem] px-4 border-b text-gray-900 rounded-t-xl">{title}</h1>
    )
}

export default HeaderTitle
