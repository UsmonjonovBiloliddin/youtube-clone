import { Stack } from '@mui/material'
import {Channel, Main, Navbar, Search, Video} from "../"
import { Route, Routes } from 'react-router-dom'

const App = () => {
    
    return (
        <Stack className='app' > 
            <Navbar />
            <Routes>
                <Route path='/'  element={<Main />} />
                <Route path='/video'  element={<Video />}/>
                <Route path='/search/:id'  element={<Search />}/>
                <Route path='/channel'  element={<Channel />}/>
            </Routes>
        </Stack>
    )
}

export default App