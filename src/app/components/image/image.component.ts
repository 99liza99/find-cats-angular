import {Component, Input} from '@angular/core';
import {CatImageInterface} from "../../interfaces/CatImageInterface";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() image: CatImageInterface | undefined;
}
