'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Eye, 
  MoreHorizontal,
  BookOpen,
  Clock,
  Users,
  Calendar,
  FileText
} from 'lucide-react';

const LessonManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const lessons = [
    {
      id: '1',
      title: 'Introduction to Arrays',
      track: 'DSA',
      timeEstimate: '45 min',
      status: 'Published',
      completions: 156,
      lastEdited: '2 days ago',
      author: 'Dr. Sarah Wilson'
    },
    {
      id: '2',
      title: 'Binary Trees Fundamentals',
      track: 'DSA',
      timeEstimate: '60 min',
      status: 'Published',
      completions: 89,
      lastEdited: '1 week ago',
      author: 'Prof. John Smith'
    },
    {
      id: '3',
      title: 'System Design Basics',
      track: 'Design Thinking',
      timeEstimate: '90 min',
      status: 'Draft',
      completions: 0,
      lastEdited: '3 hours ago',
      author: 'Dr. Sarah Wilson'
    },
    {
      id: '4',
      title: 'Graph Algorithms',
      track: 'DSA',
      timeEstimate: '75 min',
      status: 'Published',
      completions: 234,
      lastEdited: '5 days ago',
      author: 'Prof. Mike Chen'
    }
  ];

  const filteredLessons = lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lesson.track.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTrackColor = (track: string) => {
    switch (track) {
      case 'DSA': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'Design Thinking': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'Draft': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Lesson Management</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Create and manage learning content</p>
          </div>
          <Button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700">
            <Plus className="w-4 h-4" />
            <span>Create Lesson</span>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Lessons</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="w-8 h-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Published</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">18</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Completions</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">1,247</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="w-8 h-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Duration</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">67m</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search lessons by title or track..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>Track</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>Status</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>Author</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lessons Table */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">All Lessons ({filteredLessons.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Track</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Completions</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Last Edited</TableHead>
                  <TableHead className="w-20">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLessons.map((lesson) => (
                  <TableRow key={lesson.id}>
                    <TableCell>
                      <div className="font-medium text-gray-900 dark:text-white">{lesson.title}</div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getTrackColor(lesson.track)}>
                        {lesson.track}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-300">{lesson.timeEstimate}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(lesson.status)}>
                        {lesson.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-300">{lesson.completions}</TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-300">{lesson.author}</TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-300">{lesson.lastEdited}</TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="ghost">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <MoreHorizontal className="w-4 h-4" />
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
    </div>
  );
};

export default LessonManagement;
