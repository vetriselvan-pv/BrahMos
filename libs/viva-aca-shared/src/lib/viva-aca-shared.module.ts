import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { vivaAcaSharedRoutes } from './lib.routes';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ChooseUsCardComponent } from './components/choose-us-card/choose-us-card.component';
import { StatisticCardComponent } from './components/statistic-card/statistic-card.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(vivaAcaSharedRoutes)],
    declarations: [
        HomeComponent,
        ChooseUsCardComponent,
        StatisticCardComponent,
        HomeFooterComponent,
    ],
})
export class VivaAcaSharedModule {}
