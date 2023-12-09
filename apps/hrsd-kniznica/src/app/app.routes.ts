
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        component: MainComponent,
        title: 'Library',
    },
    {
        path: 'blabla',  // test, here will be dynamic route
        component: AboutComponent,
        title: 'test about',
    }
];
