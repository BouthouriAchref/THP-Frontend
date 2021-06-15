import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AllCategoriesComponent } from './Dashboard/components/all-categories/all-categories.component';
import { AllPlacesComponent } from './Dashboard/components/all-places/all-places.component';
import { CreatePlaceComponent } from './Dashboard/components/create-place/create-place.component';
import { AddCategoryComponent } from './Dashboard/components/add-category/add-category.component';
import { HomeComponent } from './Dashboard/components/home/home.component';
import { MainContentComponent } from './Dashboard/components/main-content/main-content.component';
import { PlacesToCheckComponent } from './Dashboard/components/places-to-check/places-to-check.component';
import { PlacesComponent } from './Dashboard/components/places/places.component';
import { SidebarComponent } from './Dashboard/components/sidebar/sidebar.component';
import { AuthguardService } from './services/authguard.service';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivate: [AuthguardService]
  },
  {
    path: 'all-places', component: AllPlacesComponent, canActivate: [AuthguardService]
  },
  {
    path: 'all-categories', component: AllCategoriesComponent, canActivate: [AuthguardService]
  },
  {
    path: 'users', component: PlacesComponent, canActivate: [AuthguardService]
  },
  {
    path: 'place-to-check', component: PlacesToCheckComponent, canActivate: [AuthguardService]
  },
  {
    path: 'create-place', component: CreatePlaceComponent, canActivate: [AuthguardService]
  },
  {
    path: 'add-category', component: AddCategoryComponent, canActivate: [AuthguardService]
  },
  {
    path: 'mainContent', component: MainContentComponent, canActivate: [AuthguardService]
  },
  {
    path: 'sideBar', component: SidebarComponent, canActivate: [AuthguardService]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
