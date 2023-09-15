import SocialMedia from '../../components/SocialMedia/SocialMedia'
import { Button } from '@mui/material'

type Props = {}

const HeaderTop = (props: Props) => {
    return (
        <div className="header-top flex between">
            <div>
                <SocialMedia />
            </div>
            <div className="header-top-btn-box">
                <Button variant="contained" disableElevation>
                    To became a client
                </Button>
            </div>
        </div>
    )
}

export default HeaderTop
