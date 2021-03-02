import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Specialist } from './specialist';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const specialists = [
      { id: 1, name: "Janusz", category: "hydraulik", description: "Przepcham Ci każdą rurę", img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 2, name: "Marian", category: "fryzjer", description: "Boki krótko, góra bez zmian", img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 3, name: "Ania", category: "sprzątaczka", description: "Mogę przyjść w stroju pokojówki", img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 4, name: "Kabura", category: "trener personalny", description: "Trujbuj", img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 5, name: "Krzyś", category: "influencer", description: "Kasiu wróć", img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 6, name: "Kononowicz", category: "Milkman", description: "Ja jestem mlecznym człowiekiem, mleko lubię", img: 'https://bi.im-g.pl/im/1c/10/15/z22089500V,Krzysztof-Kononowicz.jpg' },
      { id: 7, name: "Najman", category: "Boxing Coach", description: "nauczę Cię klepac nawet w boksie", img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 8, name: "Svietlana", category: "Masseuse", description: "OnlyFans: Svietlanoweczka", img: 'https://i.pinimg.com/originals/1c/f7/9f/1cf79f2b20a2ce1ab4c78656062af673.jpg' },
      { id: 9, name: "Mikołaj", category: "Python Developer", description: 'RIP', img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj'},
      { id: 10, name: "Adam", category: "Algorithmics", description: 'RIP', img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 11, name: "Maciej", category: "Angular Developer", description: 'RIP', img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 12, name: "Piotr", category: "Javascript Developer", description: 'RIP', img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 13, name: "Marcin", category: "C# Developer", description: 'RIP', img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 14, name: "Tycjan", category: "C# Developer", description: 'Suza >> Amras', img: 'https://images.theconversation.com/files/225151/original/file-20180627-112641-idgmo2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop' }
    ];
    return { specialists }
  };
  constructor() { }


  genId<T extends Specialist>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1;
  }
}
