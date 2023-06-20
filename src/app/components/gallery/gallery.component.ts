import {Component} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images: any [] = [
    {
      id: 1,
      src: 'https://static01.nyt.com/images/2022/11/29/science/00tb-cats1/00tb-cats1-mediumSquareAt3X.jpg'
    },
    {
      id: 2,
      src: 'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk2Nzg0MjYxNjk5NzQxMzE0/cats-that-look-like-tigers-leopards-and-cheetahs.png'
    }
  ]
}
