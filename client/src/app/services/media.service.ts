import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Media {
  id: number;
  mediaType: string;
  name: string;
  description: string;
  rating: number;
  review: string;
}

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private mediaList: Media[] = [
    {
      id: 1,
      mediaType: 'Movie',
      name: 'Mean Girls',
      description: 'A home-schooled teen navigates high school and clashes with a popular clique known as The Plastics.',
      rating: 3,
      review: 'A funny teen comedy about high school cliques and fitting in.'
    },
    {
      id: 2,
      mediaType: 'TV Show',
      name: 'FRIENDS',
      description: 'Six friends navigate life and love in New York City.',
      rating: 5,
      review: 'A feel-good sitcom, perfect for laughs and a lighthearted escape.'
    }
  ];

  getAll(): Observable<Media[]> {
    return of(this.mediaList);
  }

  getById(id: number): Observable<Media | undefined> {
    return of(this.mediaList.find(m => m.id === id));
  }

  add(media: Media): Observable<void> {
    media.id = this.mediaList.length
      ? Math.max(...this.mediaList.map(m => m.id)) + 1
      : 1;
    this.mediaList.push(media);
    return of(void 0);
  }

  update(id: number, media: Media): Observable<void> {
    const index = this.mediaList.findIndex(m => m.id === id);
    if (index !== -1) {
      this.mediaList[index] = { ...media, id };
    }
    return of(void 0);
  }
}
