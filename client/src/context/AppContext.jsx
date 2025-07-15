import React, { useEffect } from 'react';
import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AppContext =createContext()

const AppContextProvider=(props)=>{
    const[user,setUser]=useState(null);
    const [showLogin,setShowLogin]= useState(false);
    const [token,setToken] = useState(localStorage.getItem('token'))

    const [credit,setCredit]= useState(null)
    const backendUrl= import.meta.env.VITE_BACKEND_URL

    const navigate= useNavigate()

    const loadCreditsData = async()=>{
        try {

            if (!token) return; 
            const baseUrl = backendUrl.endsWith('/') ? backendUrl : `${backendUrl}/`;
            const url = `${baseUrl}api/user/credits`;

            // const {data}= await axios.get(backendUrl + 'api/user/credits', {headers:{token}});
            const { data } = await axios.get(url, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if(data.success){
                // setCredit(Number(data.credits))
                setCredit(Number(data.credit || data.credits || 0));
                setUser(data.user)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }

    const generateImage = async(prompt)=>{
        try {
            const {data}=await axios.post(backendUrl+ '/api/image/generate-image',{prompt},{headers:{token}})

            if(data.success){
                loadCreditsData();
                return data.resultImage
            }else{
                toast.error(data.message)
                loadCreditsData()
                if(data.creditalance===0){
                    navigate('/buy')
                }
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const logout =()=>{
        localStorage.removeItem('token');
        setToken('')
        setUser(null)
        setCredit(null)
    }

    useEffect(()=>{
        if(token){
            loadCreditsData()
        }else{
            setCredit(null)
        }
    },[token])

    const value={
        user,setUser,showLogin,setShowLogin,backendUrl,token,setToken,credit,setCredit,loadCreditsData,logout,generateImage
    }


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider