import { AnswerI } from './answer-i';

export interface QuestionI {
  id?: string;
  userId: string;
  question: string;
  type: string;
  category: string;
  answers: AnswerI[];
  start: string;
<<<<<<< HEAD
  email?:string
=======
  email?: string;
>>>>>>> ebb1196cb9ef5dda7b88a97dce8596e127c9e7d2
}
