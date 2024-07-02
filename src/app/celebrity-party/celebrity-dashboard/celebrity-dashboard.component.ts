import { Component, ViewChild } from '@angular/core';
import { CelebrityService } from '../../_service/celebrity.service';
import { Celebrity } from '../../_model/celebrity.model';
import { TableModule } from 'primeng/table';
import { CelebrityFormComponent } from '../celebrity-form/celebrity-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-celebrity-dashboard',
  standalone: true,
  imports: [TableModule,CelebrityFormComponent,CommonModule],
  templateUrl: './celebrity-dashboard.component.html',
  styleUrl: './celebrity-dashboard.component.scss'
})
export class CelebrityDashboardComponent {


  constructor(private celebrityService: CelebrityService) {
  }

  
  celebrityDetails: Celebrity = new Celebrity();
  totalRecords: number = 0;
  viewCelebrityGrid: any[] = [];
  isHideDashboard : boolean = false;

  addCelebrity() {
    this.isHideDashboard = true;
  }

  // hideCelebrityForm() {
  //   this.isHideDashboard = false;
  // }

}
