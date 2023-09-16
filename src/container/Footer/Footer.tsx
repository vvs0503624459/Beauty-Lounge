import { Container } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import IconButton from '@mui/joy/IconButton'
import Input from '@mui/joy/Input'
import SocialMedia from '../../components/SocialMedia/SocialMedia'

import './Footer.scss'
type Props = {}

const Footer = (props: Props) => {
    return (
        <div className="footer-appbar">
            <Container>
                <div className="footer-box flex between">
                    <div>
                        <SocialMedia />
                    </div>
                    <div className="subscribe-box">
                        <Input
                            variant="soft"
                            placeholder="Type in your email"
                            type="email"
                            name="email"
                            endDecorator={
                                <IconButton
                                    variant="soft"
                                    aria-label="subscribe"
                                >
                                    <SendIcon />
                                </IconButton>
                            }
                            sx={{
                                ml: 'auto',
                                display: { xs: 'none', md: 'flex' },
                            }}
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
