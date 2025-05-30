'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, Users, Trophy, Search, Filter } from 'lucide-react';

const Contests = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  const contests = [
    {
      id: '1',
      title: 'Weekly Contest #45',
      description: 'Test your algorithmic skills in this weekly programming contest featuring 4 carefully crafted problems.',
      type: 'weekly',
      difficulty: 'medium',
      startTime: '2024-02-01T14:00:00Z',
      duration: 120,
      participants: 156,
      maxParticipants: 200,
      status: 'upcoming',
      prize: 'Certificates & Badges',
      problems: 4,
      image: '/api/placeholder/400/200'
    },
    {
      id: '2',
      title: 'DSA Championship',
      description: 'Annual championship testing advanced data structures and algorithms knowledge.',
      type: 'championship',
      difficulty: 'hard',
      startTime: '2024-01-28T10:00:00Z',
      duration: 180,
      participants: 89,
      maxParticipants: 100,
      status: 'live',
      prize: '₹10,000 Prize Pool',
      problems: 5,
      image: '/api/placeholder/400/200'
    },
    {
      id: '3',
      title: 'Speed Coding Challenge',
      description: 'Fast-paced contest focusing on quick problem solving and implementation speed.',
      type: 'speed',
      difficulty: 'easy',
      startTime: '2024-01-25T16:00:00Z',
      duration: 60,
      participants: 203,
      maxParticipants: 250,
      status: 'ended',
      prize: 'XP Bonuses',
      problems: 3,
      image: '/api/placeholder/400/200'
    },
    {
      id: '4',
      title: 'Algorithm Masters',
      description: 'Advanced algorithmic challenges for experienced competitive programmers.',
      type: 'advanced',
      difficulty: 'hard',
      startTime: '2024-02-05T13:00:00Z',
      duration: 240,
      participants: 45,
      maxParticipants: 80,
      status: 'upcoming',
      prize: 'Internship Opportunities',
      problems: 6,
      image: '/api/placeholder/400/200'
    }
  ];

  const filteredContests = contests.filter(contest => {
    const matchesSearch = contest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         contest.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || contest.status === filterStatus;
    const matchesDifficulty = filterDifficulty === 'all' || contest.difficulty === filterDifficulty;
    
    return matchesSearch && matchesStatus && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'live': return 'bg-green-100 text-green-800 animate-pulse';
      case 'ended': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const getTimeUntilStart = (startTime) => {
    const now = new Date();
    const start = new Date(startTime);
    const diff = start - now;
    
    if (diff <= 0) return 'Started';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  const upcomingContests = filteredContests.filter(c => c.status === 'upcoming');
  const liveContests = filteredContests.filter(c => c.status === 'live');
  const pastContests = filteredContests.filter(c => c.status === 'ended');

  const ContestCard = ({ contest }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{contest.title}</CardTitle>
            <p className="text-gray-600 text-sm line-clamp-2">{contest.description}</p>
          </div>
          <Badge variant="outline" className={getStatusColor(contest.status)}>
            {contest.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span>{formatDateTime(contest.startTime)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span>{contest.duration} minutes</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gray-400" />
            <span>{contest.participants}/{contest.maxParticipants}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-gray-400" />
            <span>{contest.problems} problems</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className={getDifficultyColor(contest.difficulty)}>
              {contest.difficulty}
            </Badge>
            <span className="text-sm text-gray-600">{contest.prize}</span>
          </div>
          
          {contest.status === 'upcoming' && (
            <span className="text-sm font-medium text-blue-600">
              Starts in {getTimeUntilStart(contest.startTime)}
            </span>
          )}
        </div>
        
        <div className="flex space-x-2">
          <Button asChild className="flex-1">
            <Link href={`/contests/${contest.id}`}>
              View Details
            </Link>
          </Button>
          
          {contest.status === 'upcoming' && (
            <Button asChild variant="outline">
              <Link href={`/contests/${contest.id}/register`}>
                Register Now
              </Link>
            </Button>
          )}
          
          {contest.status === 'live' && (
            <Button asChild variant="default" className="bg-green-600 hover:bg-green-700">
              <Link href={`/contests/${contest.id}`}>
                Join Now
              </Link>
            </Button>
          )}
          
          {contest.status === 'ended' && (
            <Button asChild variant="outline">
              <Link href={`/contests/${contest.id}`}>
                View Results
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Programming Contests</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Participate in exciting programming contests to test your skills, compete with peers, and win amazing prizes!
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{upcomingContests.length}</div>
            <div className="text-sm text-gray-600">Upcoming Contests</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{liveContests.length}</div>
            <div className="text-sm text-gray-600">Live Contests</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {contests.reduce((sum, c) => sum + c.participants, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Participants</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{pastContests.length}</div>
            <div className="text-sm text-gray-600">Completed Contests</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search contests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="live">Live</SelectItem>
                <SelectItem value="ended">Ended</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Live Contests Banner */}
      {liveContests.length > 0 && (
        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">🔴 Live Contests</h2>
            <p className="mb-4">Join ongoing contests now!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {liveContests.map(contest => (
                <div key={contest.id} className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-bold">{contest.title}</h3>
                  <p className="text-sm opacity-90 mb-2">{contest.participants} participants</p>
                  <Button asChild size="sm" className="bg-white text-green-600 hover:bg-gray-100">
                    <Link href={`/contests/${contest.id}`}>
                      Join Contest
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contest Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Contests ({filteredContests.length})</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming ({upcomingContests.length})</TabsTrigger>
          <TabsTrigger value="live">Live ({liveContests.length})</TabsTrigger>
          <TabsTrigger value="past">Past ({pastContests.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContests.map(contest => (
              <ContestCard key={contest.id} contest={contest} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingContests.map(contest => (
              <ContestCard key={contest.id} contest={contest} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="live" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveContests.map(contest => (
              <ContestCard key={contest.id} contest={contest} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastContests.map(contest => (
              <ContestCard key={contest.id} contest={contest} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Contests;
