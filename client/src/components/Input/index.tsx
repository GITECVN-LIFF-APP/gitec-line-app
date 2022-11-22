// lib
import React, { InputHTMLAttributes, RefObject } from 'react'

export type InputProps = {
  id: string
  name: string
  label: string
  type: InputHTMLAttributes<HTMLElement>['type']
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  errorMessage?: string
  inputRef?: RefObject<HTMLInputElement>
  defaultValue: string
}

const Input = ({
  id,
  name,
  label,
  type,
  onChange,
  placeholder,
  errorMessage,
  inputRef,
  defaultValue,
}: InputProps): JSX.Element => {
  return (
    <div className='d-flex flex-column mt-3'>
      <div className='flex-nowrap'>
        <label htmlFor={id} className='mb-2 fw-semibold'>
          {label}
        </label>
        <input
          defaultValue={defaultValue}
          ref={inputRef}
          id={id}
          type={type}
          className='form-control rounded-pill'
          name={name}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      {errorMessage && (
        <small data-testid={`${name}-error`} className='badge bg-danger text-wrap fs-6'>
          {errorMessage}
        </small>
      )}
    </div>
  )
}

export default Input
