
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
        path: ':id',
        component: AboutComponent,
        title: 'About',  // i want here dynamicly set of title...
    }
];
