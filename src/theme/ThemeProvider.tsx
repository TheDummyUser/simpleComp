// src/th
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react';
import { Appearance, type ColorSchemeName } from 'react-native';

// ==== Type Definitions ====

export type Color16 = {
  base00: string; // background (darkest)
  base01: string;
  base02: string;
  base03: string;
  base04: string;
  base05: string; // default foreground
  base06: string;
  base07: string; // brightest, light foreground
  base08: string; // red
  base09: string; // orange
  base0A: string; // yellow
  base0B: string; // green
  base0C: string; // aqua/cyan
  base0D: string; // blue
  base0E: string; // purple
  base0F: string; // brown
};

export interface ThemeColors extends Color16 {}

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface Theme {
  colors: ThemeColors;
  spacing: ThemeSpacing;
}

export type Mode = 'light' | 'dark' | 'system';

// ==== Base Themes ====

const lightColors: Color16 = {
  base00: '#fafafa',
  base01: '#eaeaea',
  base02: '#d6d6d6',
  base03: '#8c8c8c',
  base04: '#747474',
  base05: '#585858',
  base06: '#2a2a2a',
  base07: '#1d1d1d',
  base08: '#b33131',
  base09: '#cc7833',
  base0A: '#b09e4f',
  base0B: '#30a14e',
  base0C: '#4b8bbe',
  base0D: '#4078f2',
  base0E: '#a63dff',
  base0F: '#986801',
};

const darkColors: Color16 = {
  base00: '#1d1f21',
  base01: '#282a2e',
  base02: '#373b41',
  base03: '#969896',
  base04: '#b4b7b4',
  base05: '#c5c8c6',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#cc6666',
  base09: '#de935f',
  base0A: '#f0c674',
  base0B: '#b5bd68',
  base0C: '#8abeb7',
  base0D: '#81a2be',
  base0E: '#b294bb',
  base0F: '#a3685a',
};

const defaultSpacing: ThemeSpacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const lightTheme: Theme = {
  colors: lightColors,
  spacing: defaultSpacing,
};

export const darkTheme: Theme = {
  colors: darkColors,
  spacing: defaultSpacing,
};

// ==== Context Setup ====

interface ThemeContextValue {
  theme: Theme;
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: lightTheme,
  mode: 'light',
  setMode: () => {},
});

// ==== Provider Component ====

export const ThemeProvider: React.FC<{
  initialMode?: Mode;
  lightThemeOverride?: Partial<Theme>;
  darkThemeOverride?: Partial<Theme>;
  children: ReactNode;
}> = ({
  children,
  initialMode = 'system',
  lightThemeOverride,
  darkThemeOverride,
}) => {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme() || 'light'
  );

  useEffect(() => {
    if (mode !== 'system') return;
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });
    return () => {
      subscription.remove();
    };
  }, [mode]);

  // Merge themes with overrides
  const mergedLightTheme = useMemo(() => ({
    colors: { ...lightTheme.colors, ...lightThemeOverride?.colors },
    spacing: { ...lightTheme.spacing, ...lightThemeOverride?.spacing },
  }), [lightThemeOverride]);

  const mergedDarkTheme = useMemo(() => ({
    colors: { ...darkTheme.colors, ...darkThemeOverride?.colors },
    spacing: { ...darkTheme.spacing, ...darkThemeOverride?.spacing },
  }), [darkThemeOverride]);

  const theme = useMemo(() => {
    if (mode === 'light') return mergedLightTheme;
    if (mode === 'dark') return mergedDarkTheme;
    // mode === 'system'
    return colorScheme === 'dark' ? mergedDarkTheme : mergedLightTheme;
  }, [mode, colorScheme, mergedLightTheme, mergedDarkTheme]);

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ==== Consumer Hooks ====

/** Get the current theme (colors + spacing) */
export function useTheme(): Theme {
  return useContext(ThemeContext).theme;
}

/** Get [mode, setMode] for toggling themes */
export function useThemeMode(): [Mode, (mode: Mode) => void] {
  const { mode, setMode } = useContext(ThemeContext);
  return [mode, setMode];
}
