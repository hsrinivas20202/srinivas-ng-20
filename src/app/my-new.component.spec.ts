import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { MyNewComponent } from './my-new.component';

describe('MyNewComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MyNewComponent],
            providers: [provideZonelessChangeDetection()]
        }).compileComponents();
    });

    it('should create the component', () => {
        const fixture = TestBed.createComponent(MyNewComponent);
        const comp = fixture.componentInstance;
        expect(comp).toBeTruthy();
    });

    it('should render message', () => {
        const fixture = TestBed.createComponent(MyNewComponent);
        fixture.detectChanges();
        const el = fixture.nativeElement as HTMLElement;
        expect(el.querySelector('h2')?.textContent).toContain('My New Component works!');
    });
});
