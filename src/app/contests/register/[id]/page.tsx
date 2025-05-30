
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Users, Trophy, Calendar, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContestRegistration = () => {
  const { id } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    teamName: '',
    teamSize: '1',
    members: [{ name: '', email: '', department: '', year: '' }],
    agreeToTerms: false,
    agreeToCode: false
  });

  // Mock contest data
  const contest = {
    id: id,
    title: 'Weekly Contest #45',
    type: 'individual', // or 'team'
    startTime: '2024-02-01T14:00:00Z',
    duration: 120,
    maxParticipants: 200,
    registered: 156,
    registrationFee: 0, // Free contest
    prizes: ['Certificate', 'Badges', 'XP Points']
  };

  const handleInputChange = (field, value, memberIndex = null) => {
    if (memberIndex !== null) {
      const newMembers = [...formData.members];
      newMembers[memberIndex] = { ...newMembers[memberIndex], [field]: value };
      setFormData({ ...formData, members: newMembers });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const addTeamMember = () => {
    if (formData.members.length < 4) {
      setFormData({
        ...formData,
        members: [...formData.members, { name: '', email: '', department: '', year: '' }]
      });
    }
  };

  const removeTeamMember = (index) => {
    if (formData.members.length > 1) {
      const newMembers = formData.members.filter((_, i) => i !== index);
      setFormData({ ...formData, members: newMembers });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms || !formData.agreeToCode) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the terms and code of conduct.",
        variant: "destructive"
      });
      return;
    }

    // Simulate registration
    toast({
      title: "Registration Successful!",
      description: `You have been registered for ${contest.title}.`,
    });
    
    router.push(`/contests/${id}`);
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Register for Contest</h1>
        <p className="text-lg text-gray-600">{contest.title}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Registration Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Registration Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {contest.type === 'team' && (
                  <div>
                    <Label htmlFor="teamName">Team Name</Label>
                    <Input
                      id="teamName"
                      value={formData.teamName}
                      onChange={(e) => handleInputChange('teamName', e.target.value)}
                      placeholder="Enter your team name"
                      required
                    />
                  </div>
                )}

                {/* Team Members */}
                <div>
                  <Label>Team Members</Label>
                  <div className="space-y-4 mt-2">
                    {formData.members.map((member, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold">
                            {contest.type === 'team' ? `Member ${index + 1}` : 'Participant'}
                            {index === 0 && contest.type === 'team' && <Badge className="ml-2">Team Leader</Badge>}
                          </h4>
                          {index > 0 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removeTeamMember(index)}
                            >
                              Remove
                            </Button>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor={`name-${index}`}>Full Name</Label>
                            <Input
                              id={`name-${index}`}
                              value={member.name}
                              onChange={(e) => handleInputChange('name', e.target.value, index)}
                              placeholder="Enter full name"
                              required
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor={`email-${index}`}>Email</Label>
                            <Input
                              id={`email-${index}`}
                              type="email"
                              value={member.email}
                              onChange={(e) => handleInputChange('email', e.target.value, index)}
                              placeholder="Enter email address"
                              required
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor={`department-${index}`}>Department</Label>
                            <Select 
                              value={member.department} 
                              onValueChange={(value) => handleInputChange('department', value, index)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select department" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="cse">Computer Science</SelectItem>
                                <SelectItem value="ece">Electronics</SelectItem>
                                <SelectItem value="mech">Mechanical</SelectItem>
                                <SelectItem value="civil">Civil</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor={`year-${index}`}>Year</Label>
                            <Select 
                              value={member.year} 
                              onValueChange={(value) => handleInputChange('year', value, index)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select year" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1st Year</SelectItem>
                                <SelectItem value="2">2nd Year</SelectItem>
                                <SelectItem value="3">3rd Year</SelectItem>
                                <SelectItem value="4">4th Year</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </Card>
                    ))}
                    
                    {contest.type === 'team' && formData.members.length < 4 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={addTeamMember}
                        className="w-full"
                      >
                        Add Team Member
                      </Button>
                    )}
                  </div>
                </div>

                {/* Agreements */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="code"
                      checked={formData.agreeToCode}
                      onCheckedChange={(checked) => handleInputChange('agreeToCode', checked)}
                    />
                    <Label htmlFor="code" className="text-sm">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Code of Conduct</a> and anti-plagiarism policy
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Complete Registration
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contest Summary */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Contest Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Start Time</p>
                  <p className="font-semibold">{formatDateTime(contest.startTime)}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">{contest.duration} minutes</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Participants</p>
                  <p className="font-semibold">{contest.registered}/{contest.maxParticipants}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Trophy className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Registration Fee</p>
                  <p className="font-semibold">{contest.registrationFee === 0 ? 'Free' : `₹${contest.registrationFee}`}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Prizes & Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {contest.prizes.map((prize, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{prize}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContestRegistration;
