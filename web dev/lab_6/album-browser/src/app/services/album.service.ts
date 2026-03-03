import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private api = 'https://jsonplaceholder.typicode.com';
  private albumsSubject = new BehaviorSubject<Album[]>([]);

  constructor(private http: HttpClient) {
    this.loadAlbums();
  }

  private loadAlbums() {
    this.http.get<Album[]>(`${this.api}/albums`).subscribe(albums => {
      this.albumsSubject.next(albums);
    });
  }

  getAlbums(): Observable<Album[]> {
    return this.albumsSubject.asObservable();
  }

  getAlbum(id: number): Observable<Album> {
    const localAlbum = this.albumsSubject.value.find(a => a.id === id);
    if (localAlbum) {
      return new Observable(observer => {
        observer.next(localAlbum);
        observer.complete();
      });
    } else {
      return this.http.get<Album>(`${this.api}/albums/${id}`);
    }
  }

  getPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.api}/albums/${albumId}/photos`);
  }
  updateAlbum(updatedAlbum: Album): Observable<Album> {
    return this.http.put<Album>(`${this.api}/albums/${updatedAlbum.id}`, updatedAlbum);
  }

  updateLocalAlbum(updatedAlbum: Album) {
    const currentAlbums = this.albumsSubject.value;
    const index = currentAlbums.findIndex(a => a.id === updatedAlbum.id);
    if (index !== -1) {
      currentAlbums[index] = updatedAlbum;
      this.albumsSubject.next([...currentAlbums]);
    }
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/albums/${id}`);
  }
}