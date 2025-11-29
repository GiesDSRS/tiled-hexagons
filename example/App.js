import React from 'react'
import { createRoot } from 'react-dom/client'
import { Hexagon, TiledHexagons } from '../src/index'

const App = () => {
    const techTiles = [
        {
            fill: '#61DAFB',
            text: 'React',
            textStyle: { fontSize: '24px', fill: '#282c34', fontWeight: 'bold' },
            href: 'https://react.dev',
            shadow: '#4fa8c5'
        },
        {
            fill: '#3178C6',
            text: 'TypeScript',
            textStyle: { fontSize: '20px', fill: 'white', fontWeight: 'bold' },
            href: 'https://www.typescriptlang.org',
            shadow: '#2563a8'
        },
        {
            fill: '#68A063',
            text: 'Node.js',
            textStyle: { fontSize: '22px', fill: 'white', fontWeight: 'bold' },
            href: 'https://nodejs.org',
            shadow: '#53804f'
        },
        {
            fill: '#764ABC',
            text: 'Redux',
            textStyle: { fontSize: '24px', fill: 'white', fontWeight: 'bold' },
            href: 'https://redux.js.org',
            shadow: '#5e3a96'
        },
        {
            fill: '#E10098',
            text: 'GraphQL',
            textStyle: { fontSize: '22px', fill: 'white', fontWeight: 'bold' },
            href: 'https://graphql.org',
            shadow: '#b3007a'
        },
        {
            fill: '#DD0031',
            text: 'Angular',
            textStyle: { fontSize: '22px', fill: 'white', fontWeight: 'bold' },
            href: 'https://angular.io',
            shadow: '#af0027'
        },
        {
            fill: '#42B883',
            text: 'Vue.js',
            textStyle: { fontSize: '24px', fill: 'white', fontWeight: 'bold' },
            href: 'https://vuejs.org',
            shadow: '#359368'
        },
        {
            fill: '#FF6F00',
            text: 'Firebase',
            textStyle: { fontSize: '20px', fill: 'white', fontWeight: 'bold' },
            href: 'https://firebase.google.com',
            shadow: '#cc5900'
        }
    ]

    const colorTiles = [
        { fill: '#FF6B6B', shadow: '#cc5656' },
        { fill: '#4ECDC4', shadow: '#3ea49d' },
        { fill: '#45B7D1', shadow: '#3792a7' },
        { fill: '#FFA07A', shadow: '#cc8062' },
        { fill: '#98D8C8', shadow: '#7aad9f' },
        { fill: '#F7DC6F', shadow: '#c6b059' },
        { fill: '#BB8FCE', shadow: '#9572a5' },
        { fill: '#85C1E2', shadow: '#6a9ab5' },
        { fill: '#F8B739', shadow: '#c6922e' },
        { fill: '#52B788', shadow: '#42926d' }
    ]

    return (
        <div className="container">
            <h1>Tiled Hexagons - React 18</h1>
            
            <div className="demo-section">
                <h2>🎨 Technology Stack</h2>
                <p>
                    Click on any hexagon to visit the technology's official website. 
                    Hover over them to see the interactive effects!
                </p>
                <div className="hexagon-container">
                    <TiledHexagons
                        tiles={techTiles}
                        tileSideLengths={80}
                        tileBorderRadii={8}
                        tileElevations={10}
                        tileGap={10}
                        maxHorizontal={4}
                        responsive={true}
                    />
                </div>
            </div>

            <div className="demo-section">
                <h2>🌈 Colorful Grid</h2>
                <p>
                    A beautiful grid of colored hexagons showcasing different fill colors 
                    with smooth elevation effects.
                </p>
                <div className="hexagon-container">
                    <TiledHexagons
                        tiles={colorTiles}
                        tileSideLengths={60}
                        tileBorderRadii={12}
                        tileElevations={8}
                        tileGap={8}
                        maxHorizontal={5}
                        responsive={true}
                    />
                </div>
            </div>

            <div className="demo-section">
                <h2>⬡ Single Hexagon</h2>
                <p>
                    You can also use individual hexagons with custom styles and interactions.
                </p>
                <div className="hexagon-container">
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
                </div>
            </div>

            <div className="demo-section">
                <h2>📝 Usage Example</h2>
                <p>
                    This package has been updated to work with React 18+ using modern hooks and functional components.
                </p>
                <pre style={{
                    background: '#282c34',
                    color: '#61dafb',
                    padding: '20px',
                    borderRadius: '10px',
                    overflow: 'auto',
                    fontSize: '14px'
                }}>
{`import { TiledHexagons } from 'tiled-hexagons'

const tiles = [
  {
    fill: '#61DAFB',
    text: 'React',
    textStyle: { fontSize: '24px', fill: 'white' },
    href: 'https://react.dev'
  },
  // ... more tiles
]

<TiledHexagons
  tiles={tiles}
  tileSideLengths={80}
  tileBorderRadii={8}
  tileElevations={10}
  tileGap={10}
  maxHorizontal={4}
/>`}
                </pre>
            </div>
        </div>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
