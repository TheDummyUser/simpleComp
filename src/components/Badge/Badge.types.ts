import type { ViewProps, TextStyle, ViewStyle } from 'react-native';

export type BadgeVariant = 'default' | 'info' | 'success' | 'warning' | 'error';

export interface BadgeProps extends ViewProps {
  variant?: BadgeVariant;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children: React.ReactNode;
}
