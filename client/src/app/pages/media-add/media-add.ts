import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MediaService, Media } from '../../services/media.service';

@Component({
  selector: 'app-media-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './media-add.html',
  styleUrl: './media-add.css'
})
export class MediaAddComponent {
  media: Media = {
    id: 0,
    mediaType: '',
    name: '',
    description: '',
    rating: 1,
    review: ''
  };

  constructor(
    private mediaService: MediaService,
    private router: Router
  ) {}

  onSubmit() {
    this.mediaService.add(this.media).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
