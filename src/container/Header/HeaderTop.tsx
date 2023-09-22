import SocialMedia from '../../components/SocialMedia/SocialMedia'
import { Button } from '@mui/material'
import { useState } from 'react'
import Modal from '../../components/Modal/Modal'

type Props = {}

const HeaderTop = (props: Props) => {
    const [open, SetOpen] = useState(false)
    function modalWindow() {
        SetOpen((prevState) => !prevState)
    }

    return (
        <div className="header-top flex between">
            <div>
                <SocialMedia />
            </div>
            <div className="header-top-btn-box">
                <Button
                    variant="contained"
                    disableElevation
                    onClick={() => modalWindow()}
                >
                    To became a client
                </Button>
            </div>
            <div
                className={open ? 'modal modal-show' : 'modal modal-hide'}
                // onClick={() => modalWindow()}
            >
                <Modal modalWindow={modalWindow} />
            </div>
        </div>
    )
}

export default HeaderTop
