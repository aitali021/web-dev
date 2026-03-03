import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  editedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadAlbum(id);
  }

  loadAlbum(id: number) {
    this.albumService.getAlbum(id).subscribe({
      next: (data: Album) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error:', err);
        this.loading = false;
      }
    });
  }

  saveTitle() {
    if (this.album) {
      const updatedAlbum: Album = { ...this.album, title: this.editedTitle };
      
      // API-ға жіберу
      this.albumService.updateAlbum(updatedAlbum).subscribe({
        next: (data: Album) => {
          this.album = data;
          this.editedTitle = data.title;
          // Жергілікті жерде де жаңарту
          this.albumService.updateLocalAlbum(data);
          console.log('Album updated:', data);
        },
        error: (err: any) => console.error('Error:', err)
      });
    }
  }
}