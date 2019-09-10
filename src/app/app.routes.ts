import { Routes } from '@angular/router';
import { CreateRoomComponent } from './modules/room/create-room/create-room.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ListRoomComponent } from './modules/room/list-room/list-room.component';
import { NotFoundComponent } from './modules/home/not-found/not-found.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';

export const ROUTES: Routes = [
    {
        path: 'rooms', children: [
            { path: 'create', component: CreateRoomComponent },
            { path: 'list', component: ListRoomComponent }
        ]
    },

    { path: 'auth', loadChildren: () => AuthenticationModule },

    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'notfound', component: NotFoundComponent },
    { path: '**', redirectTo: 'notfound' }

];
