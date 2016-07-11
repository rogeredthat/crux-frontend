import { ThreadAnswer } from "./threadAnswer.ts";

export class Thread {
    id: number;
    user: string;
    title: string;
    question: string;
    tags: string[];
    answers: ThreadAnswer[];
    points: number = 0;
}
