import styled from 'styled-components'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'

export const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2.5)};
  margin-bottom: ${({ theme }) => theme.spacing(2.5)};

  @media ${({ theme }) => theme.breakpoints.down('sm')} {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const HeaderDate = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const PageTitle = styled.h2`
  margin: ${({ theme }) => theme.spacing(0.5, 0, 0)};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1.9rem;
  line-height: 1.2;
`

export const Actions = styled(Stack)`
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};

  @media ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
    justify-content: flex-start;
  }
`

export const HeaderIconButton = styled(IconButton)`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.palette.text.primary};
  background: ${({ theme }) => theme.palette.action.hover};
`

export const NewReportButton = styled(Button)`
  min-height: 40px;
  padding-inline: ${({ theme }) => theme.spacing(1.75)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background: linear-gradient(135deg, ${({ theme }) => theme.palette.primary.main}, ${({ theme }) => theme.palette.primary.dark});
  box-shadow: 0 8px 18px ${({ theme }) => theme.dashboard.primaryShadow};

  &:hover {
    background: linear-gradient(135deg, ${({ theme }) => theme.palette.primary.dark}, ${({ theme }) => theme.palette.primary.main});
  }
`

export const NotificationMenu = styled.div`
  position: relative;
`

export const SearchDialog = styled(Dialog)`
  & .MuiDialog-paper {
    width: 100%;
    border-radius: ${({ theme }) => theme.shape.borderRadius + 4}px;
  }
`

export const SearchForm = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing(1.5)};
  padding: ${({ theme }) => theme.spacing(2.5)};
`

export const DialogHeading = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1.2rem;
`

export const SearchActions = styled(Stack)`
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(0.5)};
`

export const FormError = styled.p`
  margin: ${({ theme }) => theme.spacing(-1, 0, 0)};
  color: ${({ theme }) => theme.dashboard.errorText};
  font-size: 0.8rem;
`