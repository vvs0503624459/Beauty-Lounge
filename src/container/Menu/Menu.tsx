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
                <div className="dropdown-box flex">
                    <Link to={'/Hairstyles'}>hairstyles</Link>
                    <Arrows />
                </div>
                <ul className="dropdown-item is-hover">
                    <li className="dropdown-item-li">
                        <Link to={'/Hairstyles-wedding'}>wedding</Link>
                    </li>
                    <li className="dropdown-item-li">
                        <Link to={'/Hairstyles-pigtails'}>pigtails</Link>
                    </li>
                    <li className="dropdown-item-li">
                        <Link to={'/Hairstyles-curls'}>curls</Link>
                    </li>
                </ul>
            </div>
            <div className="dropdown-menu when-hover">
                <div className="dropdown-box flex">
                    <Link to={'/Nails'}>nails</Link>
                    <Arrows />
                </div>
                <ul className="dropdown-item is-hover">
                    <li className="dropdown-item-li">
                        <Link to={'/Nails-wedding'}>wedding</Link>
                    </li>
                    <li className="dropdown-item-li">
                        <Link to={'/Nails-regular'}>regular</Link>
                    </li>
                    <li className="dropdown-item-li">
                        <Link to={'/Nails-care'}>care</Link>
                    </li>
                </ul>
            </div>
            <div className="dropdown-menu when-hover">
                <div className="dropdown-box flex">
                    <Link to={'/Makeup'}>make up</Link>
                    <Arrows />
                </div>
                <ul className="dropdown-item is-hover">
                    <li className="dropdown-item-li">
                        <Link to={'/Makeup-wedding'}>wedding</Link>
                    </li>
                    <li className="dropdown-item-li">
                        <Link to={'/Makeup-regular'}>regular</Link>
                    </li>
                    <li className="dropdown-item-li">
                        <Link to={'/Makeup-care'}>care</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link to={'/Favorites'}>Favorites</Link>
            </div>
        </div>
    )
}

export default Menu
