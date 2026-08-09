// Common Types and Interfaces for Quran Academy Platform

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructorId: string;
  createdAt: string;
}
