import { Component } from '@angular/core';
import { iPics } from '../../i-pics';
import { PicturesService } from '../../pictures.service';

@Component({
  selector: 'app-fav-pics',
  templateUrl: './fav-pics.component.html',
  styleUrl: './fav-pics.component.scss'
})
export class FavPicsComponent {
  favs: iPics[]=[]
  constructor(public picsSvc: PicturesService) {}

  ngOnInit(): void{
    this.picsSvc.favList.subscribe((favs:iPics[])=> {
      this.favs = favs
    })
  }


}
