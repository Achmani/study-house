import { styled } from 'styled-components'
import { ReactComponent as PencilSvg } from './assets/icons/pencil.svg'
import { ReactComponent as TrashSvg } from './assets/icons/trash.svg'

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  padding: 100px 20px;
  min-height: 100vh;
`
export const ContainerActions = styled.div`
  display: flex;
  gap: 10px;
  min-width: 40px;
`
export const PencilIcon = styled(PencilSvg)`
  height: 20px;
  width: 37px;
  cursor: pointer;
`

export const TrashIcon = styled(TrashSvg)`
  height: 20px;
  width: 20px;
  cursor: pointer;
`
