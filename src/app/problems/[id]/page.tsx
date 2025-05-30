'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, Play, Send, Heart, ThumbsUp, MessageSquare, Clock } from 'lucide-react';

const ProblemDetail = () => {
  const { id } = useParams();
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState(`function twoSum(nums, target) {
    // Write your solution here
    
}`);
  const [testResults, setTestResults] = useState<any[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  // Mock problem data
  const problem = {
    id: 1,
    title: 'Two Sum',
    difficulty: 'easy',
    acceptance: 49.1,
    tags: ['Array', 'Hash Table'],
    companies: ['Google', 'Amazon', 'Microsoft'],
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
      },
      {
        input: 'nums = [3,3], target = 6',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 6, we return [0, 1].'
      }
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.'
    ]
  };

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
    { value: 'c', label: 'C' }
  ];

  const submissions = [
    {
      id: 1,
      status: 'Accepted',
      runtime: '68 ms',
      memory: '44.8 MB',
      language: 'JavaScript',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      status: 'Wrong Answer',
      runtime: 'N/A',
      memory: 'N/A',
      language: 'JavaScript',
      timestamp: '3 hours ago'
    },
    {
      id: 3,
      status: 'Time Limit Exceeded',
      runtime: 'N/A',
      memory: 'N/A',
      language: 'Python',
      timestamp: '1 day ago'
    }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Easy O(n) solution with HashMap',
      author: 'coder123',
      votes: 245,
      replies: 23,
      timestamp: '2 days ago',
      preview: 'Here\'s a simple approach using a hash map to store the complement...'
    },
    {
      id: 2,
      title: 'Brute Force vs Optimized approach comparison',
      author: 'algomaster',
      votes: 156,
      replies: 18,
      timestamp: '3 days ago',
      preview: 'Let me explain the difference between O(n²) and O(n) solutions...'
    }
  ];

  const handleRun = () => {
    setIsRunning(true);
    // Simulate API call
    setTimeout(() => {
      setTestResults([
        { input: '[2,7,11,15], 9', expected: '[0,1]', output: '[0,1]', status: 'Passed' },
        { input: '[3,2,4], 6', expected: '[1,2]', output: '[1,2]', status: 'Passed' },
        { input: '[3,3], 6', expected: '[0,1]', output: '[0,1]', status: 'Passed' }
      ]);
      setIsRunning(false);
    }, 2000);
  };

  const handleSubmit = () => {
    // Handle submission logic
    console.log('Submitting solution...');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Accepted':
      case 'Passed':
        return 'text-green-600 bg-green-100';
      case 'Wrong Answer':
      case 'Failed':
        return 'text-red-600 bg-red-100';
      case 'Time Limit Exceeded':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-full mx-auto h-screen flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/problems" className="flex items-center text-sm text-gray-600 hover:text-indigo-600">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Problems
          </Link>
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-bold">{problem.id}. {problem.title}</h1>
            <Badge className={getDifficultyColor(problem.difficulty)}>
              {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
            </Badge>
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Panel - Problem Description */}
        <div className="w-1/2 border-r border-gray-200 overflow-y-auto">
          <div className="p-6">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
                <TabsTrigger value="submissions">Submissions</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6 space-y-6">
                {/* Problem Description */}
                <div>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{problem.description}</p>
                </div>

                {/* Examples */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Examples</h3>
                  {problem.examples.map((example, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 className="font-medium mb-2">Example {index + 1}:</h4>
                      <div className="space-y-2 text-sm font-mono">
                        <div><strong>Input:</strong> {example.input}</div>
                        <div><strong>Output:</strong> {example.output}</div>
                        <div><strong>Explanation:</strong> {example.explanation}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Constraints */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Constraints</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {problem.constraints.map((constraint, index) => (
                      <li key={index} className="font-mono">• {constraint}</li>
                    ))}
                  </ul>
                </div>

                {/* Tags and Companies */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {problem.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Companies</h4>
                    <div className="text-sm text-gray-600">
                      {problem.companies.join(', ')}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="discussion" className="mt-6">
                <div className="space-y-4">
                  {discussions.map((discussion) => (
                    <Card key={discussion.id} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-1">{discussion.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">{discussion.preview}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>by {discussion.author}</span>
                              <span>{discussion.timestamp}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="w-3 h-3" />
                              <span>{discussion.votes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageSquare className="w-3 h-3" />
                              <span>{discussion.replies}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="submissions" className="mt-6">
                <div className="space-y-3">
                  {submissions.map((submission) => (
                    <Card key={submission.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Badge className={getStatusColor(submission.status)}>
                              {submission.status}
                            </Badge>
                            <span className="text-sm text-gray-600">{submission.language}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            {submission.runtime !== 'N/A' && (
                              <>
                                <span>Runtime: {submission.runtime}</span>
                                <span>Memory: {submission.memory}</span>
                              </>
                            )}
                            <span className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{submission.timestamp}</span>
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Right Panel - Code Editor */}
        <div className="w-1/2 flex flex-col">
          {/* Code Editor */}
          <div className="flex-1 p-4">
            <div className="h-full border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center justify-between">
                <span className="text-sm font-medium">Code Editor</span>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRun}
                    disabled={isRunning}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {isRunning ? 'Running...' : 'Run'}
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleSubmit}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit
                  </Button>
                </div>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full p-4 font-mono text-sm resize-none focus:outline-none"
                placeholder="Write your solution here..."
              />
            </div>
          </div>

          {/* Test Results */}
          {testResults.length > 0 && (
            <div className="border-t border-gray-200 p-4 max-h-60 overflow-y-auto">
              <h3 className="font-medium mb-3">Test Results</h3>
              <div className="space-y-2">
                {testResults.map((result, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Test Case {index + 1}</span>
                      <Badge className={getStatusColor(result.status)}>
                        {result.status}
                      </Badge>
                    </div>
                    <div className="text-xs font-mono space-y-1">
                      <div><strong>Input:</strong> {result.input}</div>
                      <div><strong>Expected:</strong> {result.expected}</div>
                      <div><strong>Output:</strong> {result.output}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;
