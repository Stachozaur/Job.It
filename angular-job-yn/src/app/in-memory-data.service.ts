import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Specialist} from './specialist';
import {Task} from './ITasks';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const specialists = [
      {
        id: 1,
        name: "Mario Pipeman",
        category: "Plumber",
        description: "Complex plumbing services",
        longDescription: [" -24h plumbing emergency service",
          "- Assembly and repair of bathroom fittings",
          "- Unblocking pipes and drains",
          "- Plumbing assemblies and replacements",
          "- Cleaning drains and drains",
          "- Repair of toilets",
          "- Repair and replacement of taps and showers",
          "- Connecting washing machines and dishwashers",
          "- Modernization of already existing plumbing systems",
          "- Design of new plumbing systems",
          "- Minor plumbing works"],
        img: 'https://cdn.discordapp.com/attachments/649975727424536606/817127056810180628/lynhoR4rVnDGmQc3Wvd8zZGXwX8U-6T3--lZPZPLzS1LKs91BdVBOaEWX6tDBoZFpUurVG9M9kcsfvVepb_rAKVONhv3kIiFKs6_.png',

      }, 
      {
        id: 2,
        name: "Luigi Scissorio",
        category: "Barber",
        description: "Seduce everyone with your magnificent hair and beard",
        longDescription: ["- haircut",
          "- hair styling",
          "- coloring: regular and with reflections",
          "- balayage",
          "- combing",
          "- hairdos"],
        img: 'https://cdn.discordapp.com/attachments/649975727424536606/817128207022817330/main-qimg-725a9f7a0b48180bb198dc6d7f86f142.png'
      },
      {
        id: 3,
        name: "Anna Freeman",
        category: "Lawyer",
        description: "Professional Lawyer",
        longDescription: ["- Drafting and negotiating lease agreements",
        "- Representation of landlords and tenants",
        "- Legal research (audits) of real estate",
        "- Representation in disputes with housing communities",
        "- Development agreements"],
        img: 'https://media.discordapp.net/attachments/649975727424536606/817129052464611328/lawyer-personal-branding-photoshoot-Newcastle-corporate-photographer-Woman.png?width=372&height=559'
      },
      {
        id: 4,
        name: "Eddie Hall",
        category: "Personal Trainer",
        description: "Workouts and body repair",
        longDescription: ["-Professional powerlifting training",
          "-strongman training",
          "-Diagnosis and strengthening of weak joints",
          "-Training schedule",
          "-Guidance for 3 months!"],
        img: 'https://cdn.discordapp.com/attachments/649975727424536606/817076252082569236/74918431_806277069833066_1037290432263880704_n.png'
      },
      {
        id: 5,
        name: "Christopher Stalkman",
        category: "Photographer",
        description: "Make your instagram great again ;)",
        longDescription: ["- Wedding Reportage",
          "- Wedding Venue",
          "- International wedding session",
          "- Engagement session",
          "- Elopment",
          "- Engagement session",
          "- Family pictures"],
        img: 'https://images-ext-1.discordapp.net/external/BUjPevJ4EPpyNzM8TBkvG08Td9xsPXrU_A6zWwPbJsU/https/media.voguebusiness.com/photos/5e875d43a469b200089f6420/master/w_3000%2Cc_limit/CORONAVIRUS-EFFECTS-ON-CAMPAIGNS-VOGUEBUS-Jonathan-Daniel-Pryce-april-20-story-inline-4.jpg?width=839&height=559'
      },
      {
        id: 6,
        name: "Morgan Treeman",
        category: "Gardener",
        description: "Personal Gardening Services",
        longDescription: ["- Winter protection of plants",
          "- Green area maintenance",
          "- Irrigation systems",
          "- Garden design and creation",
          "- Snow removal"],
        img: 'https://ca-times.brightspotcdn.com/dims4/default/fd47e4b/2147483647/strip/true/crop/5472x3648+0+0/resize/2400x1600!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F01%2Fd3%2F79950745479f92e6a1c148f97e4d%2Fla-photos-1staff-563851-la-hm-ron-finley-gangsta-gardener2-mam.jpg'
      },
     
    ];

    const tasks = [
      {
        id: 1,
        name: "Bridal Hairstyle",
        category: "Hairstyle",
        description: "I need a hair stylist to do my hair for a wedding.",
        price: 40,
        estimatedTime: 120,
        category_img: 'cut',
        color: "purple"
      },
      {
        id: 2,
        name: "Powerlifting Training",
        category: "Sport",
        description: "Looking for powerlifting trainer for few sessions in GainGym",
        price: 50,
        estimatedTime: 180,
        category_img: 'dumbbell',
        color: "red"
      },
      {
        id: 3,
        name: "dog walking",
        category: "animals",
        description: "I need someone to walk my dog for 40 minutes",
        price: 20,
        estimatedTime: 40,
        category_img: 'dog',
        color: "green"
      },
    ];
    return {specialists, tasks};
  };

  constructor() {
  }


  genId<T extends Specialist | Task>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1;
  }
}
