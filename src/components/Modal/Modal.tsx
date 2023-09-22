import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

type Props = {
    modalWindow: (arg0: boolean) => void
}
type ClientData = {
    clientName: string
    phone: string
}

const Modal = ({ modalWindow }: Props) => {
    const [clientData, setClientData] = useState<ClientData>({
        clientName: '',
        phone: '',
    })
    const [isDataSend, setIsDataSend] = useState<boolean>(false)
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClientData((prevState) => ({
            ...prevState,
            clientName: e.target.value,
        }))
    }
    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClientData((prevState) => ({
            ...prevState,
            phone: e.target.value,
        }))
    }
    const onSend = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Thank's
        try {
            const { data } = await axios.post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    clientName: clientData.clientName,
                    phone: clientData.phone,
                }
            )
            setClientData({ clientName: data.clientName, phone: data.phone })
            setIsDataSend(true)
        } catch (e) {
            console.log(e)
        }

        // console.log(res)
    }
    // const onSend = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     axios
    //         .post(
    //             'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
    //             {
    //                 clientName: clientData.clientName,
    //                 phone: clientData.phone,
    //             }
    //         )
    //         // .then((res) => console.log(res))
    //         .then((res) => res.data)
    //         .then(({ clientName, phone }) => {
    //             setClientData({ clientName, phone })
    //             setIsDataSend(true)
    //         })
    // }
    const renderForm = () => {
        return (
            <form onSubmit={onSend}>
                <div className="form-field">
                    <input
                        type="text"
                        value={clientData.clientName}
                        placeholder="Your name"
                        onChange={handleName}
                    />
                </div>
                <div className="form-field">
                    <input
                        type="text"
                        value={clientData.phone}
                        placeholder="Your phone number"
                        onChange={handlePhone}
                    />
                </div>
                <div className="btn-box">
                    <button>Send</button>
                </div>
            </form>
        )
    }
    const renderMessage = () => {
        return (
            <div>
                <div>
                    Dear, {clientData.clientName} we will contact with you as
                    soon as we can
                </div>
            </div>
        )
    }
    return (
        <div className="modal-block">
            <button onClick={() => modalWindow(false)} className="btn-close">
                X
            </button>
            <Typography
                variant="h4"
                component={'h1'}
                sx={{
                    margin: '30px 0',
                }}
            >
                {isDataSend
                    ? ' We recived your request'
                    : 'Please enter your contact information'}
            </Typography>
            {isDataSend ? renderMessage() : renderForm()}
        </div>
    )
}

export default Modal
