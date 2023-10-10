import ArticleList from '../../components/Articles/ArticleList'
import Sidebar from '../../components/Sidebar/Sidebar'
import SimpleSlider from '../../components/Slider/SimpleSlider'
import { useState } from 'react'
type Props = {}
// type TagType = {
//     string : string
// }
const Home = (props: Props) => {
    const [currentTag, setCurrentTag] = useState({
        tagName: 'recent',
    })
    const changeTag = (tag: string) =>
        setCurrentTag(() => ({
            tagName: tag,
        }))
    return (
        <div>
            <SimpleSlider />
            <div className="flex between home-main">
                <div className="home-main-articles">
                    <ArticleList
                        categoryItem="all"
                        tagItem={currentTag.tagName}
                    />
                </div>
                <Sidebar changeTag={changeTag} />
            </div>
        </div>
    )
}

export default Home
