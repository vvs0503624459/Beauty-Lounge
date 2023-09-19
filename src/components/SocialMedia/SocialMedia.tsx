import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TelegramIcon from '@mui/icons-material/Telegram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import HomeIcon from '@mui/icons-material/Home'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks'
import './SocialMedia.scss'

type Props = {}

const SocialMedia = (props: Props) => {
    const isLiked = useAppSelector((state) => state.articlesLikeState)
    return (
        <div className="social-media-icons flex">
            <Link to="/" title="Instagram">
                <InstagramIcon />
            </Link>
            <Link to="/" title="Facebook">
                <FacebookIcon />
            </Link>
            <Link to="/" title="Telegram">
                <TelegramIcon />
            </Link>
            <Link to="/" title="YouTube">
                <YouTubeIcon />
            </Link>
            <Link to="/" title="Home" className="hiden-show">
                <HomeIcon />
            </Link>
            <Link to={'/Favorites'} title="Favorites" className="hiden-show">
                {Object.keys(isLiked).filter(
                    (id) => isLiked[parseInt(id)] === true
                ).length ? (
                    <ThumbUpAltIcon />
                ) : (
                    <ThumbUpOffAltIcon />
                )}
            </Link>
        </div>
    )
}

export default SocialMedia
