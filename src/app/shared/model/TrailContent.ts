export class TrailContent {
  trailContentId?: number;
  name?: string;
  content?: string;
  score?: number;
  trailId?: number;

  constructor(
    trailContentId: number,
    name: string,
    content: string,
    score: number,
    trailId: number
  ) {
    this.trailContentId = trailContentId;
    this.name = name;
    this.content = content;
    this.score = score;
    this.trailId = trailId;
  }
}
