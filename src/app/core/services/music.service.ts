import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private artistUrl = `${environment.apiUrl}/artist`;
  private albumUrl = `${environment.apiUrl}/album`;
  private trackUrl = `${environment.apiUrl}/track`;

  constructor(private http: HttpClient) {}

  getArtists(artistName: string): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('q', `${artistName}`).append('limit', 20);

    return this.http.get(`${environment.apiUrl}/search/artist/autocomplete`, {
      params: queryParams,
    });
  }

  getProfile(artistId: number): Observable<any> {
    return this.http.get(`${this.artistUrl}/${artistId}`);
  }

  getAlbums(artistId: number): Observable<any> {
    return this.http.get(`${this.artistUrl}/${artistId}/albums`);
  }

  getTopTracks(artistId: number): Observable<any> {
    return this.http.get(`${this.artistUrl}/${artistId}/top?limit=10`);
  }

  getAlbumDetails(albumId: number): Observable<any> {
    return this.http.get(`${this.albumUrl}/${albumId}`);
  }

  getTrackDetails(trackId: number): Observable<any> {
    return this.http.get(`${this.trackUrl}/${trackId}`);
  }
}
