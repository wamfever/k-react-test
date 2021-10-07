import React from "react";

const Select = React.forwardRef(({ name, label, id }, ref) => (
    <>
        <label htmlFor={id} className="text-sm font-medium text-gray-900 mb-1">{label}</label>
        <select id={id} name={name} ref={ref} className="border p-2 rounded-lg h-[42px]">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
    </>
));

export default Select;