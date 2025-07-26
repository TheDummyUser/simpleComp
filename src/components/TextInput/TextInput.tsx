import React from "react";
import { View, TextInput as RNTextInput, Text, StyleSheet } from "react-native";
import type { InputProps } from "./TextInput.types";
import { useTheme } from "../../theme/ThemeProvider";

const TextInput: React.FC<InputProps> = ({
  label,
  error,
  style,
  inputStyle,
  ...props
}) => {
  const theme = useTheme();
  return (
    <View style={[styles.container, style]}>
      {label && (
        <Text style={[styles.label, { color: theme.colors.base05 }]}>
          {label}
        </Text>
      )}
      <RNTextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.colors.base01,
            color: theme.colors.base05,
            borderRadius: 16, // updated here
            borderWidth: error ? 1 : 0, // only show border on error
            borderColor: error ? theme.colors.base08 : "transparent",
          },
          inputStyle,
        ]}
        placeholderTextColor={theme.colors.base03}
        {...props}
      />

      {error && (
        <Text style={[styles.error, { color: theme.colors.base08 }]}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  error: {
    marginTop: 4,
    fontSize: 13,
  },
});

export default TextInput;
