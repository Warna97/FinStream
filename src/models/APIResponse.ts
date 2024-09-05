// src/models/APIResponse.ts
export interface APIResponse<T> {
    success: boolean;
    message: string;
    data: T;
  }
  