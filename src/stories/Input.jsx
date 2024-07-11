import propTypes from 'prop-types'
import { useState } from 'react'

const Input = ({ label, placeholder, minLength }) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
        if (e.target.value.length < 5) {
            setError(`Input must be at least ${minLength} characters long`)
        } else setError('')
    }

    return (
        <div className='flex flex-col mb-4'>
            {label && (
                <label htmlFor='demo' className='text-xs'>
                    {label}
                </label>
            )}
            <input
                id='demo'
                type='text'
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className='border-b max-w-48 bg-transparent border-black py-1 focus:outline-none'
            ></input>
            {error && <p className='text-xs text-red-800'>{error}</p>}
        </div>
    )
}

Input.propTypes = {
    label: propTypes.string,
    placeholder: propTypes.string,
    input: propTypes.number,
}

export default Input


