import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'my-new',
    standalone: true,
    templateUrl: './my-new.component.html',
    styleUrls: ['./my-new.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],   // 👈 lets Angular render <iconify-icon>
    imports: [FooterComponent],

})
export class MyNewComponent {
    active = signal<'home' | 'posts' | 'skill' | 'resume' | 'uses'>('home');
    setTab(tab: 'home' | 'posts' | 'skill' | 'resume' | 'uses') {

        this.active.set(tab);

        window.scrollTo(0, 0);

        // scroll to top smoothly
        // setTimeout(() => {
        //     window.scrollTo({
        //         top: 0,
        //         left: 0,
        //         behavior: 'smooth'
        //     });
        // }, 0);
    }

}
