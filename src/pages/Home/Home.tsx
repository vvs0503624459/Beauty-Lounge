import ArticleList from '../../components/Articles/ArticleList'
import SimpleSlider from '../../components/Slider/SimpleSlider'

type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <SimpleSlider />
            <ArticleList categoryItem="all" tagItem="recent" />
        </div>
    )
}

export default Home
