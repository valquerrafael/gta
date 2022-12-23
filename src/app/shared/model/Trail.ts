import { TrailContent } from "./TrailContent";

export class Trail {
  trailId?: number;
  name?: string;
  description?: string;
  contents?: TrailContent[];
  teacher?: number;
  students?: number[];

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
    this.teacher = teacherId;
    this.students = studentsIds;
  }
}
