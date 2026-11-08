import { Component, computed, inject, signal } from '@angular/core';
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
  readonly trade = signal('All');
  readonly query = signal('');

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
