// lib
import React, { InputHTMLAttributes, RefObject } from 'react'
import { FormikErrors } from 'formik'

export type InputProps = {
  id: string
  name: string
  label: string
  type: InputHTMLAttributes<HTMLElement>['type']
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  errorMessage?: string | string[] | FormikErrors<any>[] | FormikErrors<any>
  inputRef?: RefObject<HTMLInputElement>
  defaultValue?: string
  value?: string | number
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
  value,
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
      {errorMessage && <p className='text-danger m-0'>{errorMessage}</p>}
    </div>
  )
}

export default Input
