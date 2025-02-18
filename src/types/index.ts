export interface User {
    id: number;
    name: string;
    email?: string;
  }
  
  export interface UserState {
    user: User | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }