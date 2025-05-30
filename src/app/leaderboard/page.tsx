'use client'
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown, Medal, Trophy, TrendingUp, TrendingDown, Minus, Star, Code, BookOpen, Zap } from 'lucide-react';

const Leaderboard = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'cse', label: 'Computer Science' },
    { value: 'ece', label: 'Electronics' },
    { value: 'mech', label: 'Mechanical' },
    { value: 'civil', label: 'Civil' }
  ];

  const years = [
    { value: 'all', label: 'All Years' },
    { value: '1', label: '1st Year' },
    { value: '2', label: '2nd Year' },
    { value: '3', label: '3rd Year' },
    { value: '4', label: '4th Year' }
  ];

  const leaderboardData = {
    overall: [
      {
        rank: 1,
        name: 'Alex Johnson',
        avatar: '/api/placeholder/40/40',
        department: 'CSE',
        year: '3rd',
        points: 15420,
        problemsSolved: 234,
        contestsWon: 8,
        lessonsCompleted: 45,
        change: 'same'
      },
      {
        rank: 2,
        name: 'Sarah Chen',
        avatar: '/api/placeholder/40/40',
        department: 'CSE',
        year: '2nd',
        points: 14200,
        problemsSolved: 201,
        contestsWon: 5,
        lessonsCompleted: 52,
        change: 'up'
      },
      {
        rank: 3,
        name: 'Mike Rodriguez',
        avatar: '/api/placeholder/40/40',
        department: 'ECE',
        year: '4th',
        points: 13780,
        problemsSolved: 198,
        contestsWon: 6,
        lessonsCompleted: 38,
        change: 'down'
      },
      {
        rank: 4,
        name: 'Emily Davis',
        avatar: '/api/placeholder/40/40',
        department: 'CSE',
        year: '3rd',
        points: 13450,
        problemsSolved: 187,
        contestsWon: 4,
        lessonsCompleted: 41,
        change: 'up'
      },
      {
        rank: 5,
        name: 'James Wilson',
        avatar: '/api/placeholder/40/40',
        department: 'MECH',
        year: '2nd',
        points: 12890,
        problemsSolved: 165,
        contestsWon: 3,
        lessonsCompleted: 35,
        change: 'same'
      }
    ]
  };

  const topSolvers = [
    { name: 'Alex Johnson', solved: 234, avatar: '/api/placeholder/32/32' },
    { name: 'Sarah Chen', solved: 201, avatar: '/api/placeholder/32/32' },
    { name: 'Mike Rodriguez', solved: 198, avatar: '/api/placeholder/32/32' }
  ];

  const topContestants = [
    { name: 'Alex Johnson', wins: 8, avatar: '/api/placeholder/32/32' },
    { name: 'Mike Rodriguez', wins: 6, avatar: '/api/placeholder/32/32' },
    { name: 'Sarah Chen', wins: 5, avatar: '/api/placeholder/32/32' }
  ];

  const topLearners = [
    { name: 'Sarah Chen', completed: 52, avatar: '/api/placeholder/32/32' },
    { name: 'Alex Johnson', completed: 45, avatar: '/api/placeholder/32/32' },
    { name: 'Emily Davis', completed: 41, avatar: '/api/placeholder/32/32' }
  ];

  const monthlyChampions = [
    { month: 'January', name: 'Alex Johnson', points: 2450 },
    { month: 'December', name: 'Sarah Chen', points: 2380 },
    { month: 'November', name: 'Mike Rodriguez', points: 2290 }
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Trophy className="w-6 h-6 text-orange-500" />;
      default: return <span className="text-gray-600 font-bold text-lg">#{rank}</span>;
    }
  };

  const getChangeIcon = (change) => {
    switch (change) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />;
      default: return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  const getRankBackground = (rank) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200 shadow-lg';
      case 2: return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 shadow-md';
      case 3: return 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200 shadow-md';
      default: return 'bg-white border-gray-200 hover:shadow-md';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">🏆 Global Leaderboard</h1>
        <p className="text-xl text-gray-600 text-center">See how you rank among your peers across all activities</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Leaderboard */}
        <div className="lg:col-span-3">
          {/* Top 3 Spotlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {leaderboardData.overall.slice(0, 3).map((user, index) => (
              <Card key={user.name} className={`text-center ${getRankBackground(user.rank)} transform hover:scale-105 transition-transform`}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {getRankIcon(user.rank)}
                  </div>
                  
                  <Avatar className="w-20 h-20 mx-auto mb-4 ring-4 ring-white shadow-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-xl font-bold">{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{user.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Badge variant="outline" className="text-xs">
                      {user.department}
                    </Badge>
                    <span className="text-sm text-gray-600">{user.year} Year</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-3xl font-bold text-indigo-600">{user.points.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Total XP</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <div className="font-semibold text-green-600">{user.problemsSolved}</div>
                        <div className="text-gray-600">Problems</div>
                      </div>
                      <div>
                        <div className="font-semibold text-purple-600">{user.contestsWon}</div>
                        <div className="text-gray-600">Contests</div>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-600">{user.lessonsCompleted}</div>
                        <div className="text-gray-600">Lessons</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger>
                      <SelectValue />
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
                
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger>
                      <SelectValue />
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
                
                <div className="flex items-end">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setSelectedDepartment('all');
                      setSelectedYear('all');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-6 h-6 text-indigo-600" />
                <span>Overall Rankings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboardData.overall.map((user) => (
                  <Card key={`${user.rank}-${user.name}`} className={`${getRankBackground(user.rank)} transition-all hover:shadow-lg`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center justify-center w-12">
                            {getRankIcon(user.rank)}
                          </div>
                          
                          <Avatar className="w-12 h-12 ring-2 ring-white shadow">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">{user.name}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Badge variant="outline" className="text-xs">
                                {user.department}
                              </Badge>
                              <span>{user.year} Year</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-8">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-600">{user.points.toLocaleString()}</div>
                            <div className="text-xs text-gray-600">Total XP</div>
                          </div>
                          
                          <div className="text-center">
                            <div className="text-xl font-bold text-green-600">{user.problemsSolved}</div>
                            <div className="text-xs text-gray-600">Problems</div>
                          </div>

                          <div className="text-center">
                            <div className="text-xl font-bold text-purple-600">{user.contestsWon}</div>
                            <div className="text-xs text-gray-600">Contests</div>
                          </div>

                          <div className="text-center">
                            <div className="text-xl font-bold text-blue-600">{user.lessonsCompleted}</div>
                            <div className="text-xs text-gray-600">Lessons</div>
                          </div>
                          
                          <div className="flex items-center">
                            {getChangeIcon(user.change)}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Panel with Mini Leaderboards */}
        <div className="space-y-6">
          {/* Top Problem Solvers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Code className="w-5 h-5 text-green-600" />
                <span>Top Problem Solvers</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topSolvers.map((solver, index) => (
                <div key={solver.name} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={solver.avatar} alt={solver.name} />
                    <AvatarFallback className="text-xs">{solver.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{solver.name}</div>
                    <div className="text-xs text-gray-600">{solver.solved} solved</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Top Contest Winners */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Trophy className="w-5 h-5 text-purple-600" />
                <span>Contest Champions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topContestants.map((contestant, index) => (
                <div key={contestant.name} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={contestant.avatar} alt={contestant.name} />
                    <AvatarFallback className="text-xs">{contestant.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{contestant.name}</div>
                    <div className="text-xs text-gray-600">{contestant.wins} wins</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Top Learners */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>Top Learners</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topLearners.map((learner, index) => (
                <div key={learner.name} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={learner.avatar} alt={learner.name} />
                    <AvatarFallback className="text-xs">{learner.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{learner.name}</div>
                    <div className="text-xs text-gray-600">{learner.completed} lessons</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Monthly Champions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Star className="w-5 h-5 text-yellow-600" />
                <span>Monthly Champions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {monthlyChampions.map((champion, index) => (
                <div key={champion.month} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">{champion.month}</div>
                    <div className="text-xs text-gray-600">{champion.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-sm text-yellow-600">{champion.points}</div>
                    <div className="text-xs text-gray-600">XP</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Zap className="w-5 h-5 text-orange-600" />
                <span>Platform Stats</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Users</span>
                <span className="font-bold">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Problems Solved</span>
                <span className="font-bold">24,891</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Contests Held</span>
                <span className="font-bold">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Lessons Completed</span>
                <span className="font-bold">8,742</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
