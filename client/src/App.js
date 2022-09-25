import React, { useState } from 'react'
import './App.css'
import { Server } from './Server'
import { Microservice } from './Microservice'

const App = () => {
    const [view, setView] = useState('server')

    return (
        <div>
            <body className="app-body">
                <h1>Hello</h1>
                {view === 'server' ? (
                    <>
                        <button onClick={() => setView('microservice')}>
                            Try the microservice
                        </button>
                        <Server />
                    </>
                ) : (
                    <>
                        <button onClick={() => setView('server')}>
                            Try the server
                        </button>
                        <Microservice />
                    </>
                )}
            </body>
        </div>
    )
}

export default App
