import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import './Arrows.scss'

type Props = {}

const Arrows = (props: Props) => {
    return (
        <div className="arrow-box">
            <ExpandMoreIcon className="arrow-icon not-hover" />
            <ExpandLessIcon className="arrow-icon is-hover" />
        </div>
    )
}

export default Arrows
