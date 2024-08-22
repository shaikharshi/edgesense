"use client"
import React, { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface FileInputFieldProps {
  labelName?: string;
  name: string;
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: ReactElement;
  accept?: string;
  className?: string;
  multiple?: boolean;
  register?: UseFormRegister<any>;
  error?: string;
}

const FileInputField: React.FC<FileInputFieldProps> = ({
  labelName,
  name,
  helpText,
  required,
  disabled,
  icon,
  accept,
  className,
  multiple,
  register,
  error,
}) => {

  return (
    <div className={`${className} flex flex-col gap-2`}>
      {labelName &&
        <Label
          htmlFor={name}
          className={`text-md w-[100%] ${error ? 'text-red-500' : ''
            }`}
        >
          {/* {icon && <span className="text-2xl">{icon}</span>} */}
          {labelName} {required ? '*' : ''}
        </Label>
      }
      <div className="flex gap-3 items-center p-4 border-2 border-gray-200 rounded-md">
        <Input
          {...(register ? register(name) : {})}
          type="file"
          id={name}
          name={name}
          required={required}
          accept={accept}
          className="h-auto p-0 shadow-none border-none"
          disabled={disabled}
          multiple={multiple}
        />
      </div>
      {error && <p className='text-[12px] text-red-500'>{error}</p>}
      {helpText && <p className="text-xs text-gray-500">{helpText}</p>}
    </div>
  );
};

export default FileInputField;
