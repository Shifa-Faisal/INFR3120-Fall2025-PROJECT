import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MediaService, Media } from '../../services/media.service';

@Component({
  selector: 'app-media-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './media-edit.html',
  styleUrl: './media-edit.css'
})
export class MediaEditComponent implements OnInit {
  media: Media | undefined;

  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mediaService.getById(id).subscribe(m => (this.media = m));
  }

  onSubmit() {
    if (!this.media) return;
    this.mediaService.update(this.media.id, this.media).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
