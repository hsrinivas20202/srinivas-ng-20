import { Component, signal } from '@angular/core';

@Component({
    selector: 'my-new',
    standalone: true,
    templateUrl: './my-new.component.html',
    styleUrls: ['./my-new.component.scss']
})
export class MyNewComponent {
    active = signal<'home' | 'posts' | 'skill' | 'resume' | 'uses'>('home');
    setTab(tab: 'home' | 'posts' | 'skill' | 'resume' | 'uses') { this.active.set(tab); }
}
