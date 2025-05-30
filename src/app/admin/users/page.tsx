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
  Download, 
  Upload, 
  MoreHorizontal, 
  UserPlus,
  Edit,
  Shield,
  Ban,
  CheckCircle,
  XCircle,
  Eye
} from 'lucide-react';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@college.edu',
      department: 'Computer Science',
      year: '3rd Year',
      role: 'Student',
      status: 'Active',
      xp: 1250,
      badges: 8,
      lastLogin: '2 hours ago'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@college.edu',
      department: 'Information Technology',
      year: '2nd Year',
      role: 'Student',
      status: 'Active',
      xp: 980,
      badges: 5,
      lastLogin: '1 day ago'
    },
    {
      id: '3',
      name: 'Dr. Sarah Wilson',
      email: 'sarah.wilson@college.edu',
      department: 'Computer Science',
      year: 'Faculty',
      role: 'Teacher',
      status: 'Active',
      xp: 2500,
      badges: 15,
      lastLogin: '30 minutes ago'
    },
    {
      id: '4',
      name: 'Mike Johnson',
      email: 'mike.johnson@college.edu',
      department: 'Electronics',
      year: '4th Year',
      role: 'TA',
      status: 'Disabled',
      xp: 1800,
      badges: 12,
      lastLogin: '1 week ago'
    }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Teacher': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      case 'TA': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'Disabled': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">User Management</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Manage students, teachers, and TAs</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Import CSV</span>
            </Button>
            <Button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700">
              <UserPlus className="w-4 h-4" />
              <span>Add User</span>
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search users by name, email, or department..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>Department</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>Year</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>Role</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bulk Actions */}
        {selectedUsers.length > 0 && (
          <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  {selectedUsers.length} user(s) selected
                </span>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">Change Role</Button>
                  <Button size="sm" variant="outline">Disable</Button>
                  <Button size="sm" variant="outline">Enable</Button>
                  <Button size="sm" variant="outline">Reset Password</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Users Table */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">All Users ({filteredUsers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <input
                      type="checkbox"
                      className="rounded"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedUsers(filteredUsers.map(u => u.id));
                        } else {
                          setSelectedUsers([]);
                        }
                      }}
                    />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>XP</TableHead>
                  <TableHead>Badges</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead className="w-20">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <input
                        type="checkbox"
                        className="rounded"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => toggleUserSelection(user.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{user.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-300">{user.department}</TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-300">{user.year}</TableCell>
                    <TableCell>
                      <Badge className={getRoleColor(user.role)}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(user.status)}>
                        {user.status === 'Active' ? <CheckCircle className="w-3 h-3 mr-1" /> : <XCircle className="w-3 h-3 mr-1" />}
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-300">{user.xp}</TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-300">{user.badges}</TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-300">{user.lastLogin}</TableCell>
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

export default UserManagement;
