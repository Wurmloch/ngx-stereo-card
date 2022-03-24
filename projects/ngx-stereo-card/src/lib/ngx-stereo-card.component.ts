import {
  Component,
  ElementRef,
  Input,
  Output,
  Renderer2,
  ViewChild,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'ngx-stereo-card',
  templateUrl: './ngx-stereo-card.component.html',
  styleUrls: ['./ngx-stereo-card.component.scss'],
})
export class NgxStereoCardComponent {
  @ViewChild('cardWrapper') cardWrapper!: ElementRef<HTMLElement>;
  @ViewChild('stereoCard') stereoCard!: ElementRef<HTMLElement>;

  @Input() width?: number;
  @Input() height?: number;
  @Input() perspective: number = 500;

  @Input() intensity: number = 0.1;
  @Input() towardsMouse: boolean = false;
  @Input() expand: boolean = true;
  @Input() clickable: boolean = true;

  @Input() customStyle = {};
  @Input() customClasses: string | string[] = []

  @Output() cardClicked: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();

  constructor(private renderer: Renderer2) {}

  onMouseMove(event: MouseEvent) {
    const xDeg =
      (this.towardsMouse ? 1 : -1) *
      (this.cardWrapper.nativeElement.offsetWidth / 2 - event.offsetX) *
      this.intensity;
    const yDeg =
      (this.towardsMouse ? -1 : 1) *
      (this.cardWrapper.nativeElement.offsetHeight / 2 - event.offsetY) *
      this.intensity;
    this.setRotation(xDeg, yDeg);
  }

  onMouseLeave() {
    this.resetRotation();
  }

  onClick(event: MouseEvent) {
    if (this.clickable) {
      this.cardClicked.emit(event);
    }
  }

  /**
   * set the card rotation
   * @param xDeg - the rotation on the x axis in degree
   * @param yDeg - the rotation on the y axis in degree
   */
  private setRotation(xDeg: number, yDeg: number): void {
    this.renderer.setStyle(
      this.stereoCard.nativeElement,
      'transform',
      `rotateY(${xDeg}deg) rotateX(${yDeg}deg) ${
        this.expand ? 'scale(1.1)' : ''
      }`
    );
  }

  private resetRotation(): void {
    this.renderer.setStyle(
      this.stereoCard.nativeElement,
      'transform',
      'rotateX(0deg) rotateY(0deg) scale(1)'
    );
  }
}
