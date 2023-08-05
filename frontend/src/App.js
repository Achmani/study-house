import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

import { Container, ContainerActions, PencilIcon, TrashIcon } from './_appStyle'
import { AddEditUserModal, DeleteUserModal } from './components/modals/user'
import { Button } from '@mui/material'
import { useGetUsers } from './apis/user'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const columns = [
  {
    name: 'Name',
    selector: (row) => row.name
  },
  {
    name: 'Email',
    selector: (row) => row.email
  },
  {
    name: 'Actions',
    selector: (row) => row.action
  }
]

const data = [
  {
    id: 1,
    name: 'Beetlejuice',
    email: 'Beetlejuice@gmail.com',
    action: <Action />
  },
  {
    id: 2,
    name: 'Ghostbusters',
    email: 'Ghostbusters@gmail.com',
    action: <Action />
  }
]

function Action({ onEdit, onDelete }) {
  return (
    <ContainerActions>
      <PencilIcon onClick={onEdit} />
      <TrashIcon onClick={onDelete} />
    </ContainerActions>
  )
}

function App() {
  const [page, setPage] = useState(1)
  const {data:usersResponse} = useGetUsers({page})
  const [userModal, setUserModal] = useState(null)
  const [deleteUserModal, setDeleteUserModal] = useState(null)

  const totalUsers = usersResponse?.total || 0

  console.log(totalUsers)

  const dataWithActions = usersResponse?.data.map((d) => ({
    ...d,
    action: (
      <Action
        {...d}
        onEdit={() => setUserModal({ ...d, type: 'edit' })}
        onDelete={() => setDeleteUserModal({ ...d })}
      />
    )
  }))

  const handlePageChange = (page) => {
    setPage(page)
  }

  return (
      <Container>
        {!!userModal && <AddEditUserModal {...userModal} onClose={() => setUserModal(null)} />}
        {!!deleteUserModal && <DeleteUserModal {...deleteUserModal} onClose={() => setDeleteUserModal(null)} />}
        <Button
          onClick={() => setUserModal({ type: 'create' })}
          variant='contained'
          sx={{ width: '200px', marginLeft: 'auto' }}
        >
          Create
        </Button>
        <DataTable
          columns={columns}
          data={dataWithActions}
          pagination
          paginationServer
          onChangePage={handlePageChange}
          paginationTotalRows={totalUsers}
          
        />
      </Container>
  )
  // }
}

const AppWithProvider = ()=>{
  return(<QueryClientProvider client={queryClient}>
    <App/>
  </QueryClientProvider>)

}

export default AppWithProvider
