import Photopage1 from './Photopage1';
import Photopage2 from './Photopage2';
import Photopage3 from './Photopage3';
import { Routes, Route } from 'react-router-dom';
import Endpage from './Endpage';
import Photopage4 from './Photopage4';

const Main = () =>{
    return(
        <Routes>
            <Route path='/' element={<Photopage1/>}/>
            <Route path='/page2' element={<Photopage2/>}/>
            <Route path='/page3' element={<Photopage3/>}/>
            <Route path='/page4' element={<Photopage4/>}/>
            {/* <Route exact path='/page5' element={<Endpage/>}/> */}
        </Routes>
    )
}

export default Main;