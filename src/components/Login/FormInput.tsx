import React from 'react';
import { cn } from "@/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const FormInput: React.FC<FormInputProps> = ({ className, type, ...props }) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-auto w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0.5 pb-2 text-base text-foreground shadow-none transition-colors",
        "placeholder:text-muted-foreground",
        "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
};

export default FormInput;
