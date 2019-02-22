import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';
import { ComponentsModule } from './components/components.module';

// arriba por defaul ANGULAR
import { MatFormFieldModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material'
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
//lo de las api de material, mandarlas a admin-layout.module.ts

// RUTAS:
import { AppRoutingModule } from './app.routing'; // ES APP.ROUTES // -> VA EN LOS IMPORTS

// SERVICIOS:
import { GralService } from './servicios/gral.service';
import { FileService } from './servicios/file.service';
import { UploadService } from './servicios/upload.service';
import { CargasService } from './servicios/cargas.service';

// COMPONENTES
import { AppComponent } from './app.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';





@NgModule({
  imports: [
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    HttpClientModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports: [
    //MatBadgeModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [
    GralService,
    FileService,
    UploadService,
    CargasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
