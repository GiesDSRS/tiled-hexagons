# Tiled Hexagons

A React component library for creating beautiful, responsive tiled hexagonal layouts. Built with React 18+ using modern hooks and functional components.

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## Features

✨ **Modern React** - Built with React 18+ using hooks (useState, useEffect, useMemo, useRef)  
📱 **Responsive** - Automatically adapts to screen size with optional responsive prop  
🎨 **Customizable** - Full control over colors, sizes, shadows, and styles  
⚡ **Interactive** - Built-in hover and click effects  
🔗 **Linkable** - Add hrefs to make hexagons clickable links  
🖼️ **Image Support** - Display images inside hexagons  

## Installation

Since this is a GitHub-only package, install it directly from the repository:

```bash
npm install github:GiesDSRS/tiled-hexagons
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "tiled-hexagons": "github:GiesDSRS/tiled-hexagons"
  }
}
```

## Quick Start

```jsx
import React from 'react'
import { TiledHexagons } from 'tiled-hexagons'

const App = () => {
  const tiles = [
    {
      fill: '#61DAFB',
      text: 'React',
      textStyle: { fontSize: '24px', fill: 'white', fontWeight: 'bold' },
      href: 'https://react.dev',
      shadow: '#4fa8c5'
    },
    {
      fill: '#3178C6',
      text: 'TypeScript',
      textStyle: { fontSize: '20px', fill: 'white', fontWeight: 'bold' },
      href: 'https://www.typescriptlang.org',
      shadow: '#2563a8'
    }
    // ... more tiles
  ]

  return (
    <TiledHexagons
      tiles={tiles}
      tileSideLengths={80}
      tileBorderRadii={8}
      tileElevations={10}
      tileGap={10}
      maxHorizontal={4}
      responsive={true}
    />
  )
}
```

## Components

### TiledHexagons

The main component for creating a grid of hexagons.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tiles` | `array` | `[]` | Array of tile configuration objects |
| `tileSideLengths` | `number` | `100` | Side length of each hexagon |
| `tileBorderRadii` | `number` | `12` | Border radius for rounded corners |
| `tileElevations` | `number` | `12` | Shadow/elevation height |
| `tileStrokeWidths` | `number` | `0` | Stroke width |
| `tileGap` | `number` | `4` | Gap between hexagons |
| `maxHorizontal` | `number` | `5` | Maximum hexagons per row |
| `tileStyles` | `object` | `{}` | Global styles for all tiles |
| `tileTextStyles` | `object` | `{}` | Global text styles |
| `responsive` | `boolean` | `false` | Enable responsive layout |

#### Tile Object Properties

Each tile in the `tiles` array can have:

```jsx
{
  fill: '#61DAFB',           // Fill color
  stroke: '#000',            // Stroke color
  shadow: '#4fa8c5',         // Shadow color
  img: 'path/to/image.png',  // Image URL
  text: 'React',             // Display text
  textStyle: {               // Text styling
    fontSize: '24px',
    fill: 'white',
    fontWeight: 'bold'
  },
  styles: {                  // Custom hover/active styles
    normal: {},
    hover: {},
    active: {}
  },
  href: 'https://react.dev', // Link URL
  target: '_blank',          // Link target
  onClick: () => {}          // Click handler
}
```

### Hexagon

A single hexagon component.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sideLength` | `number` | `100` | Side length of hexagon |
| `borderRadius` | `number` | `12` | Border radius |
| `fill` | `string` | `'white'` | Fill color |
| `stroke` | `string` | `'#bbb'` | Stroke color |
| `strokeWidth` | `number` | `0` | Stroke width |
| `elevation` | `number` | `12` | Shadow height |
| `shadow` | `string` | `'#e2e2e2'` | Shadow color |
| `img` | `string` | `''` | Image URL |
| `text` | `string` | `''` | Display text |
| `textStyle` | `object` | `{}` | Text styling |
| `styles` | `object` | `{}` | Hover/active styles |
| `href` | `string` | `null` | Link URL |
| `target` | `string` | `null` | Link target |
| `onClick` | `function` | `() => {}` | Click handler |

#### Example

```jsx
import { Hexagon } from 'tiled-hexagons'

<Hexagon
  sideLength={120}
  borderRadius={15}
  fill="#667eea"
  elevation={15}
  shadow="#4c5fc7"
  text="Click Me!"
  textStyle={{ fontSize: '20px', fill: 'white', fontWeight: 'bold' }}
  onClick={() => alert('Hexagon clicked!')}
/>
```

## Responsive Design

Enable the `responsive` prop to make the hexagon grid adapt to screen size:

```jsx
<TiledHexagons
  tiles={tiles}
  tileSideLengths={80}
  maxHorizontal={4}
  responsive={true}  // Enables responsive behavior
/>
```

**Responsive behavior:**
- **Desktop (>1024px):** Original size and layout
- **Tablet (768-1024px):** Hexagons scale to 90% of original size
- **Mobile (<768px):** Hexagons scale proportionally, max 3 per row
- **Auto-resize:** Updates layout on window resize

## Development

### Running the Example

```bash
npm install
npm run example
```

This will start a development server at `http://localhost:3000` with interactive examples.

### Building

```bash
npm run build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

Original concept by [josephsurin](https://github.com/josephsurin/tiled-hexagons)  
Modernized and enhanced for React 18+ with responsive features.
