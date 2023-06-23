import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AppEventService } from 'src/app/core/services/app-event.service';
import { Track } from 'src/utils';

@Component({
  selector: 'app-track-player',
  templateUrl: './track-player.component.html',
  styleUrls: ['./track-player.component.scss'],
})
export class TrackPlayerComponent implements OnInit {
  @Input() track!: Track;
  selectedTrack: any;
  @ViewChild('audioElement') audioElement!: ElementRef<HTMLAudioElement>;
  isPlaying = false;
  pageMenuSubscription: Subscription = this.appService.subscribe(
    'updateSelectedTrack',
    (data) => {
      const {
        content: { title },
      } = data;

      if (this.track.title !== title) {
        this.stopAudio();
        this.isPlaying = false;
      }
    }
  );

  constructor(private appService: AppEventService) {}

  ngOnInit(): void {}

  playAudio() {
    this.audioElement.nativeElement.play();
    this.isPlaying = true;
  }

  stopAudio() {
    this.audioElement.nativeElement.pause();
    this.isPlaying = false;
  }

  downloadAudio() {
    fetch(this.track.preview)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${this.track.title_short} - ${this.track.artist?.name} - Artista Preview.mp3`;
        link.click();
        URL.revokeObjectURL(url);
      });
  }

  onAudioPlayed() {
    this.appService.broadcast({
      name: 'updateSelectedTrack',
      content: {
        title: this.track.title,
      },
    });
  }

  onAudioEnded() {
    this.isPlaying = false;
  }
}
