import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import type { ProfileProps } from './Profile.types';
import { useTheme } from '../../theme/ThemeProvider';

const Profile: React.FC<ProfileProps> = ({
  uri,
  initials,
  size = 48,
  style,
  imageStyle,
  textStyle,
  alt,
}) => {
  const theme = useTheme();

  if (uri)
    return (
      <Image
        source={{ uri }}
        style={[
          styles.avatar,
          { width: size, height: size, borderRadius: size / 2, backgroundColor: theme.colors.base02 },
          imageStyle,
        ]}
        accessibilityLabel={alt}
      />
    );

  return (
    <View
      style={[
        styles.avatar,
        { width: size, height: size, borderRadius: size / 2, backgroundColor: theme.colors.base0D },
        style,
      ]}
    >
      <Text
        style={[
          styles.initials,
          { color: theme.colors.base07, fontSize: size / 2 },
          textStyle,
        ]}
      >
        {initials ? initials.toUpperCase() : 'U'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // safely on View
  },
  initials: {
    fontWeight: '700',
  },
});

export default Profile;
