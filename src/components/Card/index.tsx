import { CardContainer, TitleContainer, DescriptionContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

interface CardProps {
  description: string
  title: string
  date: Date
  number: number
}

export function Card({ description, title, date, number }: CardProps) {
  const formattedDescription = description.split(' ', 25).join(' ')
  const formattedDate = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
  const navigate = useNavigate()

  return (
    <CardContainer onClick={() => navigate(`/post/${number}`)}>
      <TitleContainer>
        <h1>{title}</h1>
        <p>{formattedDate}</p>
      </TitleContainer>
      <DescriptionContainer>
        <ReactMarkdown>{`${formattedDescription}...`}</ReactMarkdown>
      </DescriptionContainer>
    </CardContainer>
  )
}
