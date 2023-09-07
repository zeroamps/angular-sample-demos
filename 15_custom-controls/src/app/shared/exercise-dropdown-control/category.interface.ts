import { Exercise } from '@app/core/models/exercise.model';

export interface Category {
  name: string;
  exercises: Exercise[];
}
