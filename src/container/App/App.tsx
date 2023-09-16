import { Container, CssBaseline, StyledEngineProvider } from '@mui/material'
import Header from '../Header/Header'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import ArticlePage from '../../pages/Articles/ArticlePage'
import ArticleList from '../../components/Articles/ArticleList'
import FavoritesPage from '../../pages/Favorites/FavoritesPage'
import Footer from '../Footer/Footer'
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
                        path="/hairstyles-wedding"
                        element={
                            <ArticleList
                                categoryItem="hairstyles"
                                tagItem="wedding"
                            />
                        }
                    />
                    <Route
                        path="/hairstyles-pigtails"
                        element={
                            <ArticleList
                                categoryItem="hairstyles"
                                tagItem="pigtails"
                            />
                        }
                    />
                    <Route
                        path="/hairstyles-curls"
                        element={
                            <ArticleList
                                categoryItem="hairstyles"
                                tagItem="curls"
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
                        path="/nails-wedding"
                        element={
                            <ArticleList
                                categoryItem="nails"
                                tagItem="wedding"
                            />
                        }
                    />
                    <Route
                        path="/nails-regular"
                        element={
                            <ArticleList
                                categoryItem="nails"
                                tagItem="regular"
                            />
                        }
                    />
                    <Route
                        path="/nails-care"
                        element={
                            <ArticleList categoryItem="nails" tagItem="care" />
                        }
                    />
                    <Route
                        path="/MakeUp"
                        element={
                            <ArticleList categoryItem="makeup" tagItem="all" />
                        }
                    />
                    <Route
                        path="/MakeUp-wedding"
                        element={
                            <ArticleList
                                categoryItem="makeup"
                                tagItem="wedding"
                            />
                        }
                    />
                    <Route
                        path="/MakeUp-regular"
                        element={
                            <ArticleList
                                categoryItem="makeup"
                                tagItem="regular"
                            />
                        }
                    />
                    <Route
                        path="/MakeUp-care"
                        element={
                            <ArticleList categoryItem="makeup" tagItem="care" />
                        }
                    />
                    <Route path="/:id" element={<ArticlePage />} />
                    <Route path="/Favorites" element={<FavoritesPage />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
