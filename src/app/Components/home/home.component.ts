import { Component } from '@angular/core';
import { iPics } from '../../i-pics';
import { PicturesService } from '../../pictures.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  pictures: iPics[]=[]

  constructor(private picsSvc:PicturesService){}

  ngOnInit(){this.picsSvc.getAll().subscribe(pictures => {
    this.pictures = pictures;
    console.log(pictures);
  })

}

}
