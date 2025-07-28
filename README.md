# simpleComp pre alpha stage

A collection of simple and reusable React Native components.

## Components

### Badge

A component to display a badge with different variants.

**Use Cases:**

- Displaying status indicators (e.g., "new", "updated").
- Highlighting information (e.g., "error", "success").

**Props:**

| Prop      | Type                                       | Default   | Description                               |
| --------- | ------------------------------------------ | --------- | ----------------------------------------- |
| `variant` | `'default'` `'info'` `'success'` `'warning'` `'error'` | `'default'` | The variant of the badge.                 |
| `style`   | `ViewStyle`                                |           | Custom styles for the badge container.    |
| `textStyle` | `TextStyle`                                |           | Custom styles for the badge text.         |
| `children`| `React.ReactNode`                          |           | The content to display inside the badge.  |

**Examples:**

```tsx
import { Badge } from 'simpleComp';

// Default Badge
<Badge>Default</Badge>

// Info Badge
<Badge variant="info">Info</Badge>

// Success Badge
<Badge variant="success">Success</Badge>

// Warning Badge
<Badge variant="warning">Warning</Badge>

// Error Badge
<Badge variant="error">Error</Badge>
```

### Button

A customizable button component.

**Use Cases:**

- User actions (e.g., "Submit", "Cancel").
- Navigation.

**Props:**

| Prop        | Type                                          | Default    | Description                                 |
| ----------- | --------------------------------------------- | ---------- | ------------------------------------------- |
| `variant`   | `'primary'` `'secondary'` `'outline'` `'ghost'` | `'primary'`  | The variant of the button.                  |
| `size`      | `'small'` `'medium'` `'large'`                | `'medium'`   | The size of the button.                     |
| `fullWidth` | `boolean`                                     | `false`    | If `true`, the button will take up the full width of its container. |
| `loading`   | `boolean`                                     | `false`    | If `true`, the button will show a loading indicator. |
| `leftIcon`  | `React.ReactNode`                             |            | An icon to display on the left side of the button text. |
| `rightIcon` | `React.ReactNode`                             |            | An icon to display on the right side of the button text. |
| `children`  | `React.ReactNode`                             |            | The content to display inside the button.   |
| `style`     | `ViewStyle`                                   |            | Custom styles for the button container.     |
| `textStyle` | `TextStyle`                                   |            | Custom styles for the button text.          |
| `disabled`  | `boolean`                                     | `false`    | If `true`, the button will be disabled.     |

**Examples:**

```tsx
import { Button } from 'simpleComp';
import { ActivityIndicator } from 'react-native';

// Primary Button
<Button variant="primary">Primary Button</Button>

// Secondary Button
<Button variant="secondary">Secondary Button</Button>

// Outline Button
<Button variant="outline">Outline Button</Button>

// Ghost Button
<Button variant="ghost">Ghost Button</Button>

// Button with left icon
<Button leftIcon={<ActivityIndicator />}>Button with Icon</Button>

// Loading Button
<Button loading>Loading...</Button>

// Disabled Button
<Button disabled>Disabled Button</Button>
```

### Card

A card component to display content in a container.

**Use Cases:**

- Displaying a user profile.
- Showing a product.

**Props:**

| Prop      | Type                               | Default      | Description                               |
| --------- | ---------------------------------- | ------------ | ----------------------------------------- |
| `variant` | `'elevated'` `'outlined'` `'filled'` | `'elevated'` | The variant of the card.                  |
| `padding` | `'xs'` `'sm'` `'md'` `'lg'` `'xl'`   | `'md'`       | The padding of the card.                  |
| `style`   | `ViewStyle`                        |              | Custom styles for the card container.     |
| `children`| `React.ReactNode`                  |              | The content to display inside the card.   |

**Examples:**

```tsx
import { Card, Text } from 'simpleComp';

// Elevated Card
<Card variant="elevated">
  <Text>Elevated Card</Text>
</Card>

// Outlined Card
<Card variant="outlined">
  <Text>Outlined Card</Text>
</Card>

// Filled Card
<Card variant="filled">
  <Text>Filled Card</Text>
</Card>
```

### Profile

A component to display a user's profile picture or initials.

**Use Cases:**

- Displaying a user's avatar.
- As a placeholder when a user has not uploaded a profile picture.

**Props:**

| Prop         | Type          | Default | Description                                  |
| ------------ | ------------- | ------- | -------------------------------------------- |
| `uri`        | `string`      |         | The URI of the user's profile picture.       |
| `initials`   | `string`      |         | The user's initials.                         |
| `size`       | `number`      | `48`    | The size of the profile picture.             |
| `style`      | `ViewStyle`   |         | Custom styles for the profile container.     |
| `imageStyle` | `ImageStyle`  |         | Custom styles for the profile image.         |
| `textStyle`  | `TextStyle`   |         | Custom styles for the initials text.         |
| `alt`        | `string`      |         | The alt text for the profile picture.        |

**Examples:**

```tsx
import { Profile } from 'simpleComp';

// Profile with image
<Profile uri="https://example.com/avatar.png" alt="User Avatar" />

// Profile with initials
<Profile initials="JD" />

// Large Profile
<Profile initials="JD" size={96} />
```

### TextInput

A text input component with a label and error message.

**Use Cases:**

- User input forms.
- Search bars.

**Props:**

| Prop         | Type         | Default | Description                                  |
| ------------ | ------------ | ------- | -------------------------------------------- |
| `label`      | `string`     |         | The label for the text input.                |
| `error`      | `string`     |         | An error message to display below the text input. |
| `style`      | `ViewStyle`  |         | Custom styles for the text input container.  |
| `inputStyle` | `TextStyle`  |         | Custom styles for the text input.            |

**Examples:**

```tsx
import { TextInput } from 'simpleComp';

// Simple Text Input
<TextInput label="Name" />

// Text Input with error
<TextInput label="Email" error="Invalid email address" />

// Password Input
<TextInput label="Password" secureTextEntry />
```

### ThemeProvider

A provider component to apply a theme to the components.

**Use Cases:**

- Applying a consistent theme to all components in the application.
- Supporting light and dark modes.

**Props:**

| Prop                | Type                | Default    | Description                               |
| ------------------- | ------------------- | ---------- | ----------------------------------------- |
| `initialMode`       | `'light'` `'dark'` `'system'` | `'system'` | The initial mode of the theme.            |
| `lightThemeOverride`| `Partial<Theme>`    |            | Overrides for the light theme.            |
| `darkThemeOverride` | `Partial<Theme>`    |            | Overrides for the dark theme.             |
| `children`          | `React.Node`   |            | The content to display inside the provider. |

**Examples:**

```tsx
import { ThemeProvider, Button } from 'simpleComp';

// Using the ThemeProvider
<ThemeProvider initialMode="dark">
  <Button>Dark Mode Button</Button>
</ThemeProvider>

// Overriding theme
const lightThemeOverride = {
  colors: {
    base0D: '#ff0000', // blue -> red
  },
};

<ThemeProvider lightThemeOverride={lightThemeOverride}>
  <Button>Button with Custom Theme</Button>
</ThemeProvider>
```
