import { moduleMetadata, storiesOf } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { NgxStereoCardComponent } from '../projects/ngx-stereo-card/src/lib/ngx-stereo-card.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'ngx-stereo-card',
  component: NgxStereoCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [NgxStereoCardComponent],
      imports: [CommonModule],
    }),
  ],
};

const Template: Story<NgxStereoCardComponent> = () => ({
  component: NgxStereoCardComponent,
  props: {
    width: 400,
    intensity: 0.05,
    customStyle: {
      background: '#f7f7f7',
    },
  },
  template: `
  <ngx-stereo-card
    [width]="width"
    [intensity]="intensity"
    [customStyle]="customStyle">
    <div stereo-card-footer>
      <a href="#">My Custom Link</a>
    </div>
    <div stereo-card-content>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
    </div>
    <div stereo-card-header>
      <h2>Default Title</h2>
      <h4>Subtitle</h4>
    </div>
  </ngx-stereo-card>`,
});
export const Default = Template.bind({});
