import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthComponent } from './Month/month.component';
import { WeekComponent } from './week/week.component';
import { DayComponent } from './day/day.component';



const routes: Routes = [
  {
  path:'Month',
  component: MonthComponent
},
{
  path: 'Week',
  component: WeekComponent
},
{
  path: '',
  component: DayComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
