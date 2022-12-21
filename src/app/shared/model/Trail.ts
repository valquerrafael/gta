import { TrailContent } from "./TrailContent";

export class Trail {
  trailId?: number;
  name?: string;
  description?: string;
  contents?: TrailContent[];
  teacherId?: number;
  studentsIds?: number[];

  constructor(
    trailId: number,
    name: string,
    description: string,
    contents: TrailContent[],
    teacherId: number,
    studentsIds: number[]
  ) {
    this.trailId = trailId;
    this.name = name;
    this.description = description;
    this.contents = contents;
    this.teacherId = teacherId;
    this.studentsIds = studentsIds;
  }
}
