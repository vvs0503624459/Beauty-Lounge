import ArticleList from '../../components/Articles/ArticleList'

type Props = {}

const Home = (props: Props) => {
    return <ArticleList categoryItem="all" tagItem="recent" />
}

export default Home
