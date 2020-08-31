import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LaunchFiltersComponent } from './launch-filters/launch-filters.component';
import { LaunchProgramsComponent } from './launch-programs/launch-programs.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [{
  path: '', component: LaunchProgramsComponent
},
{
  path: '*', redirectTo: '', pathMatch: 'full'
}];

//HttpClientmodule and RouterModule should be register..
@NgModule({
  declarations: [
    AppComponent,
    LaunchFiltersComponent,
    LaunchProgramsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
