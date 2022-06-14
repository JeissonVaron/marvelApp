import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'personajes',
    loadChildren: () => import('./characters/characters.module').then( m => m.CharactersModule)
  },
  {
    path: 'comics',
    loadChildren: () => import('./comics/comics.module').then( m => m.ComicsModule)
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
