import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";

interface LoginButtonProps {
    className?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ className }) => {
  return (
    <Button
      type="submit"
      className={cn("w-full h-11 rounded-lg text-base font-semibold", className)}
    >
      Login
    </Button>
  );
};

export default LoginButton;
