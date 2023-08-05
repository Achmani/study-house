import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { styled } from 'styled-components'
import { useCreateUser, useDeleteUser, useUpdateUser } from '../../apis/user'
import { useQueryClient } from 'react-query'
import apiKeys from '../../consts/apiKey'

export const ContainerModal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentModal = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  min-width: 500px;
`

export function AddEditUserModal({ type, onClose, name, email, id }) {
  const [user, setUser] = useState({ name, email })
  const isEdit = type === 'edit'
  const queryClient = useQueryClient()

  const hooksMutation = isEdit ? useUpdateUser : useCreateUser
  const {mutateAsync} = hooksMutation()
  
  const onChange = (key, value) => setUser((prev) => ({ ...prev, [key]: value }))

  const onSubmit = async () => {
    try {
      await mutateAsync({id, name:user.name, email:user.email})
      queryClient.invalidateQueries([apiKeys.users])
      onClose()
    }
    catch(e){
      console.error(e)
    }
  }

  return (
    <Modal open={true} onClose={onClose}>
      <ContainerModal>
        <ContentModal>
          <Typography id='modal-modal-title' variant='h6' component='h2' mb={2}>
            {isEdit ? 'Edit' : 'Create'} user
          </Typography>
          <Box display='flex' gap={2} flexDirection='column'>
            <TextField label='Name' value={user?.name} onChange={(e) => onChange('name', e.target.value)} />
            {!isEdit && <TextField type='email' label='Email' value={user?.email} onChange={(e) => onChange('email', e.target.value)} />}
          </Box>
          <Box display='flex' gap={2} mt={5} justifyContent='flex-end'>
            <Button variant='outlined' color='error' onClick={onClose}>
              Cancel
            </Button>
            <Button variant='contained' color='success' onClick={onSubmit}>
              Submit
            </Button>
          </Box>
        </ContentModal>
      </ContainerModal>
    </Modal>
  )
}

export function DeleteUserModal({ onClose, id }) {
  const {mutateAsync} = useDeleteUser()
  const  queryClient = useQueryClient()

  const onDelete = async()=>{
    try {
      await mutateAsync({id})
      queryClient.invalidateQueries([apiKeys.users])
      onClose()
    }
    catch(e){
      console.error(e)
    }
  }

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Delete user</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure to delete this user?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onDelete}>Delete</Button>
      </DialogActions>
    </Dialog>
  )
}
