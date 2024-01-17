import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  cardData = [
    {
      id: 1,
      title: 'Kenya Sales Tax API',
      content:
        'Get accurate real-time sales tax rates by ZIP code in Kenya. Provides real-time rates for all (47) KE counties.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
      swaggerUrl:
        'https://gist.githubusercontent.com/i-Krypt/2e1508b7975cc95f919ab445f8c8c113/raw/21b2d415e5fcef7e786ef54a8e9d450de4e3a09a/tax-rates.swagger.json',
    },
    {
      id: 2,
      title: 'Words API',
      content:
        'Words API lets you retrieve information about English words, including definitions, synonyms, rhymes, pronunciation, syllables, and frequency of usage.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
      swaggerUrl:
        'https://gist.githubusercontent.com/i-Krypt/e2a3e1fc3cac0a777f9a20ad70626518/raw/7976ad51af2e31a23aa32e5f890751d196e2a545/word-processing.swagger.json',
    },
    {
      id: 3,
      title: 'Domainr',
      content:
        'The Domainr API lets you programmatically retrieve instant domain search results and availability status.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
      swaggerUrl:
        'https://gist.githubusercontent.com/i-Krypt/4820e55beb33759a648246a82b163891/raw/0208a39b62b1949ac0d63f2a04246d07c20fbef5/domanair.swager.json',
    },
    {
      id: 4,
      title: 'Text Translator',
      content:
        'Translate text to 100+ languages ​. Fast processing, cost saving. Free up to 100,000 characters per month',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
      swaggerUrl:
        'https://gist.githubusercontent.com/i-Krypt/11ef24ce8da40cb4170b1b79d2e4bcc1/raw/b57352ee5e805da8e117c7b4e220ab3b762b2157/text.swagger.json',
    },
    {
      id: 5,
      title: 'Imgur',
      content:
        'Imgur’s API exposes the entire Imgur infrastructure via a standardized programmatic interface. Using Imgur’s API, you can do just about anything you can do on imgur.com.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
      swaggerUrl:
        'https://gist.githubusercontent.com/i-Krypt/79d4395431fb160eb48dd179ad23c054/raw/b2a4b2cd113c42228dab87c0666a6b24ed49905d/imgur.swagger.json',
    },
    {
      id: 6,
      title: 'boundaries-io',
      content:
        'A simple & very fast API that will allow you to integrate multiple GeoJson US boundaries results into your apps and systems.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
      swaggerUrl:
        'https://gist.githubusercontent.com/i-Krypt/ac6e395b165da8b1a83f27400ae440f0/raw/40a150ebbd51a34014fe42f8564376898e210d1f/boundaries.swagger.json',
    },
    {
      id: 7,
      title: 'TheRundown',
      content:
        'The fastest real-time odds, scores, schedules, and stats from major sportsbooks. Click next to see our API documentation for more details.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
      swaggerUrl:
        'https://gist.githubusercontent.com/i-Krypt/0cd227939fbf11dff02d9a9ee6faac75/raw/59ecfb349491474e015dc68b8edc86adf53670c5/rundown.swagger.json',
    },
    {
      id: 8,
      title: 'Recipe-Food-Nutrition',
      content:
        'The spoonacular Recipe - Food - Nutrition API gives you access to thousands of recipes, storebought packaged foods, and chain restaurant menu items.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
      swaggerUrl:
        'https://gist.githubusercontent.com/i-Krypt/21e38f83433f8f11cbc1d4c969e2a9cc/raw/ec64f43f3135449095ea194b6de4d5125e461340/food-nutrition.swagger.json',
    },
    {
      id: 9,
      title: 'Email Verifier',
      content:
        'Validate email addresses in real-time. Make sure a mailbox really exists.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
      swaggerUrl:
        'https://gist.githubusercontent.com/i-Krypt/3673d646075f44b1733a82ed320cd9f7/raw/47a64f29ba14c6b38aae3798789637af62122b8d/emal-verifier.swagger.json',
    },
    {
      id: 10,
      title: 'Crunchbase',
      content:
        'Build powerful applications and integrate Crunchbase into your web and mobile applications with the REST API.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
      swaggerUrl:
        'https://gist.githubusercontent.com/i-Krypt/d110bf30753af937589b86908ad707cc/raw/88ed8a440ee983b404721189a11f69e279178a8f/cruncbase.swagger.json',
    },
  ];

  //api utilization
  getUtilizationData(): {
    timestamp: string;
    requests: number;
    errors: number;
    responseTime: number;
  }[] {
    return [
      { timestamp: '2022-05-10', requests: 467, errors: 5, responseTime: 150 },
      { timestamp: '2022-05-11', requests: 576, errors: 8, responseTime: 180 },
      { timestamp: '2022-05-12', requests: 572, errors: 2, responseTime: 120 },
      { timestamp: '2022-05-13', requests: 79, errors: 1, responseTime: 200 },
      { timestamp: '2022-05-14', requests: 92, errors: 3, responseTime: 170 },
      { timestamp: '2022-05-15', requests: 574, errors: 6, responseTime: 160 },
      { timestamp: '2022-05-16', requests: 573, errors: 4, responseTime: 140 },
      { timestamp: '2022-05-17', requests: 576, errors: 7, responseTime: 190 },
    ];
  }
}
