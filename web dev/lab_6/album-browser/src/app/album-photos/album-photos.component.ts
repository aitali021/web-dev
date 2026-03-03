import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading = true;
  albumId: number;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  this.albumService.getPhotos(this.albumId).subscribe({
    next: (data) => {

      this.photos = data.map((photo, index) => ({
        id: photo.id,
        albumId: photo.albumId,
        title: photo.title,
        url: photo.url,
        thumbnailUrl: `https://picsum.photos/150/150?random=${index}`
      }));
      this.loading = false;
    },
    error: (err) => {
      console.error('Error:', err);
      this.loading = false;
    }
  });
}
}