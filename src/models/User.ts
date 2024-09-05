// src/models/User.ts
export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: 'Admin' | 'User'; // roles could be extended
    createdAt: Date;
    updatedAt: Date;
  }
  