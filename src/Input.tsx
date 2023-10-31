import React from 'react';
import { useFormContext } from 'react-hook-form';

export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  readOnly = false,
  disabled = false,
  validation,
  className,
  autoComplete = 'off',
  labelStyle =  {
    width: "531px",
    height: '20px',
    letterSpacing: '0px',
    color: '#1E1014',
    opacity: 1,
    marginBottom: '5px',
    fontSize: '14px',
  },
  inputStyle = {
    width: '531px',
    height: '48px',
    background: "#FFFFFF 0% 0 % no-repeat padding-box",
    border: "1px solid #D7D7D7",
    borderRadius: "8px",
    opacity: 1,
    padding: "12px 16px",
  },
  ...rest
}: any) => {
  const {register, formState: {errors}} =useFormContext()
    return (
        <>
        <div 
        className='d-flex flex-column justify-content-center align-items-center w-100'
        style={{
          marginBottom:'15px'
        }}
        >
          <label
            htmlFor={id}
            className="text-capitalize d-flex align-items-center justify-content-start"
            style={labelStyle}
          >
            {label}
          </label>
          <input
            id={id}
            type={type}
            className= {className}
            placeholder={placeholder}
            readOnly= {readOnly}
            disabled = {disabled}
            autoComplete= {autoComplete}
            style={inputStyle}
            {...rest}
            {...register(name, validation)}
          />
          </div>
        </>
    );
}

