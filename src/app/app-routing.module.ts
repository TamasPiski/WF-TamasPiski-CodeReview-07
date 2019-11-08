import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from  './about/about.component';
import { TravelComponent } from './travel/travel.component';
import { BlogsComponent } from './blogs/blogs.component';



const routes: Routes = [
  {

    path:"home",component: HomeComponent

},

{

    path: "about",component: AboutComponent

},
{

  path:"travel",component: TravelComponent

},
{

  path:"blogs",component: BlogsComponent

}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
