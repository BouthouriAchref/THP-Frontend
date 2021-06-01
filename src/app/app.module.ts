import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { AllPlacesComponent } from './Dashboard/components/all-places/all-places.component';
import { FooterComponent } from './Dashboard/components/footer/footer.component';
import { HeaderComponent } from './Dashboard/components/header/header.component';
import { HomeComponent } from './Dashboard/components/home/home.component';
import { MainContentComponent } from './Dashboard/components/main-content/main-content.component';
import { PlacesComponent } from './Dashboard/components/places/places.component';
import { PlacesToCheckComponent } from './Dashboard/components/places-to-check/places-to-check.component';
import { SidebarComponent } from './Dashboard/components/sidebar/sidebar.component';
import { CreatePlaceComponent } from './Dashboard/components/create-place/create-place.component';
import { AllCategoriesComponent } from './Dashboard/components/all-categories/all-categories.component';
import { AddCategoryComponent } from './Dashboard/components/add-category/add-category.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllPlacesComponent,
    FooterComponent,
    HeaderComponent,
    MainContentComponent,
    SidebarComponent,
    HomeComponent,
    PlacesComponent,
    PlacesToCheckComponent,
    CreatePlaceComponent,
    AllCategoriesComponent,
    AddCategoryComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
