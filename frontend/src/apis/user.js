import axios from "axios"
import { user, users } from "../consts/api"
import { useMutation, useQuery } from "react-query"
import apiKeys from "../consts/apiKey"

// fetchers

export const getUsers = async ({page}) => axios.get(users,{params:{page, orderBy:"name", search:"", orderType:"asc"}, headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((res)=>res.data)
export const createUser = async ({name, email})=>axios.post(user,{name,email})
export const updateUser = async ({name, id})=>axios.put(`${user}?id=${id}`,{name})
export const deleteUser = async ({id})=>axios.delete(`${user}?id=${id}`)

// hooks

export const useGetUsers = ({page})=> useQuery([apiKeys.users, page], ()=>getUsers({page}))
export const useCreateUser = ()=> useMutation(createUser)
export const useUpdateUser = ()=>useMutation(updateUser)
export const useDeleteUser = ()=>useMutation(deleteUser)
