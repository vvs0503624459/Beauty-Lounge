import { Container, CssBaseline, StyledEngineProvider } from '@mui/material'
import Header from '../Header/Header'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import ArticlePage from '../../pages/Articles/ArticlePage'
import ArticleList from '../../components/Articles/ArticleList'
import FavoritesPage from '../../pages/Favorites/FavoritesPage'
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
                    <Route
                        path="/hairstyles"
                        element={
                            <ArticleList
                                categoryItem="hairstyles"
                                tagItem="all"
                            />
                        }
                    />
                    <Route
                        path="/nails"
                        element={
                            <ArticleList categoryItem="nails" tagItem="all" />
                        }
                    />
                    <Route
                        path="/makeup"
                        element={
                            <ArticleList categoryItem="make up" tagItem="all" />
                        }
                    />
                    <Route path="/:id" element={<ArticlePage />} />
                    <Route path="/Favorites" element={<FavoritesPage />} />
                </Routes>
            </Container>
        </StyledEngineProvider>
    )
}

export default App
