import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  GithubLinkContainer,
  HomeCardsContainer,
  HomeContainer,
  HomePrincipalCard,
  InformationContainer,
  LinkContent,
  LinksContainer,
  SearchForm,
  TitleContainer,
} from './styles'

import { Input } from '../../components/Input'
import { Card } from '../../components/Card'
import { githubApi } from '../../lib/axios'
import { useEffect, useState } from 'react'
import { Link } from '../../components/Link'

interface UserData {
  avatar_url: string
  company: string | null
  bio: string
  html_url: string
  followers: number
  name: string
  login: string
}

interface CardData {
  title: string
  id: number
  description: string
  createdAt: Date
}

interface PostsData {
  count: number
  cards: CardData[]
}

interface GithubItems {
  title: string
  id: number
  created_at: string
  body: string
}

interface GithubResponse {
  total_count: number
  items: GithubItems[]
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Home() {
  const [userData, setUserData] = useState({} as UserData)
  const [postsData, setPostsData] = useState<PostsData>({} as PostsData)

  async function getGithubUserData() {
    const response = await githubApi.get<UserData>('/users/beefreguglia')
    setUserData(response.data)
  }

  const searchForm = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  })
  const { register, watch } = searchForm
  const queryValue = watch('query')

  async function handleGetGithubIssue(query?: string) {
    let params = {
      q: 'repo:beefreguglia/githubblog-new-ignite-challenge-03',
    }
    if (query) {
      params = {
        q: `${query} repo:beefreguglia/githubblog-new-ignite-challenge-03`,
      }
    }
    const { data } = await githubApi<GithubResponse>('/search/issues', {
      params,
    })
    const { items, total_count: totalCount } = data

    const cardAux = items.map((item) => {
      return {
        title: item.title,
        id: item.id,
        description: item.body,
        createdAt: new Date(item.created_at),
      }
    })

    const formattedResult: PostsData = {
      count: totalCount,
      cards: cardAux,
    }
    setPostsData(formattedResult)
  }

  useEffect(() => {
    getGithubUserData()
    handleGetGithubIssue()
  }, [])

  useEffect(() => {
    const delayWhenTyping = setTimeout(() => {
      handleGetGithubIssue(queryValue)
    }, 500)
    return () => clearTimeout(delayWhenTyping)
  }, [queryValue])

  return (
    <HomeContainer>
      <HomePrincipalCard>
        <img src={userData.avatar_url} alt="foto do usuário" />
        <InformationContainer>
          <GithubLinkContainer>
            <h1>{userData.name}</h1>
            <Link href={userData.html_url} target="_blank" rel="noreferrer">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
            </Link>
          </GithubLinkContainer>
          <p>{userData.bio}</p>
          <LinksContainer>
            <LinkContent>
              <FontAwesomeIcon icon={faGithub} size="lg" />
              {userData.login}
            </LinkContent>
            {userData.company && (
              <LinkContent>
                <FontAwesomeIcon icon={faBuilding} size="lg" />
                {userData.company}
              </LinkContent>
            )}
            <LinkContent>
              <FontAwesomeIcon icon={faUserGroup} size="lg" />
              {userData.followers} seguidores
            </LinkContent>
          </LinksContainer>
        </InformationContainer>
      </HomePrincipalCard>
      <TitleContainer>
        <h2>Publicações</h2>
        {postsData && postsData.count !== 1 ? (
          <p>{postsData.count} publicação</p>
        ) : (
          <p>{postsData.count} publicações</p>
        )}
      </TitleContainer>
      <SearchForm>
        <FormProvider {...searchForm}>
          <Input
            type="text"
            id="query"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </FormProvider>
      </SearchForm>
      <HomeCardsContainer>
        {postsData?.cards &&
          postsData.cards.map((card) => {
            return (
              <Card
                key={card.id}
                date={card.createdAt}
                description={card.description}
                title={card.title}
                id={card.id}
              />
            )
          })}
      </HomeCardsContainer>
    </HomeContainer>
  )
}
