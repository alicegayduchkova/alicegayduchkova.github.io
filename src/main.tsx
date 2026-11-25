import { createRoot } from 'react-dom/client'
import '@fontsource/figtree/latin-400.css'
import '@fontsource/figtree/latin-600.css'
import '@fontsource/instrument-serif/latin-400-italic.css'
import './styles.css'
import './chapters.css'
import App from './App'

createRoot(document.getElementById('root')!).render(<App />)
