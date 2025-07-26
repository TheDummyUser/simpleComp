import type { ImageStyle, ViewStyle, TextStyle } from 'react-native';

export interface ProfileProps {
  uri?: string;
  size?: number;
  initials?: string;
  style?: ViewStyle;       // style for container View
  imageStyle?: ImageStyle; // style for Image component
  textStyle?: TextStyle;
  alt?: string;
}
