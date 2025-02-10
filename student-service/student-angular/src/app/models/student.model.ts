export interface Student {
    id: number;
    name: string;
    age: number;
    grade?: string;
    score?: number;
  }

  export enum Grade {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E',
  }
  