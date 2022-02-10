[![ngx-stereo-card CI](https://github.com/Wurmloch/ngx-stereo-card/actions/workflows/ci.yml/badge.svg)](https://github.com/Wurmloch/ngx-stereo-card/actions/workflows/ci.yml)

# ngx-stereo-card

`npm i -s ngx-stereo-card`

## How to use it

### import

Import `NgxStereoCardModule` in `app.module.ts` / your module

```ts
import { NgxStereoCardModule } from 'ngx-stereo-card'

@NgModule({
  ...,
  imports: [NgxStereoCardModule],
  ...
```

### include

Use the component `ngx-stereo-card` in your template

```html
<ngx-stereo-card
  (cardClicked)="cardClicked($event)"
  [clickable]="true"
  [expand]="true"
  [towardsMouse]="false"
  [perspective]="500"
  [width]="300"
  [height]="200"
  [intensity]="0.1"
  [customStyle]="{
    backgroundColor: 'red',
    borderRadius: '10px'
  }"
>
  <div stereo-card-header>...</div>
  <div stereo-card-content>...</div>
  <div stereo-card-footer>...</div>
</ngx-stereo-card>
```
