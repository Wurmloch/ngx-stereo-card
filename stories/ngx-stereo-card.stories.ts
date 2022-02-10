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
    title: 'Default',
    subtitle: 'This is the default card',
  },
  template: `<ngx-stereo-card [title]="title" [subtitle]="subtitle"></ngx-stereo-card>`,
});
export const Default = Template.bind({});
