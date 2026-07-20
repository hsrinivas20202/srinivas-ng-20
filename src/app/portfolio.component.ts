import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserService } from './user.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
    readonly heading = 'Portfolio';
    readonly description = 'A simple portfolio route and component.';
    users$!: Observable<User[]>;
    isShow = true;
    // constructor(private userService: UserService) { }

    private userService = inject(UserService);

    ngOnInit(): void {
        this.users$ = this.userService.getUsers();
    }
}
