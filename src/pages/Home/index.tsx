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

// interface CardInformation {
//   count: number
// }

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Home() {
  const [userData, setUserData] = useState({} as UserData)

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

  async function handleGetGithubIssue(query: string) {
    const response = await githubApi('/search/issues', {
      params: {
        q: `${query} repo:beefreguglia/githubblog-new-ignite-challenge-03`,
      },
    })
    console.log(response.data.items)
  }

  useEffect(() => {
    getGithubUserData()
  }, [])

  useEffect(() => {
    console.log(queryValue)
    if (queryValue) {
      handleGetGithubIssue(queryValue)
    }
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
        <p>0 publicações</p>
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </HomeCardsContainer>
    </HomeContainer>
  )
}
