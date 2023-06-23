export interface Artist {
  id: number;
  link: string;
  name: string;
  picture_big: string;
  picture_small?: string;
  nb_album?: number;
  nb_fan?: number;
}

export interface Track {
  id: number;
  title: string;
  title_short: string;
  preview: string;
  duration: number;
  link: string;
  album: Album;
  durationString?: string;
  contributors?: Artist[];
  artist?: Artist;
  explicit_content_lyrics?: boolean;
}

export interface Album {
  title: string;
  title_short: string;
  preview: string;
  duration: number;
  explicit_lyrics: boolean;
  durationString?: string;
  cover?: string;
  cover_big?: string;
  cover_medium?: string;
  release_date?: string;
}
