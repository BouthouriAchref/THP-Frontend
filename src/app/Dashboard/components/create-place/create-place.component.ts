import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlacesService } from 'src/app/services/places.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css']
})
export class CreatePlaceComponent implements OnInit {
  selectedFiles = [];
  uploadimages: boolean = false;
  uploadimage: boolean = false;
  selectedFile: File = null;
  credentialsForm: FormGroup;
  url = environment.url;
  idPlace: any;
  files: boolean = false;
  id = '60a7b47464a4c52c20df448d'
  categories: any;
  constructor(private formBuilder: FormBuilder, private placeService: PlacesService) { }

  ngOnInit() {

    this.credentialsForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      lat: new FormControl(''),
      lon: new FormControl('')
    });

    this.placeService.getAllCategory().subscribe(async (res) => {
      this.categories = await res.category
      console.log('cat',this.categories)
    })
  }

  AddPlace() {
    console.log('__', this.credentialsForm.value)
    if (this.credentialsForm.valid) {
      this.placeService.addPlace(this.id, this.credentialsForm.value).subscribe(res => {
        this.idPlace = res.place._id
        console.log(res, this.idPlace)
        if(res.msg =="succes"){
        this.onUpload(this.idPlace);
        }
      })

    }
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.uploadimage = true 
    console.log('file',this.selectedFile)
  }

  onFilesSelected(event) {
    this.selectedFiles = event.target.files;
    this.uploadimages = true 
    console.log('files',this.selectedFiles)

  }

  onUpload(id) {
    const fb = new FormData();
    if (this.uploadimages) {
      for (let img of this.selectedFiles) {
        fb.append('images', img);
        this.placeService.uploadImagesPlace(id, fb).subscribe(res => {
          console.log(res)
        })
      }
    } else if (this.uploadimage) {
      fb.append('image', this.selectedFile)
      this.placeService.uploadImagePlace(id, fb).subscribe(res => {
        console.log(res)
      })
    }
    console.log(fb);

  }

  selectChangeHandlerCat(event) {
    this.credentialsForm.controls['category'].setValue(event.target.value);
    //return event.target.value;
  }



}
