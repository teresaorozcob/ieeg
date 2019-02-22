import { Routes } from '@angular/router';

import { DashboardComponent } from '../../cmp/dashboard/dashboard.component';
import { TableListComponent } from '../../cmp/table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../cmp/notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UploadComponent } from '../../cmp/upload/upload.component';
import { TimelineComponent } from '../../cmp/timeline/timeline.component';

import {MatDatepickerModule} from '@angular/material/datepicker';

export const AdminLayoutRoutes: Routes = [


    { path: 'dashboard',        component: DashboardComponent },
    { path: 'table-list',       component: TableListComponent },
    { path: 'typography',       component: TypographyComponent },
    { path: 'icons',            component: IconsComponent },
    { path: 'maps',             component: MapsComponent },
    { path: 'notifications',    component: NotificationsComponent },
    { path: 'upgrade',          component: UpgradeComponent },
    { path: 'upload',       component: UploadComponent },
    { path: 'timeline',       component: TimelineComponent }

    // { path: 'MatDatepicker',       component: MatDatepickerModule },


];
