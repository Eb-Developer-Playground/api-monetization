import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  cardData = [
    {
      id: 1,
      title: 'Text Generation',
      content:
        'The spoonacular Recipe - Food - Nutrition API gives you access to thousands of recipes, storebought packaged foods, and chain restaurant menu items.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
    },
    {
      id: 2,
      title: 'Words API',
      content:
        'Words API lets you retrieve information about English words, including definitions, synonyms, rhymes, pronunciation, syllables, and frequency of usage.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
    },
    {
      id: 3,
      title: 'Domainr ',
      content:
        'The Domainr API lets you programmatically retrieve instant domain search results and availability status.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
    },
    {
      id: 4,
      title: 'Text-Processing',
      content:
        'Sentiment analysis, stemming and lemmatization, part-of-speech tagging and chunking, phrase extraction and named entity recognition.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
    },
    {
      id: 5,
      title: 'Imgur',
      content:
        'Imgur’s API exposes the entire Imgur infrastructure via a standardized programmatic interface. Using Imgur’s API, you can do just about anything you can do on imgur.com.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
    },
    {
      id: 6,
      title: 'boundaries-io',
      content:
        'A simple & very fast API that will allow you to integrate multiple GeoJson US boundaries results into your apps and systems.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
    },
    {
      id: 7,
      title: 'TheRundown',
      content:
        'The fastest real-time odds, scores, schedules, and stats from major sportsbooks. Click next to see our API documentation for more details.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
    },
    {
      id: 8,
      title: 'Telize',
      content:
        'Telize offers a JSON IP and GeoIP REST API allowing to get a visitor IP address and to query location information from any IP address. It outputs JSON-encoded IP geolocation data, and supports both Cross-origin resource sharing (CORS) and JSONP.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
    },
    {
      id: 9,
      title: 'Email Verifier',
      content:
        'Validate email addresses in real-time. Make sure a mailbox really exists.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
    },
    {
      id: 10,
      title: 'Crunchbase',
      content:
        'Build powerful applications and integrate Crunchbase into your web and mobile applications with the REST API.',
      tags: ['Verified'],
      actions: ['link', 'navigate_next'],
    },
  ];

  constructor(private router: Router) {}

  apiDocumentation(id: number) {
    this.router.navigate(['/documentation', id]);
  }
}
