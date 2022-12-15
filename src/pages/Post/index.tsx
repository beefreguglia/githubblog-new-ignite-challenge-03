import { useEffect, useState } from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Link } from '../../components/Link'
import {
  LinksContainer,
  PostContainer,
  PostContent,
  PostInformationContainer,
  PostInformationContent,
  PostPrincipalCard,
} from './styles'
import { githubApi } from '../../lib/axios'

interface PrincipalCardInformationProps {
  nickname: string
  createdAt: string
  comments: number
  title: string
  githubUrl: string
}

interface User {
  login: string
}

interface GithubIssueResponse {
  created_at: string
  comments: number
  title: string
  html_url: string
  body: string
  user: User
}

export function Post() {
  const { issueId } = useParams()
  const [principalCardInformation, setPrincipalCardInformation] = useState(
    {} as PrincipalCardInformationProps,
  )
  const [post, setPost] = useState('')

  useEffect(() => {
    async function handleGetGithubIssueByIssueId() {
      const { data } = await githubApi<GithubIssueResponse>(
        `/repos/beefreguglia/githubblog-new-ignite-challenge-03/issues/${issueId}}`,
      )
      const {
        user,
        comments,
        created_at: createdAt,
        html_url: htmlUrl,
        title,
        body,
      } = data

      const formattedDate = formatDistanceToNow(new Date(createdAt), {
        locale: ptBR,
        addSuffix: true,
      })

      setPrincipalCardInformation({
        nickname: user.login,
        comments: Number(comments),
        createdAt: formattedDate,
        githubUrl: htmlUrl,
        title,
      })

      setPost(body)
    }
    handleGetGithubIssueByIssueId()
  }, [issueId])

  return (
    <PostContainer>
      <PostPrincipalCard>
        <LinksContainer>
          <Link href="/">
            <FontAwesomeIcon icon={faChevronLeft} size="sm" />
            VOLTAR
          </Link>
          <Link
            href={principalCardInformation.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
          </Link>
        </LinksContainer>
        <h1>{principalCardInformation.title}</h1>
        <PostInformationContainer>
          <PostInformationContent>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <p>{principalCardInformation.nickname}</p>
          </PostInformationContent>
          <PostInformationContent isFirstLetterIsUpperCase>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <p>{principalCardInformation.createdAt}</p>
          </PostInformationContent>
          <PostInformationContent>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <p>
              {principalCardInformation.comments}{' '}
              {principalCardInformation.comments === 1
                ? 'Comentário'
                : 'Comentários'}
            </p>
          </PostInformationContent>
        </PostInformationContainer>
      </PostPrincipalCard>
      <PostContent>
        <ReactMarkdown>{post}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
