import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()


    useEffect(() => {
        axios.post('http://localhost:3000/Map', {
            code, 
        }).then(res => {
            console.log(res.data)
        })
    }, [code])
}