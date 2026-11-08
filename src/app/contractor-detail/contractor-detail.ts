import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { findContractor } from '../contractors.data';
import { ShortlistService } from '../shortlist.service';
import { SiteHeader } from '../site-header/site-header';

@Component({
  selector: 'app-contractor-detail',
  imports: [RouterLink, SiteHeader],
  templateUrl: './contractor-detail.html',
})
export class ContractorDetail {
  private readonly route = inject(ActivatedRoute);
  readonly shortlist = inject(ShortlistService);
  private readonly id = toSignal(this.route.paramMap.pipe(map((params) => params.get('id'))));
  readonly contractor = computed(() => findContractor(this.id() ?? null));
}
