import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  url = environment.url;

  PlaceSubject = new Subject();
  PlaceSubjectEvent = this.PlaceSubject.asObservable();
  constructor(private http: HttpClient) { }

  getAllPlaces() {
    return this.http.get<any>(`${this.url}/api/Place/Places`).pipe(map(response => {
      //console.log('___',response)
      return response;

    }));
  }
  getAllPlacesToCheck() {
    return this.http.get<any>(`${this.url}/api/Place/Places/check`).pipe(map(response => {
      //console.log('___',response)
      return response;

    }));
  }

  getAllCategory(){
    return this.http.get<any>(`${this.url}/api/category`).pipe(map(response => {
      return response;
    }));
  }

  getPlacesByCat(id){
    return this.http.get<any>(`${this.url}/api/Place/Places/Category/${id}`)
  }

  deletePlaceById(id) {
    this.PlaceSubject.next(true)
    return this.http.delete(`${this.url}/api/Place/places/${id}`).pipe(map(response => {
      
      //console.log('___',response)
      return response;
    }))
  }

   checkPlace(id) {
     this.PlaceSubject.next(true)
    return this.http.put(`${this.url}/api/Place/places/check/${id}`, id).pipe(map(response => {
      return response;
    }))
  }


  getLat(credentials) {
    return this.http.get(`http://nominatim.openstreetmap.org/search?format=json&q=${credentials.address}, ${credentials.city}, ${credentials.state}, ${credentials.zip}`).pipe(map(async (response) => {
      //console.log('response', response)
      // console.log('ed',this.lon)
      return await response[0].lat;
    }))
  }

  getLon(credentials) {
    return this.http.get(`http://nominatim.openstreetmap.org/search?format=json&q=${credentials.address}, ${credentials.city}, ${credentials.state}, ${credentials.zip}`).pipe(map(async (response) => {
      //console.log('response', response)
      //console.log('ed',this.lon)
      return await response[0].lon;
    }))
  }

  addPlace(id, credentials) {
    //console.log('___',credentials) 
    this.PlaceSubject.next(true)
    return this.http.post<any>(`${this.url}/api/Place/addPlace/${id}`, credentials).pipe(map(response => {
      //console.log('___',response)
      return response
    }));

  }

  addCategory(credentials) {
    //console.log('___',credentials) 
    this.PlaceSubject.next(true)
    return this.http.post<any>(`${this.url}/api/category/addCat`, credentials).pipe(map(response => {
      //console.log('___',response)
      return response
    }));

  }

  deleteCategoryById(id) {
    this.PlaceSubject.next(true)
    return this.http.delete<any>(`${this.url}/api/category/deleteCat/${id}`).pipe(map(response => {
      console.log(response)
      return response
    }))
  }

  uploadImageCat(id, image) {
    //console.log('___',credentials) 
    return this.http.put<any>(`${this.url}/api/category/${id}`,image).pipe(map(response => {
      //console.log('1',response)
      return response
    }));
  }

  uploadImagePlace(id, image) {
    //console.log('___',credentials) 
    return this.http.post<any>(`${this.url}/api/Place/file/${id}`,image).pipe(map(response => {
      //console.log('1',response)
      return response
    }));
  }


  uploadImagesPlace(id, images) {
    //console.log('___',credentials) 
    return this.http.post<any>(`${this.url}/api/Place/files/${id}`,images).pipe(map(response => {
      //console.log('2',response)
      return response
    }));
  }
}