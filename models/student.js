import { Score } from './score.js';

export class Student {
  constructor(name, age, scores = {}) {
    this.name = name;
    this.age = age;
    this.scores = new Score(scores);
    this.id = crypto.randomUUID();
  }

  // Other methods
  getScore(subject) {
    return this.scores.getScore(subject);
  }

  setScore(subject, score) {
    this.scores[subject] = score;
  }

  getAverage() {
    return this.scores.getAverage();
  }
}