import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  GithubLinkContainer,
  HomeCardsContainer,
  HomeContainer,
  HomePrincipalCard,
  InformationContainer,
  LinkContent,
  LinksContainer,
  SearchForm,
  StyledLink,
  TitleContainer,
} from './styles'

import { Input } from '../../components/Input'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <HomeContainer>
      <HomePrincipalCard>
        <img src="https://github.com/beefreguglia.png" alt="foto do usuário" />
        <InformationContainer>
          <GithubLinkContainer>
            <h1>Bernardo Freguglia</h1>
            <StyledLink to="https://github.com/beefreguglia/githubblog-new-ignite-challenge-03/issues">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
            </StyledLink>
          </GithubLinkContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            perspiciatis nisi voluptatibus numquam molestias adipisci nesciunt,
          </p>
          <LinksContainer>
            <LinkContent>
              <FontAwesomeIcon icon={faGithub} size="lg" />
              beefreguglia
            </LinkContent>
            <LinkContent>
              <FontAwesomeIcon icon={faBuilding} size="lg" />
              Seazone
            </LinkContent>
            <LinkContent>
              <FontAwesomeIcon icon={faUserGroup} size="lg" />
              32 seguidores
            </LinkContent>
          </LinksContainer>
        </InformationContainer>
      </HomePrincipalCard>
      <TitleContainer>
        <h2>Publicações</h2>
        <p>0 publicações</p>
      </TitleContainer>
      <SearchForm>
        <Input type="text" placeholder="Buscar conteúdo" />
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
