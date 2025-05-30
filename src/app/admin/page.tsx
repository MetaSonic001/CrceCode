'use client'
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  BookOpen, 
  Code, 
  Trophy, 
  Plus, 
  FileText, 
  Calendar,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react';

const AdminDashboard = () => {
  const metrics = [
    { title: 'Total Students', value: '1,247', change: '+12%', icon: Users, color: 'text-blue-600' },
    { title: 'Active This Week', value: '892', change: '+8%', icon: TrendingUp, color: 'text-green-600' },
    { title: 'New Sign-ups', value: '34', change: '+23%', icon: Users, color: 'text-purple-600' },
    { title: 'Lessons Completed', value: '156', change: '+15%', icon: BookOpen, color: 'text-orange-600' },
    { title: 'Problems Solved', value: '2,341', change: '+18%', icon: Code, color: 'text-indigo-600' },
    { title: 'Upcoming Contests', value: '3', change: '0%', icon: Trophy, color: 'text-yellow-600' }
  ];

  const quickActions = [
    { title: 'Create New Lesson', icon: BookOpen, href: '/admin/lessons/new', color: 'bg-blue-50 hover:bg-blue-100 dark:bg-blue-950 dark:hover:bg-blue-900' },
    { title: 'Add Problem', icon: Code, href: '/admin/problems/new', color: 'bg-green-50 hover:bg-green-100 dark:bg-green-950 dark:hover:bg-green-900' },
    { title: 'Schedule Contest', icon: Trophy, href: '/admin/contests/new', color: 'bg-purple-50 hover:bg-purple-100 dark:bg-purple-950 dark:hover:bg-purple-900' },
    { title: 'View Reports', icon: FileText, href: '/admin/analytics', color: 'bg-orange-50 hover:bg-orange-100 dark:bg-orange-950 dark:hover:bg-orange-900' }
  ];

  const recentActivity = [
    { action: 'New user registration', user: 'John Doe', time: '2 minutes ago', type: 'user' },
    { action: 'Contest "Weekly Challenge #23" completed', user: 'System', time: '1 hour ago', type: 'contest' },
    { action: 'Problem "Two Sum" solved', user: 'Jane Smith', time: '3 hours ago', type: 'problem' },
    { action: 'Lesson "Binary Trees" published', user: 'Admin', time: '5 hours ago', type: 'lesson' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Welcome back! Here's what's happening on CrceCode.</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            <span>Last updated: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{metric.value}</p>
                    <p className={`text-sm mt-1 ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.change} from last week
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-700 ${metric.color}`}>
                    <metric.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`h-auto p-6 flex flex-col items-center space-y-2 ${action.color} border border-gray-200 dark:border-gray-600`}
                >
                  <action.icon className="w-8 h-8" />
                  <span className="text-sm font-medium text-center">{action.title}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.action}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">by {activity.user} • {activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Database</span>
                  <span className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Judge0 API</span>
                  <span className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Email Service</span>
                  <span className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Storage</span>
                  <span className="flex items-center text-yellow-600">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    87% Full
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
