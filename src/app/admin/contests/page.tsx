'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash2, Play, Pause, StopCircle, Users, Calendar, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContestManagement = () => {
  const [contests, setContests] = useState([
    {
      id: '1',
      title: 'Weekly Contest #45',
      type: 'timed',
      startTime: '2024-02-01T14:00:00Z',
      duration: 120,
      registered: 156,
      maxParticipants: 200,
      status: 'upcoming',
      problemCount: 4
    },
    {
      id: '2',
      title: 'DSA Championship',
      type: 'timed',
      startTime: '2024-01-28T10:00:00Z',
      duration: 180,
      registered: 89,
      maxParticipants: 100,
      status: 'live',
      problemCount: 5
    }
  ]);

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newContest, setNewContest] = useState({
    title: '',
    description: '',
    type: 'timed',
    startTime: '',
    duration: 120,
    registrationStart: '',
    registrationEnd: '',
    maxParticipants: 100,
    problems: []
  });

  const { toast } = useToast();

  const handleCreateContest = () => {
    const contest = {
      id: Date.now().toString(),
      ...newContest,
      registered: 0,
      status: 'upcoming',
      problemCount: newContest.problems.length
    };
    
    setContests([...contests, contest]);
    setIsCreateOpen(false);
    setNewContest({
      title: '',
      description: '',
      type: 'timed',
      startTime: '',
      duration: 120,
      registrationStart: '',
      registrationEnd: '',
      maxParticipants: 100,
      problems: []
    });
    
    toast({
      title: "Contest Created",
      description: `Contest "${contest.title}" has been created successfully.`,
    });
  };

  const handleContestAction = (id, action) => {
    setContests(contests.map(contest => {
      if (contest.id === id) {
        switch (action) {
          case 'start':
            return { ...contest, status: 'live' };
          case 'pause':
            return { ...contest, status: 'paused' };
          case 'stop':
            return { ...contest, status: 'ended' };
          default:
            return contest;
        }
      }
      return contest;
    }));
    
    toast({
      title: "Contest Updated",
      description: `Contest has been ${action}ed successfully.`,
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'live': return 'bg-green-100 text-green-800';
      case 'ended': return 'bg-gray-100 text-gray-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contest Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Create and manage programming contests</p>
        </div>
        
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Contest
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Contest</DialogTitle>
            </DialogHeader>
            
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="problems">Problems</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="space-y-4">
                <div>
                  <Label htmlFor="title">Contest Title</Label>
                  <Input
                    id="title"
                    value={newContest.title}
                    onChange={(e) => setNewContest({...newContest, title: e.target.value})}
                    placeholder="Weekly Contest #46"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newContest.description}
                    onChange={(e) => setNewContest({...newContest, description: e.target.value})}
                    placeholder="Contest description..."
                    rows={4}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="type">Contest Type</Label>
                    <Select value={newContest.type} onValueChange={(value) => setNewContest({...newContest, type: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="timed">Timed Contest</SelectItem>
                        <SelectItem value="open">Open Contest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Input
                      id="duration"
                      type="number"
                      value={newContest.duration}
                      onChange={(e) => setNewContest({...newContest, duration: parseInt(e.target.value)})}
                      placeholder="120"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="schedule" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startTime">Start Time</Label>
                    <Input
                      id="startTime"
                      type="datetime-local"
                      value={newContest.startTime}
                      onChange={(e) => setNewContest({...newContest, startTime: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="maxParticipants">Max Participants</Label>
                    <Input
                      id="maxParticipants"
                      type="number"
                      value={newContest.maxParticipants}
                      onChange={(e) => setNewContest({...newContest, maxParticipants: parseInt(e.target.value)})}
                      placeholder="100"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="registrationStart">Registration Start</Label>
                    <Input
                      id="registrationStart"
                      type="datetime-local"
                      value={newContest.registrationStart}
                      onChange={(e) => setNewContest({...newContest, registrationStart: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="registrationEnd">Registration End</Label>
                    <Input
                      id="registrationEnd"
                      type="datetime-local"
                      value={newContest.registrationEnd}
                      onChange={(e) => setNewContest({...newContest, registrationEnd: e.target.value})}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="problems">
                <div className="text-center py-8 text-gray-500">
                  Problem selector with drag-and-drop interface will be implemented
                </div>
              </TabsContent>
              
              <TabsContent value="settings">
                <div className="text-center py-8 text-gray-500">
                  Scoring rules and advanced settings will be implemented
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateContest}>
                Create Contest
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Contest Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Upcoming</p>
                <p className="text-2xl font-bold">{contests.filter(c => c.status === 'upcoming').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Play className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Live</p>
                <p className="text-2xl font-bold">{contests.filter(c => c.status === 'live').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Participants</p>
                <p className="text-2xl font-bold">{contests.reduce((sum, c) => sum + c.registered, 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Clock className="w-8 h-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Duration</p>
                <p className="text-2xl font-bold">{Math.round(contests.reduce((sum, c) => sum + c.duration, 0) / contests.length)}m</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contests Table */}
      <Card>
        <CardHeader>
          <CardTitle>Contests ({contests.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Participants</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contests.map((contest) => (
                <TableRow key={contest.id}>
                  <TableCell className="font-medium">{contest.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {contest.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDateTime(contest.startTime)}</TableCell>
                  <TableCell>{contest.duration}m</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{contest.registered}/{contest.maxParticipants}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(contest.status)}>
                      {contest.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {contest.status === 'upcoming' && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleContestAction(contest.id, 'start')}
                        >
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                      {contest.status === 'live' && (
                        <>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleContestAction(contest.id, 'pause')}
                          >
                            <Pause className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleContestAction(contest.id, 'stop')}
                          >
                            <StopCircle className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContestManagement;
