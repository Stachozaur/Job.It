import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Specialist } from './specialist';
import { Task } from './ITasks';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const specialists = [
      {
        id: 1, name: "Janusz", category: "Hydraulik", description: "Kompleksowe usługi hydrauliczne", longDescription: ["– Pogotowie hydrauliczne 24h", "– Montaż i naprawa armatury łazienkowe", "– Udrażnianie rur i kanalizacji", "– Montaże i wymiany hydrauliczne", "– Czyszczenie kanalizacji i odpływów", "– Naprawa WC", "– Naprawa i wymiana kranów oraz natrysków", "– Podłączanie pralek i zmywarek", "– Modernizacja już istniejących instalacji hydraulicznych", "– Projektowanie nowych instalacji hydraulicznych", "– Drobne prace hydrauliczne"], img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj', adress: "https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NyJo8nmwODZm5IDASbhGBEngXkXsMus &q=Grzybowska10,Warszawa" }, 
      {
        id: 2, name: "Marian", category: "Fryzjer", description: "Salon fryzjerski na ul. Pięknej", longDescription: "Boki króto, góra długo? Nie ma sprawy, ale ombre i trwała to także moja wizytówka!", img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj'},
      { id: 3, name: "Ania", category: "Prawnik", description: "Pomoc prawna", longDescription: "Sporządzanie i negocjowanie umów najmu, reprezentowanie wynajmujących i najemców, badania prawne (audyty) nieruchomości, reprezentacja w sporach ze wspólnotami mieszkaniowymi, umowy deweloperskie.", img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 4, name: "Kabura", category: "trener personalny", description: "Treningi oraz naprawa ciała", longDescription: "Profesjonalny trening pod trójbój, powerlifting, strongman. Diagnoza oraz wzmacnianie słabych ogniw, rozpisany trening, prowadzenie przez 3 miesiące!", img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 5, name: "Krzyś", category: "influencer", description: "Ładne fotki na insta bez kasi", longDescription: "Profesjonalne zajęcia z robienia ładnych zdjęć, ale bez większego pomysłu na życie (możliwość wstawienia 2 zdjęć ze mną na story!)", img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 6, name: "Kononowicz", category: "Milkman", description: "Ja jestem mlecznym człowiekiem, mleko lubię", longDescription: "Nie straszne mi żadne mleko! Może i w wyborach mi nie pykło, ale mleko Twojej krowy przyjmę jak swoje!", img: 'https://bi.im-g.pl/im/1c/10/15/z22089500V,Krzysztof-Kononowicz.jpg' },
      { id: 7, name: "Marcin N", category: "Boxing Coach", description: "nauka klepania", longDescription: "nauczę Cię klepac nawet w boksie", img: 'https://i.wpimg.pl/O/730x0/m.fitness.wp.pl/new-project-10-daa72fd1c2a3c0dae.png' },
      { id: 8, name: "Svietlana", category: "Masseuse", description: "Treapia manualna", longDescription: "HiropraktykaTerapia manualna, fala uderzeniowa, laser wysokoenergetyczny, elektro-prądy, pole magnet. ultradźwięki, ćwiczenia korekcyjne, masaż, kinesiotaping", img: 'https://i.pinimg.com/originals/1c/f7/9f/1cf79f2b20a2ce1ab4c78656062af673.jpg' },
      { id: 9, name: "Mikołaj", category: "Python Developer", description: "Aplikacje Pythonowe", longDescription: 'Podejmę się stworzenia aplikacji bazodanowych, tworzenia backendu stron WWW, tworzenia oprogramowania dla SI oraz skryptów systemowych i automatyzujących pracę.', img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj'},
      { id: 10, name: "Adam", category: "Algorithmics", description: "Aplikacje Javove z użyciem algorytmów", longDescription: 'Programowanie dynamiczne (programowanie algorytmów do rozwiązywania zagadnień optymalizacyjnych)', img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 11, name: "Maciej", category: "Angular Developer", description:"Sterowniki do urządzeń muzycznych", longDescription: 'Programowanie sterowników do urządzeń muzycznych', img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 12, name: "Piotr", category: "Javascript Developer", description: "Strony i aplikacje webowe", longDescription: 'Tworzenie stron WWW, zapewniając interaktywność stron oraz obsługę zdarzeń, walidacji formularzy czy budowanie elementów nawigacyjnych. ', img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 13, name: "Marcin", category: "C# Developer",  description: "Aplikacje Obiektowe C#", longDescription: 'Programowanie obiektowe C#, zaawansowane aplikacje .NET oraz Xamarin', img: 'https://yt3.ggpht.com/ytc/AAUvwngIWg09UzL7PK4Tewj8g-JjuLC_V2x1_egyMDtYcQ=s900-c-k-c0x00ffffff-no-rj' },
      { id: 14, name: "Tycjan", category: "C# Developer", description: 'Suza >> Amras', longDescription: '.Netowe aplikacjie oraz C#, ale i tak nie znajdę czasu by wam odpisać.', img: 'https://images.theconversation.com/files/225151/original/file-20180627-112641-idgmo2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop' },
    ];

    const tasks = [
      {id: 1, name: "Zabij Koluszkowskiego Orangutana", category: "Murder", price: 500},
      {
        id: 2,
        name: "bridal hairstyle",
        category: "hairdress",
        description: "I need a hair stylist to do my hair for a wedding.",
        price: 40,
        estimatedTime: 120,
        category_img: "./assets/images/fryzjertransparent.png"
      },
      {
        id: 3,
        name: "powerlifting training",
        category: "sport",
        description: "Looking for powerlifting trainer for few sessions in GainGym",
        price: 50,
        estimatedTime: 180,
        category_img: "./assets/images/silkatransparent.png"
      },
      {
        id: 5,
        name: "dog walking",
        category: "animals",
        description: "I need someone to walk my dog for 40 minutes",
        price: 20,
        estimatedTime: 40,
        category_img: "./assets/images/pieseutransparent.png"
      },
    ]
    return { specialists, tasks }
  };
  constructor() { }


  genId<T extends Specialist | Task >(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1;
  }
}
