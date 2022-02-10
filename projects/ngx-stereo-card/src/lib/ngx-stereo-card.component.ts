import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-stereo-card',
  templateUrl: './ngx-stereo-card.component.html',
  styleUrls: ['./ngx-stereo-card.component.scss'],
})
export class NgxStereoCardComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle?: string;

  constructor() {}

  ngOnInit(): void {}
}
