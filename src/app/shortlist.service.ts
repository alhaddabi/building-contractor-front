import { Injectable, computed, signal } from '@angular/core';
import { CONTRACTORS, Contractor } from './contractors.data';

@Injectable({ providedIn: 'root' })
export class ShortlistService {
  private readonly storageKey = 'northline-shortlist';
  private readonly ids = signal<string[]>(this.read());

  readonly selected = computed(() =>
    this.ids()
      .map((id) => CONTRACTORS.find((contractor) => contractor.id === id))
      .filter((contractor): contractor is Contractor => contractor !== undefined),
  );

  count(): number {
    return this.ids().length;
  }

  has(id: string): boolean {
    return this.ids().includes(id);
  }

  toggle(id: string): void {
    const next = this.has(id) ? this.ids().filter((item) => item !== id) : [...this.ids(), id];
    this.ids.set(next);
    sessionStorage.setItem(this.storageKey, JSON.stringify(next));
  }

  private read(): string[] {
    const raw = sessionStorage.getItem(this.storageKey);
    if (!raw) {
      return [];
    }
    try {
      const parsed = JSON.parse(raw) as unknown;
      return Array.isArray(parsed) ? parsed.filter((item) => typeof item === 'string') : [];
    } catch {
      return [];
    }
  }
}
