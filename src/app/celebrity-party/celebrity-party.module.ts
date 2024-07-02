import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CelebrityPartyRoutingModule } from './celebrity-party-routing.module';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
//import { FormLayoutDemoRoutingModule } from 'src/app/demo/components/uikit/formlayout/formlayoutdemo-routing.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';
import { SplitterModule } from 'primeng/splitter';
import { MenuModule } from 'primeng/menu';
import { MegaMenuModule } from 'primeng/megamenu';
import { StepsModule } from 'primeng/steps';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { CelebrityDashboardComponent } from './celebrity-dashboard/celebrity-dashboard.component';
;


@NgModule({
  declarations: [
    CelebrityDashboardComponent
  ],
  imports: [
    CommonModule,
    CelebrityPartyRoutingModule,
    BrowserModule,
    // PermanentPoGenerationRoutingModule,
    // AppSharedModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    //FormLayoutDemoRoutingModule,
    AutoCompleteModule,
    InputMaskModule,
    InputNumberModule,
    InputTextModule,
   // TooltipModule,
    InputTextareaModule,
    CascadeSelectModule,
    ToastModule,
    TableModule,
    TabViewModule,
    DividerModule,
    SplitterModule,
    MenuModule,
    MegaMenuModule,
    StepsModule,
    CalendarModule,
    FileUploadModule,
    DialogModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    RadioButtonModule,
    //PaginatorModule
  ]
})
export class CelebrityPartyModule { }
