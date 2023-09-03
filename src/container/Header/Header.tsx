import { AppBar, Container } from '@mui/material'
import HeaderBody from './HeaderBody'
import HeaderTop from './HeaderTop'
import './Header.scss'
type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar className="header-appbar" position="static">
            <Container>
                {/* <Toolbar> */}
                <HeaderTop />
                {/* </Toolbar> */}
                {/* <Toolbar> */}
                <HeaderBody />
                {/* </Toolbar> */}
            </Container>
        </AppBar>
    )
}

export default Header
