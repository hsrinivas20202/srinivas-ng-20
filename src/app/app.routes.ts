import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { MyNewComponent } from './my-new.component';
import { Xyz } from './xyz/xyz';

export const routes: Routes = [
    { path: '', component: MyNewComponent },       // 👈 default route
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'xyz', component: Xyz },

    { path: '**', redirectTo: '' }                // optional catch-all
];
