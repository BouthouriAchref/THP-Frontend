import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  credentialsForm: FormGroup;
  idcat: any;
  selectedFile: File = null;
  constructor(private formBuilder: FormBuilder, private placeService: PlacesService) { }

  ngOnInit(): void {

    this.credentialsForm = this.formBuilder.group({
      Name: new FormControl('', [Validators.required])
    });
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log('file',this.selectedFile)
  }

  AddCategory(){
    console.log('__', this.credentialsForm.value)
    if (this.credentialsForm.valid) {
      this.placeService.addCategory(this.credentialsForm.value).subscribe(res => {
        console.log('____',res)
        this.idcat = res.category._id
        console.log(res, this.idcat)
        this.onUpload(this.idcat);
      })

    }
  }

  onUpload(id) {
    const fb = new FormData();
      fb.append('image', this.selectedFile)
      this.placeService.uploadImageCat(id, fb).subscribe(res => {
        console.log(res)
      })
      console.log(fb);
    }
    

}
