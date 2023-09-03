import { Container, CssBaseline, StyledEngineProvider } from '@mui/material'
import Header from '../Header/Header'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Hairstyles from '../../pages/Hairstyles/Hairstyles'
import Nails from '../../pages/Nails/Nails'
import MakeUp from '../../pages/MakeUp/MakeUp'
import ArticlePage from '../../pages/Articles/ArticlePage'
// import NewTest from '../../utils/NewTest'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />

            <Header />
            {/* <NewTest /> */}
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hairstyles" element={<Hairstyles />} />
                    <Route path="/nails" element={<Nails />} />
                    <Route path="/makeup" element={<MakeUp />} />
                    <Route path="/:id" element={<ArticlePage />} />
                </Routes>
            </Container>
        </StyledEngineProvider>
    )
}

export default App
