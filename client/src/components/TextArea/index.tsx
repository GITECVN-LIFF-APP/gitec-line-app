// Lib
import React, { RefObject } from 'react'

export type TextAreaProps = {
  id: string
  name: string
  label: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  errorMessage?: string
  inputRef?: RefObject<HTMLTextAreaElement>
  defaultValue: string
}

const TextArea = ({
  id,
  name,
  label,
  onChange,
  placeholder = 'Please enter something.',
  errorMessage,
  inputRef,
  defaultValue,
}: TextAreaProps): JSX.Element => {
  return (
    <div className='d-flex flex-column mt-3'>
      <div className='input-group flex-nowrap'>
        <label htmlFor={id} className='input-group-text'>
          {label}
        </label>
        <textarea
          defaultValue={defaultValue}
          ref={inputRef}
          id={id}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className='form-control modal__text-area'
        />
      </div>
      {errorMessage && <small className='badge bg-danger text-wrap fs-6'>{errorMessage}</small>}
    </div>
  )
}

export default TextArea
