import { Thread } from "../models/thread.ts";
import { ThreadAnswer } from "../models/threadAnswer.ts";

export var THREADS: Thread[] = [
  {
    id: 182,
    user: '0bj9182',
    title: "What is the proper REST URI for a JPA entity with a composite primary key in JAX-RS?",
    question: "How the hell are you? Where've you been?",
    tags: ['random','lame'],
    answers: [
      {
        answer: "I'm fine",
        points: 2
      },
      {
        answer: "Too close to the bottom",
        points: 6
      },
      {
        answer: "Right back where I started",
        points: 6
      }
    ],
    points: 4
  },
  {
    id: 225,
    user: '0bj8493',
    title: "Composite keys: Problems whenever i add in a new row with composite keys that start with the same letter as the previous",
    question: "Job Descr. Salary everything. C'mon",
    tags: ['nodejs','keys','environment'],
    answers: [
      {
        answer: "I'm fine",
        points: 2
      },
      {
        answer: "Too close to the bottom",
        points: 6
      },
      {
        answer: "Right back where I started",
        points: 6
      }
    ],
    points: 4
  },
  {
    id: 531,
    user: '0bj122',
    title: "Failure to run a php script (meant to be run from terminal) from another php script",
    question: "What brought the printing press to print this?",
    tags: ['php','cmd','background-processes','ratchet'],
    answers: [
      {
        answer: "I'm fine",
        points: 2
      },
      {
        answer: "Too close to the bottom",
        points: 6
      },
      {
        answer: "Right back where I started",
        points: 6
      }
    ],
    points: 4
  }
]
