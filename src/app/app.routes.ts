import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { MyNewComponent } from './my-new.component';

export const routes: Routes = [
    { path: '', component: MyNewComponent },       // 👈 default route
    { path: 'portfolio', component: PortfolioComponent },
    { path: '**', redirectTo: '' }                // optional catch-all
];
