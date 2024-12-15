import { BrowserRouter, Route, Routes } from "react-router-dom"
import Tela1 from './Telas/Tela1.jsx'
import Tela2 from './Telas/Tela2.jsx'
import Tela3 from './Telas/Tela3.jsx'
import Tela4 from './Telas/Tela4.jsx'

function App(){
    return(
        
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Tela1/>} />
                <Route path='/tela2' element={<Tela2/>} />
                <Route path="/tela3" element={<Tela3/>} />
                < Route path="/tela4" element={<Tela4/>}/>
                <Route path='*' element={<h1>Notfound</h1>} />
            </Routes>
        </BrowserRouter>
        
    )
}

export default App