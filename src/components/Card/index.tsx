import { CardContainer, TitleContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

interface CardProps {
  description: string
  title: string
  date: Date
  id: number
}

export function Card({ description, title, date, id }: CardProps) {
  const formattedDescription = description.split(' ', 25).join(' ')
  const formattedDate = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
  const navigate = useNavigate()

  return (
    <CardContainer onClick={() => navigate(`/post/${id}`)}>
      <TitleContainer>
        <h1>{title}</h1>
        <p>{formattedDate}</p>
      </TitleContainer>
      <p>{formattedDescription}...</p>
    </CardContainer>
  )
}
