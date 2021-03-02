import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Specialist } from './specialist';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const specialists = [
      {
        id: 1, name: "Janusz", category: "Hydraulik", description: "Kompleksowe usługi hydrauliczne",
        longDescription: [
          "Pogotowie hydrauliczne 24h",
         "Montaż i naprawa armatury łazienkowe", "Udrażnianie rur i kanalizacji",
         "Montaże i wymiany hydrauliczne", "Czyszczenie kanalizacji i odpływów",  "Naprawa WC",
         "Naprawa i wymiana kranów oraz natrysków", "Podłączanie pralek i zmywarek", 
         "Modernizacja już istniejących instalacji hydraulicznych", "Projektowanie nowych instalacji hydraulicznych", 
         "Drobne prace hydrauliczne"
        ]
      },
      { id: 2, name: "Marian", category: "Fryzjer", description: "Salon fryzjerski na ul. Pięknej", longDescription: "Boki króto, góra długo? Nie ma sprawy, ale ombre i trwała to także moja wizytówka!" },
      { id: 3, name: "Ania", category: "Prawnik", description: "Pomoc prawna", longDescription: "Sporządzanie i negocjowanie umów najmu, reprezentowanie wynajmujących i najemców, badania prawne (audyty) nieruchomości, reprezentacja w sporach ze wspólnotami mieszkaniowymi, umowy deweloperskie." },
      { id: 4, name: "Kabura", category: "Trener personalny", description: "Treningi oraz naprawa ciała", longDescription: "Profesjonalny trening pod trójbój, powerlifting, strongman. Diagnoza oraz wzmacnianie słabych ogniw, rozpisany trening, prowadzenie przez 3 miesiące!" },
      { id: 5, name: "Krzyś", category: "Influencer", description: "Ładne fotki na insta bez kasi", longDescription: "Profesjonalne zajęcia z robienia ładnych zdjęć, ale bez większego pomysłu na życie (możliwość wstawienia 2 zdjęć ze mną na story!)" },
      { id: 6, name: "Kononowicz", category: "Mleczarz", description: "Mleczko boże", longDescription: "Nie straszne mi żadne mleko! Może i w wyborach mi nie pykło, ale mleko Twojej krowy przyjmę jak swoje!" },
      { id: 7, name: "Marcin N", category: "Trener boksu", description: "nauka klepania", longDescription: "nauczę Cię klepac nawet w boksie" },
      { id: 8, name: "Maria", category: "Fizioterapeutka", description: "Treapia manualna", longDescription: "HiropraktykaTerapia manualna, fala uderzeniowa, laser wysokoenergetyczny, elektro-prądy, pole magnet. ultradźwięki, ćwiczenia korekcyjne, masaż, kinesiotaping" },
      { id: 9, name: "Mikołaj", category: "Programista Python", description: "Aplikacje Pythonowe", longDescription: 'Podejmę się stworzenia aplikacji bazodanowych, tworzenia backendu stron WWW, tworzenia oprogramowania dla SI oraz skryptów systemowych i automatyzujących pracę.'},
      { id: 10, name: "Adam", category: "Java Specialist", description: "Aplikacje Javove z użyciem algorytmów", longDescription: 'Programowanie dynamiczne (programowanie algorytmów do rozwiązywania zagadnień optymalizacyjnych)' },
      { id: 11, name: "Maciej", category: "Muzyk Programista", description:"Sterowniki do urządzeń muzycznych", longDescription: 'Programowanie sterowników do urządzeń muzycznych' },
      { id: 12, name: "Piotr", category: "Web Developer", description: "Strony i aplikacje webowe", longDescription: 'Tworzenie stron WWW, zapewniając interaktywność stron oraz obsługę zdarzeń, walidacji formularzy czy budowanie elementów nawigacyjnych. ' },
      { id: 13, name: "Marcin", category: "C# Specialist", description: "Aplikacje Obiektowe C#", longDescription: 'Programowanie obiektowe C#, zaawansowane aplikacje .NET oraz Xamarin' },
      { id: 14, name: "Dominik", category: "C# Specialist", description: "Nieodpisywanie na Discord", longDescription: '.Netowe aplikacjie oraz C#, ale i tak nie znajdę czasu by wam odpisać.' }
    ];
    return { specialists }
  };
  constructor() { }


  genId<T extends Specialist>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1;
  }
}
