import React from 'react'


function Input({value,type,onChange,placeholder,style,name,onMouseOver,onMouseOut}) {
    return (
        <div >
            <div>
            <label 
                class="sr-only"
            >
            {type}
            </label>
            <input 
                type={type} 
                name={name}
                required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                style={style}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
            />
            </div>
        </div>
    )
}

export default Input
