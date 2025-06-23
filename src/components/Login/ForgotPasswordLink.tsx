import React from 'react';
import { cn } from "@/lib/utils";

interface ForgotPasswordLinkProps {
  className?: string;
}

const ForgotPasswordLink: React.FC<ForgotPasswordLinkProps> = ({ className }) => {
  return (
    <a
      href="#"
      className={cn(
        "text-sm font-medium text-primary hover:underline",
        className
      )}
    >
      Forgot Password
    </a>
  );
};

export default ForgotPasswordLink;
