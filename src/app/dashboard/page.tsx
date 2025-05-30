'use client'
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, Trophy, Clock, TrendingUp, Star } from 'lucide-react';

const Dashboard = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 14,
    minutes: 23,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const userStats = {
    name: "Alex Johnson",
    xp: 2450,
    level: 12,
    lessonsCompleted: 34,
    totalLessons: 50,
    problemsSolved: { easy: 25, medium: 18, hard: 7 },
    activeMissions: 3
  };

  const recentActivity = [
    { type: 'lesson', title: 'Dynamic Programming Basics', time: '2 hours ago', xp: 50 },
    { type: 'problem', title: 'Two Sum', difficulty: 'Easy', time: '4 hours ago', xp: 10 },
    { type: 'contest', title: 'Weekly Contest #47', time: '1 day ago', xp: 150 },
    { type: 'lesson', title: 'Graph Algorithms', time: '2 days ago', xp: 75 },
    { type: 'problem', title: 'Longest Palindromic Substring', difficulty: 'Medium', time: '3 days ago', xp: 25 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {userStats.name}! 👋</h1>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5" />
            <span className="text-lg font-semibold">{userStats.xp} XP</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span className="text-lg font-semibold">Level {userStats.level}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Progress Cards */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lessons Progress */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  <span>Lessons Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Completed</span>
                    <span className="font-semibold">{userStats.lessonsCompleted}/{userStats.totalLessons}</span>
                  </div>
                  <Progress value={(userStats.lessonsCompleted / userStats.totalLessons) * 100} className="h-2" />
                  <p className="text-sm text-gray-600">{Math.round((userStats.lessonsCompleted / userStats.totalLessons) * 100)}% Complete</p>
                </div>
              </CardContent>
            </Card>

            {/* Problems Solved */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Code className="w-5 h-5 text-green-600" />
                  <span>Problems Solved</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Easy</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">{userStats.problemsSolved.easy}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Medium</span>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{userStats.problemsSolved.medium}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Hard</span>
                    <Badge variant="secondary" className="bg-red-100 text-red-800">{userStats.problemsSolved.hard}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Missions */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  <span>Active Missions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <p className="text-sm font-medium">Solve 5 Array Problems</p>
                    <Progress value={60} className="h-1 mt-2" />
                    <p className="text-xs text-gray-600 mt-1">3/5 completed</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">View All Missions</Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Contest */}
            <Card className="shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span>Next Contest</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold">Weekly Contest #48</h4>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold">{timeLeft.days}</div>
                      <div className="text-xs text-gray-600">Days</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold">{timeLeft.hours}</div>
                      <div className="text-xs text-gray-600">Hours</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold">{timeLeft.minutes}</div>
                      <div className="text-xs text-gray-600">Min</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold">{timeLeft.seconds}</div>
                      <div className="text-xs text-gray-600">Sec</div>
                    </div>
                  </div>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Register Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Column - Activity Feed */}
        <div className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'lesson' ? 'bg-indigo-100' :
                      activity.type === 'problem' ? 'bg-green-100' : 'bg-purple-100'
                    }`}>
                      {activity.type === 'lesson' && <BookOpen className="w-4 h-4 text-indigo-600" />}
                      {activity.type === 'problem' && <Code className="w-4 h-4 text-green-600" />}
                      {activity.type === 'contest' && <Trophy className="w-4 h-4 text-purple-600" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{activity.title}</p>
                      {'difficulty' in activity && (
                        <Badge variant="secondary" className={`text-xs mt-1 ${
                          activity.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                          activity.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {activity.difficulty}
                        </Badge>
                      )}
                      <p className="text-xs text-gray-500 mt-1">{activity.time} • +{activity.xp} XP</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
