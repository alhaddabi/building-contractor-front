import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShortlistService } from '../shortlist.service';
import { SiteHeader } from '../site-header/site-header';

@Component({
  selector: 'app-shortlist',
  imports: [RouterLink, SiteHeader],
  templateUrl: './shortlist.html',
})
export class Shortlist {
  readonly shortlist = inject(ShortlistService);
}
