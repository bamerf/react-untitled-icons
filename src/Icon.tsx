import type { FC } from 'react';
import type {
  // BaseProps,
  CountryProps,
  BrowserProps,
  SocialProps,
  MessengerProps,
  CodingProps,
  ProductivityProps,
  DesignProps,
  OSProps,
  VideoProps,
  MusicProps,
  FinanceProps,
  OtherProps,
} from './types';
import * as BaseIcons from './base';
import * as CountryIcons from './country';
import * as BrowserIcons from './browser';
import * as SocialIcons from './social';
import * as MessengerIcons from './messenger';
import * as CodingIcons from './coding';
import * as ProductivityIcons from './productivity';
import * as DesignIcons from './design';
import * as OSIcons from './os';
import * as VideoIcons from './video';
import * as MusicIcons from './music';
import * as FinanceIcons from './finance';
import * as OtherIcons from './other';

// export const BaseIcon: FC<BaseProps> = ({ name, size, color }) => {
//   const Component = BaseIcons[name];
//   return <Component size={size} color={color} />;
// };

export const CountryIcon: FC<CountryProps> = ({ name, size }) => {
  const Component = CountryIcons[name];
  return <Component size={size} />;
};

export const BrowserIcon: FC<BrowserProps> = ({ name, size }) => {
  const Component = BrowserIcons[name];
  return <Component size={size} />;
};

export const SocialIcon: FC<SocialProps> = ({ name, size }) => {
  const Component = SocialIcons[name];
  return <Component size={size} />;
};

export const MessengerIcon: FC<MessengerProps> = ({ name, size }) => {
  const Component = MessengerIcons[name];
  return <Component size={size} />;
};

export const CodingIcon: FC<CodingProps> = ({ name, size }) => {
  const Component = CodingIcons[name];
  return <Component size={size} />;
};

export const ProductivityIcon: FC<ProductivityProps> = ({ name, size }) => {
  const Component = ProductivityIcons[name];
  return <Component size={size} />;
};

export const DesignIcon: FC<DesignProps> = ({ name, size }) => {
  const Component = DesignIcons[name];
  return <Component size={size} />;
};

export const OSIcon: FC<OSProps> = ({ name, size }) => {
  const Component = OSIcons[name];
  return <Component size={size} />;
};

export const VideoIcon: FC<VideoProps> = ({ name, size }) => {
  const Component = VideoIcons[name];
  return <Component size={size} />;
};

export const MusicIcon: FC<MusicProps> = ({ name, size }) => {
  const Component = MusicIcons[name];
  return <Component size={size} />;
};

export const FinanceIcon: FC<FinanceProps> = ({ name, size }) => {
  const Component = FinanceIcons[name];
  return <Component size={size} />;
};

export const OtherIcon: FC<OtherProps> = ({ name, size }) => {
  const Component = OtherIcons[name];
  return <Component size={size} />;
};
