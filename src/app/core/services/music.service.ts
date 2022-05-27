import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private endpoint = `${environment.apiUrl}/artist`;

  constructor(private http: HttpClient) {}

  getArtists(artistName: string): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('q', `${artistName}`).append('limit', 20);

    return this.http.get(`${environment.apiUrl}/search/artist/autocomplete`, {
      params: queryParams,
    });
  }

  getProfile(artistId: number): Observable<any> {
    return this.http.get(`${this.endpoint}/${artistId}`);
  }

  getAlbums(artistId: number): Observable<any> {
    return this.http.get(`${this.endpoint}/${artistId}/albums`);
  }

  getTopTracks(artistId: number): Observable<any> {
    return this.http.get(`${this.endpoint}/${artistId}/top`);
  }
}
