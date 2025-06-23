import React from 'react';
import { cn } from "@/lib/utils";

interface MainAppLayoutProps {
  children: React.ReactNode; // The content to be rendered within the layout
  className?: string; // Optional additional class names for custom styling
}

/**
 * MainAppLayout provides a consistent, full-screen, centered layout structure.
 * It uses Flexbox to center its children both horizontally and vertically, 
 * serving as the main container for the application's content.
 * 
 * @param {MainAppLayoutProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the layout.
 * @param {string} [props.className] - Optional CSS classes to apply to the main layout container.
 * @returns {JSX.Element} The rendered layout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        "flex h-screen w-full items-center justify-center bg-background",
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
