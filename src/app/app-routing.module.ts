import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './weather/page1/page1.component'; // Adjust the import path as needed
import { Page2Component } from './dashboard/page2/page2.component'; // Adjust the import path as needed
import { Page3Component } from './calculator/page3/page3.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component }, // Create Page 3 component
  { path: '**', redirectTo: 'page1' } // Redirect to Page 1 for any unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
