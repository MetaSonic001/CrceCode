'use client'
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, Code, Trophy, Star, BookOpen, TrendingUp, Award, Target } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userProfile = {
    name: 'Alex Johnson',
    username: 'alexj_coder',
    email: 'alex.johnson@college.edu',
    avatar: '/api/placeholder/150/150',
    department: 'Computer Science Engineering',
    year: '3rd Year',
    joinDate: 'September 2023',
    bio: 'Passionate about algorithms and competitive programming. Love solving complex problems and learning new technologies.',
    location: 'Mumbai, India',
    rating: 1547,
    rank: 89,
    totalPoints: 15420,
    stats: {
      problemsSolved: 234,
      lessonsCompleted: 45,
      contestsParticipated: 12,
      badges: 8,
      streakDays: 15,
      totalSubmissions: 456
    }
  };

  const badges = [
    { name: 'Problem Solver', description: 'Solved 100+ problems', icon: '🎯', earned: true },
    { name: 'Contest Winner', description: 'Won a contest', icon: '🏆', earned: true },
    { name: 'Streak Master', description: '30-day solving streak', icon: '🔥', earned: false },
    { name: 'Algorithm Expert', description: 'Mastered all algorithm categories', icon: '🧠', earned: true },
    { name: 'Speed Demon', description: 'Solved 10 problems in 1 hour', icon: '⚡', earned: false },
    { name: 'Helper', description: 'Helped 50+ students', icon: '🤝', earned: true },
    { name: 'Perfectionist', description: '100% accuracy in 10 contests', icon: '💎', earned: false },
    { name: 'Marathon Runner', description: 'Participated in 20+ contests', icon: '🏃', earned: false }
  ];

  const solvedProblems = [
    { title: 'Two Sum', difficulty: 'Easy', solvedAt: '2 hours ago', language: 'JavaScript' },
    { title: 'Add Two Numbers', difficulty: 'Medium', solvedAt: '1 day ago', language: 'Python' },
    { title: 'Longest Substring', difficulty: 'Medium', solvedAt: '2 days ago', language: 'JavaScript' },
    { title: 'Valid Parentheses', difficulty: 'Easy', solvedAt: '3 days ago', language: 'Java' },
    { title: 'Merge Intervals', difficulty: 'Medium', solvedAt: '4 days ago', language: 'Python' },
    { title: 'Binary Tree Inorder', difficulty: 'Medium', solvedAt: '5 days ago', language: 'C++' },
    { title: 'Maximum Subarray', difficulty: 'Easy', solvedAt: '6 days ago', language: 'JavaScript' },
    { title: 'Climbing Stairs', difficulty: 'Easy', solvedAt: '1 week ago', language: 'Python' }
  ];

  const recentActivity = [
    { type: 'problem', title: 'Solved "Two Sum"', time: '2 hours ago', points: 10 },
    { type: 'lesson', title: 'Completed "Dynamic Programming Basics"', time: '1 day ago', points: 50 },
    { type: 'badge', title: 'Earned "Algorithm Expert" badge', time: '2 days ago', points: 100 },
    { type: 'contest', title: 'Participated in Weekly Contest #47', time: '1 week ago', points: 150 },
    { type: 'problem', title: 'Solved "Longest Substring"', time: '2 weeks ago', points: 25 }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'problem': return <Code className="w-4 h-4 text-green-600" />;
      case 'lesson': return <BookOpen className="w-4 h-4 text-indigo-600" />;
      case 'contest': return <Trophy className="w-4 h-4 text-purple-600" />;
      case 'badge': return <Award className="w-4 h-4 text-yellow-600" />;
      default: return <Star className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <Card className="mb-8 shadow-lg">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <Avatar className="w-32 h-32">
              <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
              <AvatarFallback className="text-3xl">{userProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{userProfile.name}</h1>
              <p className="text-lg text-gray-600 mb-1">@{userProfile.username}</p>
              <p className="text-gray-600 mb-4">{userProfile.department} • {userProfile.year}</p>
              <p className="text-gray-700 mb-4 max-w-2xl">{userProfile.bio}</p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {userProfile.joinDate}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Target className="w-4 h-4" />
                  <span>{userProfile.location}</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="bg-indigo-600 hover:bg-indigo-700 mb-4">
                Edit Profile
              </Button>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-indigo-600">{userProfile.rating}</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">#{userProfile.rank}</div>
                  <div className="text-sm text-gray-600">Rank</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <Code className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">{userProfile.stats.problemsSolved}</div>
            <div className="text-xs text-gray-600">Problems</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <BookOpen className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">{userProfile.stats.lessonsCompleted}</div>
            <div className="text-xs text-gray-600">Lessons</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">{userProfile.stats.contestsParticipated}</div>
            <div className="text-xs text-gray-600">Contests</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Award className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">{userProfile.stats.badges}</div>
            <div className="text-xs text-gray-600">Badges</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">{userProfile.stats.streakDays}</div>
            <div className="text-xs text-gray-600">Day Streak</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="w-6 h-6 text-red-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">{userProfile.totalPoints}</div>
            <div className="text-xs text-gray-600">Total XP</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Section */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="solved">Solved</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Progress Charts */}
            <Card>
              <CardHeader>
                <CardTitle>Problem Solving Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Easy Problems</span>
                    <span>85/120</span>
                  </div>
                  <Progress value={71} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Medium Problems</span>
                    <span>125/200</span>
                  </div>
                  <Progress value={63} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Hard Problems</span>
                    <span>24/80</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Learning Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Fundamentals</span>
                    <span>12/15</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Algorithms</span>
                    <span>18/25</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Data Structures</span>
                    <span>15/20</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="badges" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {badges.map((badge, index) => (
              <Card key={index} className={`${badge.earned ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200' : 'bg-gray-50 opacity-60'}`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{badge.icon}</div>
                  <h3 className={`font-semibold mb-2 ${badge.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                    {badge.name}
                  </h3>
                  <p className={`text-sm ${badge.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                    {badge.description}
                  </p>
                  {badge.earned && (
                    <Badge className="mt-3 bg-yellow-100 text-yellow-800">Earned</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="solved" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recently Solved Problems</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {solvedProblems.map((problem, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Code className="w-5 h-5 text-green-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">{problem.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={getDifficultyColor(problem.difficulty)}>
                            {problem.difficulty}
                          </Badge>
                          <span className="text-sm text-gray-600">{problem.language}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{problem.solvedAt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">{activity.time}</span>
                        <Badge variant="secondary" className="text-xs">+{activity.points} XP</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
