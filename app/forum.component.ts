import { Component, OnInit } from "@angular/core";
import { ForumService } from "./services/forum.service";
import { Thread } from "./models/thread";
import { Router } from "@angular/router";

@Component({
  selector: 'forum',
  templateUrl: 'app/views/forum.component.html',
  providers: [ForumService],
  styleUrls: ['app/styles/forum.component.css']
})
export class ForumComponent implements OnInit{
  threads : Thread[];
  constructor(
    private router: Router,
    private forumService: ForumService
  ) {}
  ngOnInit() {
    this.forumService.getThreads().then(threads => this.threads = threads);
  }
  gotoThread(thread: Thread) {
    let link=['/forum/thread',thread.id];
    this.router.navigate(link);
  }
}
