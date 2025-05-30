'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, Mail, Lock, Github, Chrome } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
      console.log('Login attempt:', { email, password });
    }, 2000);
  };

  const handleSSOLogin = () => {
    // Handle SSO login
    console.log('SSO login attempted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-6">
        {/* Logo and Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 text-2xl font-bold text-indigo-600">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span>CrceCode</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-gray-600">Sign in to your account to continue learning</p>
        </div>

        {/* Login Form */}
        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-xl text-center">Sign in to CrceCode</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Social Login */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full h-11 bg-white hover:bg-gray-50"
                onClick={handleSSOLogin}
              >
                <Chrome className="w-5 h-5 mr-3" />
                Continue with College SSO
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-11 bg-white hover:bg-gray-50">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="h-11 bg-white hover:bg-gray-50">
                  <Chrome className="w-5 h-5 mr-2" />
                  Google
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with email</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="student@college.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-11"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-11"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-indigo-600 hover:bg-indigo-700"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </Button>
            </form>

            <div className="text-center text-sm">
              <span className="text-gray-600">Don't have an account? </span>
              <Link
                to="/register"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                Sign up for free
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 space-x-4">
          <Link href="/privacy" className="hover:text-gray-700">Privacy Policy</Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-gray-700">Terms of Service</Link>
          <span>•</span>
          <Link href="/help" className="hover:text-gray-700">Help</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
