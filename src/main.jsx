import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// StrictMode removed — it double-invokes useEffect in dev which
// destroys Three.js WebGL contexts and kills all animations
createRoot(document.getElementById('root')).render(<App />)
