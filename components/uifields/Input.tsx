import React, { ChangeEvent, ReactElement, useEffect } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UseFormRegister } from 'react-hook-form';
import { useState } from 'react';

interface InputFieldProps {
  name: string;
  value?: string;
  labelName?: string;
  helpText?: string;
  inputType: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  icon?: ReactElement;
  className?: string;
  validationRules?: object;
  error?: string;
  register?: UseFormRegister<any>;
}
const InputField: React.FC<InputFieldProps> = ({
  name,
  value,
  labelName,
  helpText,
  inputType,
  required,
  disabled,
  placeholder,
  icon,
  className,
  validationRules,
  error,
  register,
}) => {


  return (
    <div className={`${className} flex flex-col gap-2`}>
      {labelName && (
        <Label
          htmlFor={name}
          className={`text-md w-[100%] ${error ? 'text-red-500' : ''
            }`}
        >
          {/* {icon && <span className="text-2xl">{icon}</span>} */}
          {labelName} {required ? '*' : ''}
        </Label>
      )}

      <Input
        {...(register ? register(name, validationRules) : {})}
        type={inputType}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={value}
        required={required}
        disabled={disabled}
        className={`border-2 border-gray-200 w-[100%] rounded-md px-3 h-12 placeholder:text-[0.95rem] focus:border-primary focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${error ? 'border-red-500 focus:border-red-500' : ''
          }`}
      />

      {helpText && <p className="text-xs text-gray-500">{helpText}</p>}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};


export default InputField;
