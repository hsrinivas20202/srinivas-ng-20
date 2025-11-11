import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { PortfolioComponent } from './portfolio.component';

describe('PortfolioComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PortfolioComponent],
            providers: [provideZonelessChangeDetection()]
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(PortfolioComponent);
        const comp = fixture.componentInstance;
        expect(comp).toBeTruthy();
    });

    it('renders heading', () => {
        const fixture = TestBed.createComponent(PortfolioComponent);
        fixture.detectChanges();
        const el = fixture.nativeElement as HTMLElement;
        expect(el.querySelector('h2')?.textContent).toContain('Portfolio');
    });
});
