import { Link } from 'react-router-dom'
import Arrows from '../../components/Arrows/Arrows'
type Props = {}

const Menu = (props: Props) => {
    return (
        <div className="menu flex end">
            <div>
                <Link to={'/'}>home</Link>
            </div>
            <div className="dropdown-menu when-hover">
                <div className="flex">
                    <Link to={'/Hairstyles'}>hairstyles</Link>
                    <Arrows />
                </div>
                <ul className="dropdown-item is-hover">
                    <li>
                        <Link to={'/Hairstyles'}>wedding</Link>
                    </li>
                    <li>
                        <Link to={'/Hairstyles'}>pigtails</Link>
                    </li>
                    <li>
                        <Link to={'/Hairstyles'}>curls</Link>
                    </li>
                </ul>
            </div>
            <div className="dropdown-menu when-hover">
                <div className="flex">
                    <Link to={'/Nails'}>nails</Link>
                    <Arrows />
                </div>
                <ul className="dropdown-item is-hover">
                    <li>
                        <Link to={'/Nails'}>wedding</Link>
                    </li>
                    <li>
                        <Link to={'/Nails'}>regular</Link>
                    </li>
                    <li>
                        <Link to={'/Nails'}>care</Link>
                    </li>
                </ul>
            </div>
            <div className="dropdown-menu when-hover">
                <div className="flex">
                    <Link to={'/MakeUp'}>make up</Link>
                    <Arrows />
                </div>
                <ul className="dropdown-item is-hover">
                    <li>
                        <Link to={'/MakeUp'}>wedding</Link>
                    </li>
                    <li>
                        <Link to={'/MakeUp'}>regular</Link>
                    </li>
                    <li>
                        <Link to={'/MakeUp'}>care</Link>
                    </li>
                </ul>
            </div>
            <div>Favorites</div>
        </div>
    )
}

export default Menu
