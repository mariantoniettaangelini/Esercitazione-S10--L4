import { Component, Input, input } from '@angular/core';
import { iPics } from '../../i-pics';
import { PicturesService } from '../../pictures.service';

@Component({
  selector: 'app-single-pic',
  templateUrl: './single-pic.component.html',
  styleUrl: './single-pic.component.scss'
})
export class SinglePicComponent {

  @Input() onePic! : iPics
  pictures: iPics[]=[]
  likeCount:number = 0

  constructor(private picsSvc:PicturesService){}



  ngOnInit():void {
    this.picsSvc.like$.subscribe((pictures) => {
      this.likeCount = pictures;
    });
  }

  like() {
    this.picsSvc.addLike()
  }

  delete(id:number){
    this.picsSvc.delete(id).subscribe(()=> {
      this.pictures = this.pictures.filter(onePic => onePic.id != id)
      console.log('FOTO ELIMINATA')
    })
  }

  isFav(id:number) {
    return this.picsSvc.isFav(id)
   }

   addToFavs(onePic:iPics) {
    this.picsSvc.addToFav(onePic)
  }

}
