'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, BookOpen, Trophy, Users, Star, TrendingUp, Target, Award } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      title: 'Coding Problems',
      description: 'Practice with 1000+ carefully curated problems across all difficulty levels',
      stats: '1,000+ Problems'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: 'Interactive Lessons',
      description: 'Learn through structured lessons with video content and hands-on exercises',
      stats: '150+ Lessons'
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      title: 'Live Contests',
      description: 'Compete with peers in weekly contests and climb the leaderboard',
      stats: 'Weekly Contests'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Community',
      description: 'Connect with fellow students and learn together',
      stats: '10,000+ Students'
    }
  ];

  const stats = [
    { label: 'Active Students', value: '12,500+', icon: <Users className="w-5 h-5" /> },
    { label: 'Problems Solved', value: '500,000+', icon: <Code className="w-5 h-5" /> },
    { label: 'Lessons Completed', value: '250,000+', icon: <BookOpen className="w-5 h-5" /> },
    { label: 'Contest Participants', value: '5,000+', icon: <Trophy className="w-5 h-5" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: '3rd Year CSE',
      content: 'CrceCode helped me land my dream internship at Google. The structured approach and contest practice made all the difference.',
      rating: 5
    },
    {
      name: 'Alex Rodriguez',
      role: '2nd Year ECE',
      content: 'The lessons are incredibly well-structured. I went from knowing basic syntax to solving medium-level problems in just 2 months.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: '4th Year IT',
      content: 'Love the competitive environment. Weekly contests keep me motivated and the leaderboard system is addictive!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Master Coding at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                CRCE
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of CRCE students learning data structures, algorithms, and competitive programming 
              through interactive lessons, coding challenges, and live contests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-3">
                  Start Learning Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/problems">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                  Browse Problems
                </Button>
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center text-indigo-600 mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to excel in coding
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From beginner-friendly lessons to advanced algorithmic challenges, 
              we provide a complete learning ecosystem for CRCE students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
                    {feature.stats}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Structured Learning Paths
            </h2>
            <p className="text-xl text-gray-600">
              Progress through carefully designed curricula tailored for different skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Target className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-xl">Beginner Track</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Perfect for students new to programming. Learn syntax, basic data structures, and problem-solving fundamentals.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Programming Fundamentals</li>
                  <li>• Basic Data Structures</li>
                  <li>• Simple Problem Solving</li>
                  <li>• 100+ Practice Problems</li>
                </ul>
                <Link href="/lessons">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Start Beginner Track
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 border-indigo-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                    <CardTitle className="text-xl">Intermediate Track</CardTitle>
                  </div>
                  <Badge className="bg-indigo-100 text-indigo-800">Popular</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advance your skills with algorithms, dynamic programming, and competitive programming concepts.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Advanced Algorithms</li>
                  <li>• Dynamic Programming</li>
                  <li>• Graph Theory</li>
                  <li>• 300+ Practice Problems</li>
                </ul>
                <Link href="/lessons">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Start Intermediate Track
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-xl">Advanced Track</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Master complex algorithms and prepare for top-tier technical interviews and programming contests.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Advanced Data Structures</li>
                  <li>• Contest Strategies</li>
                  <li>• System Design Basics</li>
                  <li>• 500+ Hard Problems</li>
                </ul>
                <Link href="/lessons">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Start Advanced Track
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by CRCE Students
            </h2>
            <p className="text-xl text-gray-600">
              See what your fellow students say about their learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to start your coding journey?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of CRCE students who are already mastering competitive programming
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-3">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 text-lg px-8 py-3">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
