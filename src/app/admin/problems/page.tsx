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
import { Plus, Edit, Trash2, Play, Filter, Search, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProblemManagement = () => {
  const [problems, setProblems] = useState([
    {
      id: '1',
      title: 'Two Sum',
      source: 'leetcode',
      difficulty: 'easy',
      tags: ['array', 'hash-table'],
      solveCount: 1234,
      status: 'active',
      sourceUrl: 'https://leetcode.com/problems/two-sum'
    },
    {
      id: '2',
      title: 'Binary Search',
      source: 'custom',
      difficulty: 'medium',
      tags: ['binary-search', 'array'],
      solveCount: 567,
      status: 'active'
    }
  ]);

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingProblem, setEditingProblem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [filterSource, setFilterSource] = useState('all');

  const { toast } = useToast();

  const [newProblem, setNewProblem] = useState({
    title: '',
    slug: '',
    description: '',
    difficulty: 'easy',
    tags: [],
    source: 'custom',
    sourceUrl: '',
    constraints: '',
    examples: [],
    testCases: [],
    starterCode: {
      python: 'def solution():\n    pass',
      javascript: 'function solution() {\n    // Your code here\n}',
      java: 'public class Solution {\n    public void solution() {\n        // Your code here\n    }\n}'
    }
  });

  const handleCreateProblem = () => {
    const problem = {
      id: Date.now().toString(),
      ...newProblem,
      solveCount: 0,
      status: 'active'
    };
    
    setProblems([...problems, problem]);
    setIsCreateOpen(false);
    setNewProblem({
      title: '',
      slug: '',
      description: '',
      difficulty: 'easy',
      tags: [],
      source: 'custom',
      sourceUrl: '',
      constraints: '',
      examples: [],
      testCases: [],
      starterCode: {
        python: 'def solution():\n    pass',
        javascript: 'function solution() {\n    // Your code here\n}',
        java: 'public class Solution {\n    public void solution() {\n        // Your code here\n    }\n}'
      }
    });
    
    toast({
      title: "Problem Created",
      description: `Problem "${problem.title}" has been created successfully.`,
    });
  };

  const handleDeleteProblem = (id) => {
    setProblems(problems.filter(p => p.id !== id));
    toast({
      title: "Problem Deleted",
      description: "Problem has been deleted successfully.",
    });
  };

  const handleArchiveProblem = (id) => {
    setProblems(problems.map(p => 
      p.id === id ? { ...p, status: p.status === 'active' ? 'archived' : 'active' } : p
    ));
  };

  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         problem.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDifficulty = filterDifficulty === 'all' || problem.difficulty === filterDifficulty;
    const matchesSource = filterSource === 'all' || problem.source === filterSource;
    
    return matchesSearch && matchesDifficulty && matchesSource;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSourceColor = (source) => {
    switch (source) {
      case 'leetcode': return 'bg-orange-100 text-orange-800';
      case 'hackerrank': return 'bg-green-100 text-green-800';
      case 'custom': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Problem Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Create and manage coding problems</p>
        </div>
        
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Problem
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Problem</DialogTitle>
            </DialogHeader>
            
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="examples">Examples</TabsTrigger>
                <TabsTrigger value="testcases">Test Cases</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={newProblem.title}
                      onChange={(e) => setNewProblem({...newProblem, title: e.target.value})}
                      placeholder="Problem title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      value={newProblem.slug}
                      onChange={(e) => setNewProblem({...newProblem, slug: e.target.value})}
                      placeholder="problem-slug"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="difficulty">Difficulty</Label>
                    <Select value={newProblem.difficulty} onValueChange={(value) => setNewProblem({...newProblem, difficulty: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="source">Source</Label>
                    <Select value={newProblem.source} onValueChange={(value) => setNewProblem({...newProblem, source: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="custom">Custom</SelectItem>
                        <SelectItem value="leetcode">LeetCode</SelectItem>
                        <SelectItem value="hackerrank">HackerRank</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="sourceUrl">Source URL</Label>
                    <Input
                      id="sourceUrl"
                      value={newProblem.sourceUrl}
                      onChange={(e) => setNewProblem({...newProblem, sourceUrl: e.target.value})}
                      placeholder="https://..."
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input
                    id="tags"
                    value={newProblem.tags.join(', ')}
                    onChange={(e) => setNewProblem({...newProblem, tags: e.target.value.split(',').map(tag => tag.trim())})}
                    placeholder="array, hash-table, two-pointers"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="content" className="space-y-4">
                <div>
                  <Label htmlFor="description">Problem Description</Label>
                  <Textarea
                    id="description"
                    value={newProblem.description}
                    onChange={(e) => setNewProblem({...newProblem, description: e.target.value})}
                    placeholder="Describe the problem..."
                    rows={8}
                  />
                </div>
                
                <div>
                  <Label htmlFor="constraints">Constraints</Label>
                  <Textarea
                    id="constraints"
                    value={newProblem.constraints}
                    onChange={(e) => setNewProblem({...newProblem, constraints: e.target.value})}
                    placeholder="1 <= n <= 10^4..."
                    rows={4}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="examples">
                <div className="text-center py-8 text-gray-500">
                  Examples editor will be implemented with dynamic input/output pairs
                </div>
              </TabsContent>
              
              <TabsContent value="testcases">
                <div className="text-center py-8 text-gray-500">
                  Test cases editor will be implemented with input/output validation
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateProblem}>
                Create Problem
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search problems..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={filterSource} onValueChange={setFilterSource}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
                <SelectItem value="leetcode">LeetCode</SelectItem>
                <SelectItem value="hackerrank">HackerRank</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Problems Table */}
      <Card>
        <CardHeader>
          <CardTitle>Problems ({filteredProblems.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead>Solves</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProblems.map((problem) => (
                <TableRow key={problem.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      <span>{problem.title}</span>
                      {problem.sourceUrl && (
                        <a href={problem.sourceUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                        </a>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getSourceColor(problem.source)}>
                      {problem.source}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getDifficultyColor(problem.difficulty)}>
                      {problem.difficulty}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {problem.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {problem.tags.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{problem.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{problem.solveCount}</TableCell>
                  <TableCell>
                    <Badge variant={problem.status === 'active' ? 'default' : 'secondary'}>
                      {problem.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleArchiveProblem(problem.id)}
                      >
                        {problem.status === 'active' ? 'Archive' : 'Activate'}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleDeleteProblem(problem.id)}
                        className="text-red-600 hover:text-red-800"
                      >
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

export default ProblemManagement;
