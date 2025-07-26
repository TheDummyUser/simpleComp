import React from "react";
import { View, ViewStyle } from "react-native";
import type { CardProps } from "./Card.types";
import { Theme, useTheme } from "../../theme/ThemeProvider";

const variantStyles = (variant: string, theme: Theme): ViewStyle => {
  switch (variant) {
    case "elevated":
      return {
        backgroundColor: theme.colors.base01, // typical surface background
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4, // Android shadow
        borderRadius: 16,
      };
    case "outlined":
      return {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: theme.colors.base0D, // primary blue in Base16
        borderRadius: 16,
      };
    case "filled":
      return {
        backgroundColor: theme.colors.base0D, // primary blue for filled variant
        borderRadius: 16,
      };
    default:
      return {};
  }
};

const Card: React.FC<CardProps> = ({
  variant = "elevated",
  padding,
  style,
  children,
  ...props
}) => {
  const theme = useTheme();

  // Use nullish coalescing inside the function body, NOT in parameter list
  const paddingValue = padding ?? "md";

  const containerStyle: ViewStyle = {
    padding: theme.spacing[paddingValue],
  };

  return (
    <View
      style={[variantStyles(variant, theme), containerStyle, style]}
      {...props}
    >
      {children}
    </View>
  );
};

export default Card;
