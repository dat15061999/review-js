export class Score {
  constructor(score = {}) {
    this.score = score;
  }

  // Other methods
  getScore(subject) {
    return this.score[subject] || '-';
  }

  getAverage() {
    if (Object.keys(this.score).length === 0) return '-';

    return Object.values(this.score).reduce((acc, score) => acc + score, 0) / Object.keys(this.score).length;
  }
}