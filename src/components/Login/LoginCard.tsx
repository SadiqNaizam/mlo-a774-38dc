import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormInput from './FormInput';
import LoginButton from './LoginButton';
import ForgotPasswordLink from './ForgotPasswordLink';
import SignUpLink from './SignUpLink';

const LoginCard: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // In a production application, you would add form validation and an API call here.
        console.log('Login Submitted', { email, password });
    };

    return (
        <Card className="w-96 border-none shadow-xl rounded-lg bg-card">
            <CardHeader className="pt-10 pb-6">
                <CardTitle className="text-center text-3xl font-bold text-card-foreground">
                    Welcome
                </CardTitle>
            </CardHeader>
            <CardContent className="px-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <FormInput
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                    />
                    <div className="space-y-2">
                        <FormInput
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                        />
                        <div className="flex justify-end pt-1">
                            <ForgotPasswordLink />
                        </div>
                    </div>
                    <div className="pt-2">
                        <LoginButton />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center pt-6 pb-8">
                <SignUpLink />
            </CardFooter>
        </Card>
    );
};

export default LoginCard;
