import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { BadgeProps } from './Badge.types';
import { useTheme } from '../../theme/ThemeProvider';

const variantColorMap = (variant: BadgeProps['variant'], theme: any) => {
  switch (variant) {
    case 'info':
      return { bg: theme.colors.base0D, color: theme.colors.base07 };
    case 'success':
      return { bg: theme.colors.base0B, color: theme.colors.base07 };
    case 'warning':
      return { bg: theme.colors.base0A, color: theme.colors.base07 };
    case 'error':
      return { bg: theme.colors.base08, color: theme.colors.base07 };
    default:
      return { bg: theme.colors.base03, color: theme.colors.base07 };
  }
};

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  style,
  textStyle,
  children,
  ...props
}) => {
  const theme = useTheme();
  const { bg, color } = variantColorMap(variant, theme);
  return (
    <View style={[
      styles.badge,
      { backgroundColor: bg },
      style,
    ]}
    {...props}
    >
      <Text style={[styles.text, { color }, textStyle]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 13,
    fontWeight: '500',
  },
});

export default Badge;
