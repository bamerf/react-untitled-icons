import type * as BaseIcons from './base';
import type * as CountryIcons from './country';
import type * as BrowserIcons from './browser';
import type * as SocialIcons from './social';
import type * as MessengerIcons from './messenger';
import type * as CodingIcons from './coding';
import type * as ProductivityIcons from './productivity';
import type * as DesignIcons from './design';
import type * as OSIcons from './os';
import type * as VideoIcons from './video';
import type * as MusicIcons from './music';
import type * as FinanceIcons from './finance';
import type * as OtherIcons from './other';

export type BaseIconsNames = keyof typeof BaseIcons;
export type CountryIconNames = keyof typeof CountryIcons;
export type BrowserIconNames = keyof typeof BrowserIcons;
export type SocialIconNames = keyof typeof SocialIcons;
export type MessengerIconNames = keyof typeof MessengerIcons;
export type CodingIconNames = keyof typeof CodingIcons;
export type ProductivityIconNames = keyof typeof ProductivityIcons;
export type DesignIconNames = keyof typeof DesignIcons;
export type OSIconNames = keyof typeof OSIcons;
export type VideoIconNames = keyof typeof VideoIcons;
export type MusicIconNames = keyof typeof MusicIcons;
export type FinanceIconNames = keyof typeof FinanceIcons;
export type OtherIconNames = keyof typeof OtherIcons;

export interface CommonProps {
  size?: number;
}

export interface BaseIconProps extends CommonProps {
  color?: string;
}

export interface BaseProps extends BaseIconProps {
  name: BaseIconsNames;
}

export interface CountryProps extends CommonProps {
  name: CountryIconNames;
}

export interface BrowserProps extends CommonProps {
  name: BrowserIconNames;
}

export interface SocialProps extends CommonProps {
  name: SocialIconNames;
}

export interface MessengerProps extends CommonProps {
  name: MessengerIconNames;
}

export interface CodingProps extends CommonProps {
  name: CodingIconNames;
}

export interface ProductivityProps extends CommonProps {
  name: ProductivityIconNames;
}

export interface DesignProps extends CommonProps {
  name: DesignIconNames;
}

export interface OSProps extends CommonProps {
  name: OSIconNames;
}

export interface VideoProps extends CommonProps {
  name: VideoIconNames;
}

export interface MusicProps extends CommonProps {
  name: MusicIconNames;
}

export interface FinanceProps extends CommonProps {
  name: FinanceIconNames;
}

export interface OtherProps extends CommonProps {
  name: OtherIconNames;
}
