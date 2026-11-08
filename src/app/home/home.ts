import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTRACTORS, TRADES } from '../contractors.data';
import { ShortlistService } from '../shortlist.service';
import { SiteHeader } from '../site-header/site-header';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SiteHeader],
  templateUrl: './home.html',
})
export class Home {
  readonly shortlist = inject(ShortlistService);
  readonly trades = TRADES;
  readonly slides = CONTRACTORS;
  readonly slide = signal(0);
  readonly trade = signal('All');
  readonly query = signal('');
  readonly current = computed(() => this.slides[this.slide()]);

  constructor() {
    const timer = window.setInterval(() => {
      this.slide.update((index) => (index + 1) % this.slides.length);
    }, 5000);
    inject(DestroyRef).onDestroy(() => window.clearInterval(timer));
  }

  readonly visible = computed(() => {
    const trade = this.trade();
    const query = this.query().trim().toLowerCase();
    return CONTRACTORS.filter((contractor) => trade === 'All' || contractor.trade === trade)
      .filter((contractor) => {
        if (!query) {
          return true;
        }
        return (
          contractor.company.toLowerCase().includes(query) ||
          contractor.name.toLowerCase().includes(query) ||
          contractor.city.toLowerCase().includes(query) ||
          contractor.trade.toLowerCase().includes(query)
        );
      })
      .slice()
      .sort((left, right) => right.rating - left.rating);
  });

  onSearch(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }
}
