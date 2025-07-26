import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, View } from "react-native";
import type { ViewStyle, TextStyle } from "react-native";
import { ButtonProps } from "./Button.types";
import { useTheme, type Theme } from "../../theme/ThemeProvider";

// Optional helper to map variants to colors from Base16 palette
const getVariantColors = (
  variant: ButtonProps["variant"],
  disabled: boolean,
  theme: Theme,
) => {
  switch (variant) {
    case "primary":
      return {
        backgroundColor: disabled ? theme.colors.base03 : theme.colors.base0D, // blue
        textColor: disabled ? theme.colors.base04 : theme.colors.base07, // light text
        borderColor: "transparent",
        indicatorColor: theme.colors.base07,
      };
    case "secondary":
      return {
        backgroundColor: disabled ? theme.colors.base01 : theme.colors.base02,
        textColor: disabled ? theme.colors.base04 : theme.colors.base05,
        borderColor: "transparent",
        indicatorColor: theme.colors.base05,
      };
    case "outline":
      return {
        backgroundColor: "transparent",
        borderColor: disabled ? theme.colors.base03 : theme.colors.base0D,
        textColor: disabled ? theme.colors.base03 : theme.colors.base0D,
        indicatorColor: theme.colors.base0D,
      };
    case "ghost":
      return {
        backgroundColor: "transparent",
        borderColor: "transparent",
        textColor: disabled ? theme.colors.base03 : theme.colors.base0D,
        indicatorColor: theme.colors.base0D,
      };
    default:
      return {
        backgroundColor: disabled ? theme.colors.base03 : theme.colors.base0D,
        textColor: disabled ? theme.colors.base04 : theme.colors.base07,
        borderColor: "transparent",
        indicatorColor: theme.colors.base07,
      };
  }
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  style,
  textStyle,
  disabled,
  ...props
}) => {
  const theme = useTheme();

  const { backgroundColor, textColor, borderColor, indicatorColor } =
    getVariantColors(variant, !!disabled, theme);

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 16,
      paddingHorizontal: size === "small" ? 12 : size === "large" ? 24 : 16,
      paddingVertical: size === "small" ? 8 : size === "large" ? 16 : 12,
      ...(fullWidth && { width: "100%" }),
      backgroundColor,
      borderWidth: variant === "outline" ? 1 : 0,
      borderColor,
    };

    return { ...baseStyle, ...style };
  };

  const getTextStyle = (): TextStyle => {
    const baseTextStyle: TextStyle = {
      fontSize: size === "small" ? 14 : size === "large" ? 18 : 16,
      fontWeight: "600",
      color: textColor,
    };

    return { ...baseTextStyle, ...textStyle };
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={indicatorColor} />
      ) : (
        <>
          {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon}</View>}
          <Text style={getTextStyle()}>{children}</Text>
          {rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
