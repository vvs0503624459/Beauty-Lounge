import { AppBar, Container } from '@mui/material'
import HeaderTop from './HeaderTop'
import './Header.scss'
import Menu from '../Menu/Menu'
type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar className="header-appbar" position="absolute">
            <Container>
                {/* <Toolbar> */}
                <HeaderTop />
                {/* </Toolbar> */}
                {/* <Toolbar> */}
                <Menu />
                {/* </Toolbar> */}
            </Container>
        </AppBar>
    )
}

export default Header
