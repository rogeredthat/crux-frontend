import { Injectable } from "@angular/core";
import { THREADS } from "./mock-threads";

@Injectable()
export class ForumService {
  getThreads() {
    return Promise.resolve(THREADS);
  }
  getThread(id: number) {
    return this.getThreads().then(threads => threads.filter(thread => thread.id == id)[0]);
  }
}
