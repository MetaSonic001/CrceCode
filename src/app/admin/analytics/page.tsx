'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Download, TrendingUp, Users, BookOpen, Code, Trophy } from 'lucide-react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const userEngagementData = [
    { date: '2024-01-22', dau: 120, wau: 450 },
    { date: '2024-01-23', dau: 135, wau: 460 },
    { date: '2024-01-24', dau: 158, wau: 480 },
    { date: '2024-01-25', dau: 142, wau: 475 },
    { date: '2024-01-26', dau: 167, wau: 490 },
    { date: '2024-01-27', dau: 180, wau: 520 },
    { date: '2024-01-28', dau: 195, wau: 550 }
  ];

  const problemSolvingData = [
    { difficulty: 'Easy', solved: 1250, attempts: 1890 },
    { difficulty: 'Medium', solved: 850, attempts: 1680 },
    { difficulty: 'Hard', solved: 320, attempts: 890 }
  ];

  const lessonCompletionData = [
    { lesson: 'Arrays Basics', completed: 89, avgScore: 85 },
    { lesson: 'Linked Lists', completed: 76, avgScore: 78 },
    { lesson: 'Binary Trees', completed: 65, avgScore: 82 },
    { lesson: 'Dynamic Programming', completed: 45, avgScore: 75 },
    { lesson: 'Graph Algorithms', completed: 38, avgScore: 80 }
  ];

  const contestParticipationData = [
    { contest: 'Weekly #45', participants: 156, avgSolves: 2.3 },
    { contest: 'DSA Championship', participants: 89, avgSolves: 3.1 },
    { contest: 'Speed Coding', participants: 203, avgSolves: 1.8 },
    { contest: 'Algorithm Masters', participants: 124, avgSolves: 2.7 }
  ];

  const departmentDistribution = [
    { name: 'Computer Science', value: 45, color: '#8884d8' },
    { name: 'Electronics', value: 25, color: '#82ca9d' },
    { name: 'Mechanical', value: 15, color: '#ffc658' },
    { name: 'Civil', value: 10, color: '#ff7300' },
    { name: 'Others', value: 5, color: '#00c49f' }
  ];

  const exportReport = (type) => {
    // Implementation for exporting reports
    console.log(`Exporting ${type} report...`);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics & Reporting</h1>
          <p className="text-gray-600 dark:text-gray-400">Comprehensive insights into platform usage</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" onClick={() => exportReport('all')}>
            <Download className="w-4 h-4 mr-2" />
            Export Reports
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-bold">195</p>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% vs last week
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Lessons Completed</p>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +8% vs last week
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Code className="w-8 h-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Problems Solved</p>
                <p className="text-2xl font-bold">2,420</p>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +15% vs last week
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Trophy className="w-8 h-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Contest Participants</p>
                <p className="text-2xl font-bold">572</p>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +25% vs last week
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-600 font-bold">%</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold">73%</p>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +3% vs last week
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="engagement" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="engagement">User Engagement</TabsTrigger>
          <TabsTrigger value="learning">Learning Progress</TabsTrigger>
          <TabsTrigger value="problems">Problem Solving</TabsTrigger>
          <TabsTrigger value="contests">Contest Performance</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>

        <TabsContent value="engagement" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily/Weekly Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={userEngagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="dau" stroke="#8884d8" name="Daily Active Users" />
                  <Line type="monotone" dataKey="wau" stroke="#82ca9d" name="Weekly Active Users" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Completion Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={lessonCompletionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="lesson" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="completed" fill="#8884d8" name="Completed" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="problems" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Problem Solving by Difficulty</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={problemSolvingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="difficulty" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="solved" fill="#82ca9d" name="Solved" />
                  <Bar dataKey="attempts" fill="#ffc658" name="Attempts" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contests" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contest Participation Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={contestParticipationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="contest" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="participants" fill="#8884d8" name="Participants" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Department Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={departmentDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {departmentDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
