import Photopage1 from './Photopage1';
import Photopage2 from './Photopage2';
import Photopage3 from './Photopage3';
import { Routes, Route } from 'react-router-dom';
import Endpage from './Endpage';

const Main = () =>{
    return(
        <Routes>
            <Route exact path='/' element={<Photopage1/>}/>
            <Route exact path='/page2' element={<Photopage2/>}/>
            <Route exact path='/page3' element={<Photopage3/>}/>
            <Route exact path='/page4' element={<Endpage/>}/>
        </Routes>
    )
}

export default Main;