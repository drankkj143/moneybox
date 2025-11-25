import React from "react"
import {createRoot} from "react-dom/client"
import App from './App'
import './nullstyle.css'
import './index.css'

const rootElement = document.getElementById('root')

const app = createRoot(rootElement)

app.render(<App/>)