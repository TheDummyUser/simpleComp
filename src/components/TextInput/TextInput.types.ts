import type { TextInputProps, ViewStyle, TextStyle } from 'react-native';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  error?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
}
