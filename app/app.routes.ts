import { provideRouter, RouterConfig } from "@angular/router";
import { ForumComponent } from './forum.component';
import { LabComponent } from './lab.component';
import { BlogComponent } from './blog.component';
import { HomeComponent } from './home.component';
import { ThreadComponent } from './thread.component';

const routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'lab',
    component: LabComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'forum/thread/:id',
    component: ThreadComponent
  }
]

export const APP_ROUTE_PROVIDERS = [
  provideRouter(routes)
]
