import React from 'react'
import ReactDOM from 'react-dom/client'
/*import App from './App.tsx'
*/import Users from './pages/Users.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        {/*<App />*/}
        <Users/>
  </React.StrictMode>,
)
