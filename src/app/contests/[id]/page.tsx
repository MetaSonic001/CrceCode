
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Clock, Users, Trophy, Calendar, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContestDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [isRegistered, setIsRegistered] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  // Mock contest data
  const contest = {
    id: id,
    title: 'Weekly Contest #45',
    description: 'Test your algorithmic skills in this weekly programming contest featuring 4 carefully crafted problems.',
    type: 'timed',
    startTime: '2024-02-01T14:00:00Z',
    endTime: '2024-02-01T16:00:00Z',
    duration: 120,
    registered: 156,
    maxParticipants: 200,
    status: 'upcoming',
    registrationEnd: '2024-02-01T13:30:00Z',
    problems: [
      { id: '1', title: 'Two Sum Variant', difficulty: 'easy', points: 100, solved: 0 },
      { id: '2', title: 'Binary Tree Path', difficulty: 'medium', points: 200, solved: 0 },
      { id: '3', title: 'Dynamic Programming', difficulty: 'medium', points: 250, solved: 0 },
      { id: '4', title: 'Graph Traversal', difficulty: 'hard', points: 300, solved: 0 }
    ],
    leaderboard: [
      { rank: 1, name: 'Alice Johnson', score: 850, solved: 4, penalty: 120 },
      { rank: 2, name: 'Bob Smith', score: 700, solved: 3, penalty: 90 },
      { rank: 3, name: 'Charlie Brown', score: 650, solved: 3, penalty: 110 }
    ],
    rules: [
      'Each problem has a fixed score based on difficulty',
      'Wrong submissions incur a 20-minute penalty',
      'Final score = Problem points - Penalty time',
      'Ties are broken by submission time',
      'Plagiarism will result in disqualification'
    ]
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const contestStart = new Date(contest.startTime).getTime();
      const contestEnd = new Date(contest.endTime).getTime();
      
      if (now < contestStart) {
        const distance = contestStart - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else if (now < contestEnd) {
        const distance = contestEnd - now;
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s remaining`);
      } else {
        setTimeLeft('Contest ended');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [contest.startTime, contest.endTime]);

  const handleRegister = () => {
    setIsRegistered(true);
    toast({
      title: "Registration Successful",
      description: "You have been registered for the contest!",
    });
  };

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
      case 'live': return 'bg-green-100 text-green-800';
      case 'ended': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{contest.title}</h1>
            <p className="text-lg text-gray-600">{contest.description}</p>
          </div>
          <Badge variant="outline" className={getStatusColor(contest.status)}>
            {contest.status}
          </Badge>
        </div>
      </div>

      {/* Contest Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Clock className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Duration</p>
                <p className="text-2xl font-bold">{contest.duration}m</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Participants</p>
                <p className="text-2xl font-bold">{contest.registered}/{contest.maxParticipants}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Trophy className="w-8 h-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Max Score</p>
                <p className="text-2xl font-bold">{contest.problems.reduce((sum, p) => sum + p.points, 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Time Left</p>
                <p className="text-lg font-bold">{timeLeft}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Registration/Progress Bar */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Registration Status</h3>
              <p className="text-gray-600">
                {contest.registered} out of {contest.maxParticipants} participants registered
              </p>
            </div>
            
            {!isRegistered ? (
              <Button onClick={handleRegister} disabled={contest.status !== 'upcoming'}>
                Register Now
              </Button>
            ) : (
              <Badge className="bg-green-100 text-green-800">Registered</Badge>
            )}
          </div>
          
          <Progress 
            value={(contest.registered / contest.maxParticipants) * 100} 
            className="w-full"
          />
        </CardContent>
      </Card>

      <Tabs defaultValue="problems" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="problems">Problems</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="rules">Rules</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>

        <TabsContent value="problems" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Contest Problems</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Problem</TableHead>
                    <TableHead>Difficulty</TableHead>
                    <TableHead>Points</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contest.problems.map((problem, index) => (
                    <TableRow key={problem.id}>
                      <TableCell className="font-medium">
                        <div>
                          <div className="font-semibold">{String.fromCharCode(65 + index)}. {problem.title}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getDifficultyColor(problem.difficulty)}>
                          {problem.difficulty}
                        </Badge>
                      </TableCell>
                      <TableCell>{problem.points}</TableCell>
                      <TableCell>
                        {problem.solved > 0 ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-400" />
                        )}
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="outline" 
                          size="sm"
                          disabled={contest.status === 'upcoming'}
                          onClick={() => router.push(`/problems/${problem.id}`)}
                        >
                          {contest.status === 'upcoming' ? 'Locked' : 'Solve'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leaderboard" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Live Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Participant</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Problems Solved</TableHead>
                    <TableHead>Penalty (min)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contest.leaderboard.map((participant) => (
                    <TableRow key={participant.rank}>
                      <TableCell>
                        <div className="flex items-center">
                          {participant.rank <= 3 && (
                            <Trophy className={`w-4 h-4 mr-2 ${
                              participant.rank === 1 ? 'text-yellow-500' :
                              participant.rank === 2 ? 'text-gray-400' :
                              'text-orange-500'
                            }`} />
                          )}
                          {participant.rank}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{participant.name}</TableCell>
                      <TableCell>{participant.score}</TableCell>
                      <TableCell>{participant.solved}</TableCell>
                      <TableCell>{participant.penalty}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Contest Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contest.rules.map((rule, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{rule}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="announcements" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Contest Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                No announcements yet. Check back during the contest for updates.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContestDetail;
