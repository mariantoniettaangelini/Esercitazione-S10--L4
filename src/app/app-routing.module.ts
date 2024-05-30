import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FavPicsComponent } from './Components/fav-pics/fav-pics.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Fav', component: FavPicsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
