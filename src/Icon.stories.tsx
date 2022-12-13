import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  // BaseIcon,
  CountryIcon,
  BrowserIcon,
  SocialIcon,
  MessengerIcon,
  CodingIcon,
  ProductivityIcon,
  DesignIcon,
  OSIcon,
  VideoIcon,
  MusicIcon,
  FinanceIcon,
  OtherIcon,
} from './Icon';
import * as CountryIconNames from './country';
import * as BrowserIconNames from './browser';
import * as SocialIconNames from './social';
import * as MessengerIconNames from './messenger';
import * as CodingIconNames from './coding';
import * as ProductivityIconNames from './productivity';
import * as DesignIconNames from './design';
import * as OSIconNames from './os';
import * as VideoIconNames from './video';
import * as MusicIconNames from './music';
import * as FinanceIconNames from './finance';
import * as OtherIconNames from './other';

export default {
  title: 'Bamerf/Icon',
  component: CodingIcon,
} as ComponentMeta<typeof CodingIcon>;

// const BaseTemplate: ComponentStory<typeof CodingIcon> = (args) => (
//   <BaseIcon {...args} />
// );

// export const BaseIcons = BaseTemplate.bind({});
// BaseIcons.args = {
//   name: 'Activity',
//   size: 64,
//   color: 'black',
// };

// BaseIcons.argTypes = {
//   name: {
//     options: Object.keys(BaseIconsNames),
//     control: { type: 'select' },
//   },
// };

const CountryTemplate: ComponentStory<typeof CountryIcon> = (args) => (
  <CountryIcon {...args} />
);

export const CountryIcons = CountryTemplate.bind({});
CountryIcons.args = {
  name: 'AF',
  size: 64,
};

CountryIcons.argTypes = {
  name: {
    options: Object.keys(CountryIconNames),
    control: { type: 'select' },
  },
};

const BrowserTemplate: ComponentStory<typeof BrowserIcon> = (args) => (
  <BrowserIcon {...args} />
);

export const BrowserIcons = BrowserTemplate.bind({});
BrowserIcons.args = {
  name: 'FireFox',
  size: 64,
};

BrowserIcons.argTypes = {
  name: {
    options: Object.keys(BrowserIconNames),
    control: { type: 'select' },
  },
};

const SocialTemplate: ComponentStory<typeof SocialIcon> = (args) => (
  <SocialIcon {...args} />
);

export const SocialIcons = SocialTemplate.bind({});
SocialIcons.args = {
  name: 'Facebook',
  size: 64,
};

SocialIcons.argTypes = {
  name: {
    options: Object.keys(SocialIconNames),
    control: { type: 'select' },
  },
};

const MessengerTemplate: ComponentStory<typeof MessengerIcon> = (args) => (
  <MessengerIcon {...args} />
);

export const MessengerIcons = MessengerTemplate.bind({});
MessengerIcons.args = {
  name: 'Telegram',
  size: 64,
};

MessengerIcons.argTypes = {
  name: {
    options: Object.keys(MessengerIconNames),
    control: { type: 'select' },
  },
};

const CodingTemplate: ComponentStory<typeof CodingIcon> = (args) => (
  <CodingIcon {...args} />
);

export const CodingIcons = CodingTemplate.bind({});
CodingIcons.args = {
  name: 'Git',
  size: 64,
};

CodingIcons.argTypes = {
  name: {
    options: Object.keys(CodingIconNames),
    control: { type: 'select' },
  },
};

const ProductivityTemplate: ComponentStory<typeof ProductivityIcon> = (
  args
) => <ProductivityIcon {...args} />;

export const ProductivityIcons = ProductivityTemplate.bind({});
ProductivityIcons.args = {
  name: 'GoogleDrive',
  size: 64,
};

ProductivityIcons.argTypes = {
  name: {
    options: Object.keys(ProductivityIconNames),
    control: { type: 'select' },
  },
};

const DesignTemplate: ComponentStory<typeof DesignIcon> = (args) => (
  <DesignIcon {...args} />
);

export const DesignIcons = DesignTemplate.bind({});
DesignIcons.args = {
  name: 'Dribble',
  size: 64,
};

DesignIcons.argTypes = {
  name: {
    options: Object.keys(DesignIconNames),
    control: { type: 'select' },
  },
};

const OSTemplate: ComponentStory<typeof OSIcon> = (args) => (
  <OSIcon {...args} />
);

export const OSIcons = OSTemplate.bind({});
OSIcons.args = {
  name: 'Ubuntu',
  size: 64,
};

OSIcons.argTypes = {
  name: {
    options: Object.keys(OSIconNames),
    control: { type: 'select' },
  },
};

const VideoTemplate: ComponentStory<typeof VideoIcon> = (args) => (
  <VideoIcon {...args} />
);

export const VideoIcons = VideoTemplate.bind({});
VideoIcons.args = {
  name: 'YouTube',
  size: 64,
};

VideoIcons.argTypes = {
  name: {
    options: Object.keys(VideoIconNames),
    control: { type: 'select' },
  },
};

const MusicTemplate: ComponentStory<typeof MusicIcon> = (args) => (
  <MusicIcon {...args} />
);

export const MusicIcons = MusicTemplate.bind({});
MusicIcons.args = {
  name: 'SoundCloud',
  size: 64,
};

MusicIcons.argTypes = {
  name: {
    options: Object.keys(MusicIconNames),
    control: { type: 'select' },
  },
};

const FinanceTemplate: ComponentStory<typeof FinanceIcon> = (args) => (
  <FinanceIcon {...args} />
);

export const FinanceIcons = FinanceTemplate.bind({});
FinanceIcons.args = {
  name: 'PayPal',
  size: 64,
};

FinanceIcons.argTypes = {
  name: {
    options: Object.keys(FinanceIconNames),
    control: { type: 'select' },
  },
};

const OtherTemplate: ComponentStory<typeof OtherIcon> = (args) => (
  <OtherIcon {...args} />
);

export const OtherIcons = OtherTemplate.bind({});
OtherIcons.args = {
  name: 'PlayStation',
  size: 64,
};

OtherIcons.argTypes = {
  name: {
    options: Object.keys(OtherIconNames),
    control: { type: 'select' },
  },
};
