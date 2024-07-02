import { Component, Output } from '@angular/core';
import { CelebrityService } from '../../_service/celebrity.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-celebrity-form',
  standalone: true,
  imports: [],
  templateUrl: './celebrity-form.component.html',
  styleUrl: './celebrity-form.component.scss'
})
export class CelebrityFormComponent {

  // @Output() onBackRedirectViewCelebrity: EventEmitter<any> = new EventEmitter<any>();

  constructor(private celebrityService: CelebrityService) {}

  // OnBackClick() :void{
  //   this.onBackRedirectViewCelebrity.emit;

  // }

}
