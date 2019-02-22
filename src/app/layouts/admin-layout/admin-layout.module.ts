import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';
import { UploadComponent } from '../../cmp/upload/upload.component';


import { DashboardComponent } from '../../cmp/dashboard/dashboard.component';
import { TableListComponent } from '../../cmp/table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../cmp/notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { TimelineComponent } from '../../cmp/timeline/timeline.component';
import { CargaComponent } from '../../cmp/carga/carga.component';
import { SelectPeriodoComponent } from '../../cmp/select-periodo/select-periodo.component';
import { SelectProcesoComponent } from '../../cmp/select-proceso/select-proceso.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';


// from FileUpload
import { BrowserModule } from '@angular/platform-browser';







import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatDialogModule,
  MatStepperModule,
  MatFormFieldControl
} from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    
    FileUploadModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    UploadComponent,

    DashboardComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    TimelineComponent,
    CargaComponent,
    SelectPeriodoComponent,
    SelectProcesoComponent
  ],
  entryComponents: [    
  ]
})

export class AdminLayoutModule {}
