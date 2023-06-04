import { useState, useRef, useEffect, MouseEventHandler } from 'react';


import oAxios from '../axios/reqres';
import { api } from '../config/api';
import { User, UserList } from "../interfaces/reqres"


const { endpoints } = api.reqres
const { getUsers } = endpoints


type UseUsuarios = { 
    users: User[], 
    nextPage: MouseEventHandler<HTMLButtonElement>, 
    previousPage: MouseEventHandler<HTMLButtonElement> 
}

export const useUsuarios = (): UseUsuarios => {

    const [users, setUsers] = useState<User[]>([])

    const pageRef = useRef( 1 )

    useEffect( () => {
        loadUsers( pageRef.current )
    }, [])

    const loadUsers = async (pageToShow: number): Promise<void> => {
        const response = await oAxios
            .get<UserList>( 
                getUsers, 
                { 
                    params: { page: pageToShow } 
                } 
            )
        
        if( response.data.data.length > 0 && pageToShow > 0 ){
            pageRef.current = pageToShow
            setUsers( response.data.data )
        } else {
            alert('No hay más usuarios')
        }
        
    }

    const nextPage = () => {
        loadUsers(pageRef.current + 1)
    }

    const previousPage = () => {
        loadUsers(pageRef.current - 1)
    }

    return {    
        users,
        nextPage,
        previousPage
    }
}
