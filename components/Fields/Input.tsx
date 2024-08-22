import React, { ReactElement } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister } from "react-hook-form";

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
    inputClassname?: string;
    inputStyle?: React.CSSProperties;  // Updated this line
    buttonStyle?: React.CSSProperties;
    validationRules?: object;
    error?: string;
    register?: UseFormRegister<any>;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
    id?: string;
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
    className,
    inputClassname,
    inputStyle,  // Updated this line
    buttonStyle,
    validationRules,
    error,
    register,
    icon,
    onClick,
    id,
}) => {
    return (
        <div className={`${className} flex flex-col gap-2 relative`}>
            {labelName && (
                <Label
                    htmlFor={name}
                    className={`text-md w-[100%] text-accent-color font-medium flex items-center gap-2`}
                >
                    {icon && <span className="text-2xl">{icon}</span>}
                    {labelName} {required ? "*" : ""}
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
                autoComplete="on"
                onClick={onClick}
                style={inputStyle}  // Updated this line
                className={`${inputClassname} w-[100%] rounded-md px-3 h-12 placeholder:text-[0.95rem] focus:border-[accent-color] focus:ring focus:ring-accent-color focus:ring-opacity-50 ${error ? "border-red-500" : ""}`}
            />

            {helpText && <p className="text-xs text-red-500">{helpText}</p>}
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
};

export default InputField;
