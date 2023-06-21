import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AppEventService } from 'src/app/core/services/app-event.service';

@Component({
  selector: 'app-track-player',
  templateUrl: './track-player.component.html',
  styleUrls: ['./track-player.component.scss'],
})
export class TrackPlayerComponent implements OnInit {
  @Input() track: any;
  selectedTrack: any;
  @ViewChild('audioElement') audioElement: any;
  isPlaying = false;
  pageMenuSubscription: Subscription = this.appService.subscribe(
    'updateSelectedTrack',
    (data) => {
      const {
        content: { title },
      } = data;

      if (this.track.title !== title) {
        this.stopAudio();
      }
    }
  );

  constructor(private appService: AppEventService) {}

  ngOnInit(): void {}

  stopAudio() {
    this.audioElement.nativeElement.pause();
  }

  onAudioPlayed() {
    this.appService.broadcast({
      name: 'updateSelectedTrack',
      content: {
        title: this.track.title,
      },
    });
  }
}
