'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Heart, Filter, Code, TrendingUp, Clock } from 'lucide-react';

const Problems = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const difficulties = [
    { id: 'all', name: 'All Difficulties', color: 'gray' },
    { id: 'easy', name: 'Easy', color: 'green' },
    { id: 'medium', name: 'Medium', color: 'yellow' },
    { id: 'hard', name: 'Hard', color: 'red' }
  ];

  const tags = [
    'Array', 'String', 'Hash Table', 'Dynamic Programming', 'Math',
    'Sorting', 'Greedy', 'Depth-First Search', 'Binary Search', 'Tree',
    'Breadth-First Search', 'Two Pointers', 'Stack', 'Heap', 'Graph'
  ];

  const problems = [
    {
      id: 1,
      title: 'Two Sum',
      difficulty: 'easy',
      acceptance: 49.1,
      tags: ['Array', 'Hash Table'],
      solved: true,
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      companies: ['Google', 'Amazon', 'Microsoft']
    },
    {
      id: 2,
      title: 'Add Two Numbers',
      difficulty: 'medium',
      acceptance: 37.8,
      tags: ['Linked List', 'Math', 'Recursion'],
      solved: false,
      description: 'You are given two non-empty linked lists representing two non-negative integers.',
      companies: ['Amazon', 'Microsoft', 'Apple']
    },
    {
      id: 3,
      title: 'Longest Substring Without Repeating Characters',
      difficulty: 'medium',
      acceptance: 33.8,
      tags: ['Hash Table', 'String', 'Sliding Window'],
      solved: true,
      description: 'Given a string s, find the length of the longest substring without repeating characters.',
      companies: ['Amazon', 'Bloomberg', 'Yelp']
    },
    {
      id: 4,
      title: 'Median of Two Sorted Arrays',
      difficulty: 'hard',
      acceptance: 35.3,
      tags: ['Array', 'Binary Search', 'Divide and Conquer'],
      solved: false,
      description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
      companies: ['Google', 'Amazon', 'Microsoft']
    },
    {
      id: 5,
      title: 'Longest Palindromic Substring',
      difficulty: 'medium',
      acceptance: 32.5,
      tags: ['String', 'Dynamic Programming'],
      solved: false,
      description: 'Given a string s, return the longest palindromic substring in s.',
      companies: ['Amazon', 'Microsoft', 'Apple']
    },
    {
      id: 6,
      title: 'ZigZag Conversion',
      difficulty: 'medium',
      acceptance: 42.1,
      tags: ['String'],
      solved: false,
      description: 'The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows.',
      companies: ['Amazon', 'Apple']
    }
  ];

  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty;
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => problem.tags.includes(tag));
    return matchesSearch && matchesDifficulty && matchesTags;
  });

  const toggleFavorite = (problemId: number) => {
    setFavorites(prev => 
      prev.includes(problemId) 
        ? prev.filter(id => id !== problemId)
        : [...prev, problemId]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAcceptanceColor = (acceptance: number) => {
    if (acceptance >= 50) return 'text-green-600';
    if (acceptance >= 30) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Problem Bank</h1>
        <p className="text-lg text-gray-600">Sharpen your coding skills with our curated problem set</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">25</div>
            <div className="text-sm text-gray-600">Easy Solved</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">18</div>
            <div className="text-sm text-gray-600">Medium Solved</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">7</div>
            <div className="text-sm text-gray-600">Hard Solved</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-indigo-600">50</div>
            <div className="text-sm text-gray-600">Total Solved</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search problems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Difficulty Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Difficulty</label>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty.id}
                    variant={selectedDifficulty === difficulty.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDifficulty(difficulty.id)}
                    className={selectedDifficulty === difficulty.id ? "bg-indigo-600 hover:bg-indigo-700" : ""}
                  >
                    {difficulty.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Tags Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Tags</label>
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                {tags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleTag(tag)}
                    className={`text-xs ${selectedTags.includes(tag) ? "bg-indigo-600 hover:bg-indigo-700" : ""}`}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(selectedDifficulty !== 'all' || selectedTags.length > 0 || searchTerm) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedDifficulty('all');
                  setSelectedTags([]);
                  setSearchTerm('');
                }}
              >
                Clear All Filters
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Problems List */}
      <div className="space-y-4">
        {filteredProblems.map((problem) => (
          <Card key={problem.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Link 
                      href={`/problems/${problem.id}`}
                      className="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
                    >
                      {problem.id}. {problem.title}
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(problem.id)}
                      className="p-1"
                    >
                      <Heart 
                        className={`w-4 h-4 ${
                          favorites.includes(problem.id) 
                            ? 'text-red-500 fill-current' 
                            : 'text-gray-400'
                        }`} 
                      />
                    </Button>
                    {problem.solved && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Solved
                      </Badge>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{problem.description}</p>

                  <div className="flex items-center space-x-4">
                    <Badge className={getDifficultyColor(problem.difficulty)}>
                      {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                    </Badge>
                    
                    <div className="flex items-center space-x-1 text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span className={getAcceptanceColor(problem.acceptance)}>
                        {problem.acceptance}%
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {problem.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {problem.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{problem.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {problem.companies && (
                    <div className="mt-3 text-xs text-gray-500">
                      Companies: {problem.companies.join(', ')}
                    </div>
                  )}
                </div>

                <div className="ml-6">
                  <Link href={`/problems/${problem.id}`}>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                      <Code className="w-4 h-4 mr-2" />
                      Solve
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProblems.length === 0 && (
        <div className="text-center py-12">
          <Code className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No problems found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Problems;
