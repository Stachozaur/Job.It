import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ISpecialist } from './specialist';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const specialists = [
      { id: 1, name: "Janusz", category: "hydraulik", description: "Przepcham Ci każdą rurę" },
      { id: 2, name: "Marian", category: "fryzjer", description: "Boki krótko, góra bez zmian" },
      { id: 3, name: "Ania", category: "sprzątaczka", description: "Mogę przyjść w stroju pokojówki" },
      { id: 4, name: "Kabura", category: "trener personalny", description: "Trujbuj" },
      { id: 5, name: "Krzyś", category: "influencer", description: "Kasiu wróć" },
      { id: 6, name: "Kononowicz", category: "mleczarz", description: "Mleczko boże" },
      { id: 7, name: "Najman", category: "trener boksu", description: "nauczę Cię klepac nawet w boksie" },
      { id: 8, name: "Svietlana", category: "masażystka", description: "OnlyFans: Svietlanoweczka" },
      { id: 9, name: "Mikołaj", category: "Programista Python", description: 'RIP'},
      { id: 10, name: "Adam", category: "Człowiek Algorytm", description: 'RIP' },
      { id: 11, name: "Maciej", category: "Ten kreatywny", description: 'RIP' },
      { id: 12, name: "Piotr", category: "ten od weba", description: 'RIP' },
      { id: 13, name: "Marcin", category: "ten od OOP", description: 'RIP' },
      { id: 14, name: "Dominik", category: "ten który nas zawiódł", description: '"Ja się Wami zaopiekuję"' }
    ];
    return { specialists }
  };
  constructor() { }


  genId<T extends ISpecialist>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1;
  }
}
