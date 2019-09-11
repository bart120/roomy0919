import { Routes } from '@angular/router';
import { CreateRoomComponent } from './modules/room/create-room/create-room.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ListRoomComponent } from './modules/room/list-room/list-room.component';
import { NotFoundComponent } from './modules/home/not-found/not-found.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { DetailRoomComponent } from './modules/room/detail-room/detail-room.component';
import { AuthenticationGuard } from './guards/authentication.guard';

export const ROUTES: Routes = [
    {
        path: 'rooms', children: [
            { path: 'create', component: CreateRoomComponent, canActivate: [AuthenticationGuard] },
            { path: 'list', component: ListRoomComponent },
            { path: 'detail/:id', component: DetailRoomComponent }
        ]
    },

    { path: 'auth', loadChildren: () => AuthenticationModule },

    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'notfound', component: NotFoundComponent },
    { path: '**', redirectTo: 'notfound' }

];
