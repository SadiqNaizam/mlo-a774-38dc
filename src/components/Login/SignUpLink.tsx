import React from 'react';
import { cn } from "@/lib/utils";

interface SignUpLinkProps {
    className?: string;
}

const SignUpLink: React.FC<SignUpLinkProps> = ({ className }) => {
  return (
    <p className={cn("w-full text-center text-sm text-muted-foreground", className)}>
      Don't have an account?{' '}
      <a href="#" className="font-semibold text-primary hover:underline">
        SignUp
      </a>
    </p>
  );
};

export default SignUpLink;
