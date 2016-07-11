import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { ForumService } from './services/forum.service';
import { Thread } from './models/thread';
import { ThreadAnswer } from './models/ThreadAnswer';

@Component({
  selector: 'thread',
  templateUrl: 'app/views/thread.component.html',
  styleUrls: ['app/styles/thread.component.css','node_modules/codemirror/lib/codemirror.css'],
  providers: [ForumService]
})
export class ThreadComponent implements OnInit, OnDestroy {
  thread: Thread = {
    id: 182,
    user: '0bj9182',
    title: "How do you do?",
    question: "How the hell are you? Where've you been?",
    tags: ['random', 'lame'],
    answers: [
      {
        answer: "I'm fine",
        points: 3
      },
      {
        answer: "Too close to the bottom",
        points: 5
      },
      {
        answer: "Right back where I started",
        points: 2
      }
    ],
    points: 4
  };
  sub: any;
  constructor(
    private forumService: ForumService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.forumService.getThread(id)
        .then(thread => {
          this.thread = thread;
        });
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  };

}
