'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Clock, Star, CheckCircle, Play, BookOpen, Users, MessageSquare } from 'lucide-react';

const LessonDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('content');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [progress, setProgress] = useState(65);
  const [showQuiz, setShowQuiz] = useState(false);

  // Mock lesson data
  const lesson = {
    id: 1,
    title: 'Dynamic Programming Fundamentals',
    track: 'Algorithms',
    duration: '1h 20min',
    difficulty: 'Intermediate',
    rating: 4.9,
    students: 1234,
    description: 'Master the art of dynamic programming with practical examples and real-world applications.',
    tags: ['Algorithms', 'Dynamic Programming', 'Optimization', 'Problem Solving'],
    videoUrl: '/api/placeholder/800/450',
    content: `
# Dynamic Programming Fundamentals

Dynamic Programming (DP) is a powerful algorithmic technique for solving optimization problems by breaking them down into simpler subproblems.

## Key Concepts

### 1. Overlapping Subproblems
When a problem can be broken down into subproblems that are reused several times.

### 2. Optimal Substructure
An optimal solution to the problem contains optimal solutions to subproblems.

## Common Patterns

### Fibonacci Sequence
\`\`\`python
def fibonacci(n):
    if n <= 1:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]
\`\`\`

### Coin Change Problem
\`\`\`python
def coinChange(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1
\`\`\`

## Practice Problems
1. Climbing Stairs
2. House Robber
3. Longest Common Subsequence
4. Edit Distance
    `
  };

  const quizQuestions = [
    {
      question: "What are the two key properties of dynamic programming?",
      options: [
        "Recursion and Iteration",
        "Overlapping Subproblems and Optimal Substructure",
        "Time Complexity and Space Complexity",
        "Top-down and Bottom-up"
      ],
      correct: 1
    },
    {
      question: "In the Fibonacci sequence using DP, what is the time complexity?",
      options: ["O(2^n)", "O(n^2)", "O(n)", "O(log n)"],
      correct: 2
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleQuizSubmit = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleMarkComplete = () => {
    setProgress(100);
    // Here you would typically update the backend
  };

  const tabs = [
    { id: 'content', name: 'Content', icon: BookOpen },
    { id: 'discussion', name: 'Discussion', icon: MessageSquare },
    { id: 'students', name: 'Students', icon: Users }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <Link href="/lessons" className="hover:text-indigo-600 flex items-center">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Lessons
        </Link>
        <span>/</span>
        <span className="text-gray-900">{lesson.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
            {lesson.track}
          </Badge>
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            {lesson.difficulty}
          </Badge>
          {lesson.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{lesson.title}</h1>
        
        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{lesson.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{lesson.rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{lesson.students.toLocaleString()} students</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-600">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Video Player */}
          <div className="mb-8">
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
              {!isVideoPlaying ? (
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center cursor-pointer"
                     onClick={() => setIsVideoPlaying(true)}>
                  <Play className="w-16 h-16 text-white" />
                </div>
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <span className="text-white">Video Player Placeholder</span>
                </div>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === 'content' && (
            <div className="prose max-w-none">
              <div className="bg-white rounded-lg p-6 border">
                <div dangerouslySetInnerHTML={{ 
                  __html: lesson.content.replace(/```(\w+)?\n([\s\S]*?)```/g, 
                    '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>$2</code></pre>')
                    .replace(/###\s(.+)/g, '<h3 class="text-lg font-semibold mt-6 mb-3">$1</h3>')
                    .replace(/##\s(.+)/g, '<h2 class="text-xl font-bold mt-8 mb-4">$1</h2>')
                    .replace(/^#\s(.+)/gm, '<h1 class="text-2xl font-bold mb-6">$1</h1>')
                    .replace(/\n/g, '<br>')
                }} />
              </div>
            </div>
          )}

          {activeTab === 'discussion' && (
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600">Discussion feature coming soon! Connect with other students and instructors.</p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'students' && (
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-600">Student list and progress tracking coming soon!</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Action Buttons */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <Button 
                className="w-full bg-indigo-600 hover:bg-indigo-700"
                onClick={handleMarkComplete}
                disabled={progress === 100}
              >
                {progress === 100 ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Completed
                  </>
                ) : (
                  'Mark as Complete'
                )}
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setShowQuiz(true)}
              >
                Take Quiz
              </Button>
            </CardContent>
          </Card>

          {/* Quiz Modal */}
          {showQuiz && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-md">
                <CardContent className="p-6">
                  {!quizCompleted ? (
                    <>
                      <h3 className="text-lg font-semibold mb-4">
                        Question {currentQuestion + 1} of {quizQuestions.length}
                      </h3>
                      <p className="mb-4">{quizQuestions[currentQuestion].question}</p>
                      <div className="space-y-2">
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedAnswer(index)}
                            className={`w-full text-left p-3 rounded-lg border transition-colors ${
                              selectedAnswer === index
                                ? 'bg-indigo-100 border-indigo-500'
                                : 'hover:bg-gray-50 border-gray-200'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button
                          variant="outline"
                          onClick={() => setShowQuiz(false)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={handleQuizSubmit}
                          disabled={selectedAnswer === null}
                          className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                        >
                          {currentQuestion < quizQuestions.length - 1 ? 'Next' : 'Finish'}
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center">
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Quiz Completed!</h3>
                        <p className="text-gray-600 mb-4">Great job! You've completed the quiz.</p>
                        <Button
                          onClick={() => {
                            setShowQuiz(false);
                            setQuizCompleted(false);
                            setCurrentQuestion(0);
                            setSelectedAnswer(null);
                          }}
                          className="bg-indigo-600 hover:bg-indigo-700"
                        >
                          Close
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Lesson Info */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Lesson Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span>{lesson.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty:</span>
                  <span>{lesson.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Students:</span>
                  <span>{lesson.students.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating:</span>
                  <span className="flex items-center">
                    <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                    {lesson.rating}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
