'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Clock, Star, Search, BookOpen, CheckCircle, PlayCircle } from 'lucide-react';

const Lessons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');

  const tracks = [
    { id: 'all', name: 'All Tracks', color: 'gray' },
    { id: 'fundamentals', name: 'Fundamentals', color: 'blue' },
    { id: 'algorithms', name: 'Algorithms', color: 'green' },
    { id: 'data-structures', name: 'Data Structures', color: 'purple' },
    { id: 'system-design', name: 'System Design', color: 'orange' }
  ];

  const lessons = [
    {
      id: 1,
      title: 'Introduction to Arrays',
      track: 'fundamentals',
      duration: '45 min',
      difficulty: 'Beginner',
      completed: true,
      rating: 4.8,
      description: 'Learn the basics of arrays and how to manipulate them effectively.',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Dynamic Programming Fundamentals',
      track: 'algorithms',
      duration: '1h 20min',
      difficulty: 'Intermediate',
      completed: false,
      rating: 4.9,
      description: 'Master the art of dynamic programming with practical examples.',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Binary Trees Deep Dive',
      track: 'data-structures',
      duration: '1h 5min',
      difficulty: 'Intermediate',
      completed: false,
      rating: 4.7,
      description: 'Explore binary trees, traversals, and common algorithms.',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: 'Sorting Algorithms Explained',
      track: 'algorithms',
      duration: '55min',
      difficulty: 'Beginner',
      completed: true,
      rating: 4.6,
      description: 'Compare and understand different sorting algorithms.',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 5,
      title: 'Hash Tables and Hash Maps',
      track: 'data-structures',
      duration: '40min',
      difficulty: 'Beginner',
      completed: false,
      rating: 4.8,
      description: 'Learn about hash tables, collision resolution, and applications.',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 6,
      title: 'System Design Basics',
      track: 'system-design',
      duration: '1h 30min',
      difficulty: 'Advanced',
      completed: false,
      rating: 4.9,
      description: 'Introduction to designing scalable systems.',
      thumbnail: '/api/placeholder/300/200'
    }
  ];

  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTrack = selectedTrack === 'all' || lesson.track === selectedTrack;
    return matchesSearch && matchesTrack;
  });

  const getTrackColor = (trackId: string) => {
    const track = tracks.find(t => t.id === trackId);
    return track?.color || 'gray';
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Learning Lessons</h1>
        <p className="text-lg text-gray-600">Master programming concepts through structured lessons</p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search lessons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 max-w-md"
          />
        </div>

        {/* Track Filters */}
        <div className="flex flex-wrap gap-2">
          {tracks.map((track) => (
            <Button
              key={track.id}
              variant={selectedTrack === track.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTrack(track.id)}
              className={selectedTrack === track.id ? "bg-indigo-600 hover:bg-indigo-700" : ""}
            >
              {track.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => (
          <Card key={lesson.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <CardHeader className="pb-3">
              {/* Thumbnail */}
              <div className="relative mb-3 rounded-lg overflow-hidden bg-gray-200 h-40">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:scale-110 transition-transform" />
                </div>
                {lesson.completed && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle className="w-6 h-6 text-green-500 bg-white rounded-full" />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge 
                    variant="secondary" 
                    className={`bg-${getTrackColor(lesson.track)}-100 text-${getTrackColor(lesson.track)}-800`}
                  >
                    {tracks.find(t => t.id === lesson.track)?.name}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{lesson.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{lesson.title}</CardTitle>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{lesson.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{lesson.duration}</span>
                </div>
                <Badge variant="secondary" className={getDifficultyColor(lesson.difficulty)}>
                  {lesson.difficulty}
                </Badge>
              </div>

              {lesson.completed && (
                <div className="mb-4">
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-green-600 mt-1">Completed</p>
                </div>
              )}

              <Link href={`/lessons/${lesson.id}`}>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  {lesson.completed ? 'Review Lesson' : 'Start Lesson'}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredLessons.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No lessons found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Lessons;
