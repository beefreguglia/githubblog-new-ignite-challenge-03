import { CardContainer, TitleContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface CardProps {
  description: string
  title: string
  date: Date
}

export function Card({ description, title, date }: CardProps) {
  const formattedDescription = description.split(' ', 25).join(' ')
  const formattedDate = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
  return (
    <CardContainer>
      <TitleContainer>
        <h1>{title}</h1>
        <p>{formattedDate}</p>
      </TitleContainer>
      <p>{formattedDescription}...</p>
    </CardContainer>
  )
}
