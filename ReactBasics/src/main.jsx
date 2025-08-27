
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './Context/UserContext.jsx'

createRoot(document.getElementById('root')).render(

    // <BrowserRouter>
    // <App/>
    // </BrowserRouter>
    // for routing

    <UserContext>
    <App />
    </UserContext>
    // for context api
)
