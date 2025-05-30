'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, Mail, Lock, User, Github, Chrome, GraduationCap } from 'lucide-react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    department: '',
    year: '',
    rollNumber: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const departments = [
    { value: 'cse', label: 'Computer Science Engineering' },
    { value: 'ece', label: 'Electronics & Communication' },
    { value: 'mech', label: 'Mechanical Engineering' },
    { value: 'civil', label: 'Civil Engineering' },
    { value: 'eee', label: 'Electrical Engineering' },
    { value: 'it', label: 'Information Technology' }
  ];

  const years = [
    { value: '1', label: '1st Year' },
    { value: '2', label: '2nd Year' },
    { value: '3', label: '3rd Year' },
    { value: '4', label: '4th Year' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      console.log('Registration attempt:', formData);
    }, 2000);
  };

  const handleSSOLogin = () => {
    console.log('SSO registration attempted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full space-y-6">
        {/* Logo and Header */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 text-2xl font-bold text-indigo-600">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span>CrceCode</span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-gray-600">Join thousands of students learning to code</p>
        </div>

        {/* Registration Form */}
        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-xl text-center">Sign up for CrceCode</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Social Registration */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full h-11 bg-white hover:bg-gray-50"
                onClick={handleSSOLogin}
              >
                <GraduationCap className="w-5 h-5 mr-3" />
                Sign up with College SSO
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

            {/* Registration Form */}
            <form onSubmit={handleRegister} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="pl-9 h-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="h-10"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="student@college.edu"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-9 h-10"
                    required
                  />
                </div>
              </div>

              {/* Academic Details */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="Select dept." />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept.value} value={dept.value}>
                          {dept.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Select value={formData.year} onValueChange={(value) => handleInputChange('year', value)}>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year.value} value={year.value}>
                          {year.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Roll Number */}
              <div className="space-y-2">
                <Label htmlFor="rollNumber">Roll Number</Label>
                <Input
                  id="rollNumber"
                  type="text"
                  placeholder="20XX-XXX-XXX"
                  value={formData.rollNumber}
                  onChange={(e) => handleInputChange('rollNumber', e.target.value)}
                  className="h-10"
                  required
                />
              </div>

              {/* Password Fields */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="pl-9 pr-10 h-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="pl-9 pr-10 h-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-0.5"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-700 leading-5">
                  I agree to the{' '}
                  <Link href="/terms" className="text-indigo-600 hover:text-indigo-500">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-indigo-600 hover:text-indigo-500">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-indigo-600 hover:bg-indigo-700"
                disabled={isLoading}
              >
                {isLoading ? 'Creating account...' : 'Create account'}
              </Button>
            </form>

            <div className="text-center text-sm">
              <span className="text-gray-600">Already have an account? </span>
              <Link
                href="/login"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                Sign in
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

export default Register;
