import type { ViewProps } from 'react-native';

export const cardVariants = ['elevated', 'outlined', 'filled'] as const;
export type CardVariant = typeof cardVariants[number];

// Acceptable padding keys matching your theme spacing keys:
export type PaddingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps extends ViewProps {
  variant?: CardVariant;
  padding?: PaddingSize;
  children: React.ReactNode;
}
