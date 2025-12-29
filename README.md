# React TypeScript Alert Demo

Small Vite + React project that showcases a reusable alert component with multiple states (info, success, warning, error, default) and Lucide icons. It ships with TypeScript typings, SCSS theming, and a minimal example page for quick exploration.

## Quick start

```bash
npm install
npm run dev
```

Then open the dev server URL printed in the terminal (usually http://localhost:5173).

## Available scripts

- `npm run dev` start the Vite dev server with HMR
- `npm run build` create a production build in `dist`
- `npm run preview` preview the production build locally

## Project structure

- [src/main.tsx](src/main.tsx) app bootstrap with React 19 StrictMode
- [src/App.tsx](src/App.tsx) example page rendering the alert variations
- [src/components/ui/Alert/Alert.tsx](src/components/ui/Alert/Alert.tsx) alert component logic and layout
- [src/components/ui/Alert/index.scss](src/components/ui/Alert/index.scss) SCSS theme tokens and mixin-generated variants
- [src/types/index.ts](src/types/index.ts) shared `AlertTypes` union for type-safe variants

## Alert component

The `Alert` component supports icons, titles, optional descriptions, and custom children. The type drives the styling class applied by the SCSS mixin.

**Props**

- `title: string` heading text
- `type: "alert-default" | "alert-info" | "alert-warning" | "alert-error" | "alert-success"` variant key
- `icon: ReactNode` leading icon (Lucide in the demo)
- `description?: string` optional body text (used when no children are provided)
- `children?: ReactNode` custom content; when present it replaces `description`

**Usage**

```tsx
import { AlertTriangle } from "lucide-react";
import Alert from "./components/ui/Alert/Alert";

export const Example = () => (
  <Alert
    type="alert-warning"
    icon={<AlertTriangle size={20} />}
    title="Heads up"
    description="Something noteworthy just happened."
  />
);
```

## Styling

The SCSS file defines color tokens for each variant and uses a mixin to generate the classes. To adjust the look, edit the token variables in [src/components/ui/Alert/index.scss](src/components/ui/Alert/index.scss). Link styles are emphasized and the close icon is purely decorative in the current demo.

## Tech stack

- React 19 with TypeScript
- Vite 7 for tooling and dev server
- SCSS modules for theming
- Lucide icons for visuals

## Production build

```bash
npm run build
npm run preview
```

`preview` serves the optimized build so you can sanity-check before deploying.

## Notes

- RxJS is installed for future reactive additions but is not used in the current demo.
- The alert close icon is present for UI parity; wiring a dismiss handler would be a small extension if needed.
