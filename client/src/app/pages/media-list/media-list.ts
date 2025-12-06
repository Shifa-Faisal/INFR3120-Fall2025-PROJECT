import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MediaService, Media } from '../../services/media.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-media-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './media-list.html',
  styleUrl: './media-list.css'
})
export class MediaListComponent implements OnInit {
  mediaList: Media[] = [];

  constructor(
    private mediaService: MediaService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.mediaService.getAll().subscribe(list => (this.mediaList = list));
  }
}
