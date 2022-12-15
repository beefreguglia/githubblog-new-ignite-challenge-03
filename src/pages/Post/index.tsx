import {
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '../../components/Link'
import { LinksContainer, PostContainer, PostPrincipalCard } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostPrincipalCard>
        <LinksContainer>
          <Link href="" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faChevronLeft} size="sm" />
            VOLTAR
          </Link>
          <Link href="" target="_blank" rel="noreferrer">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
          </Link>
        </LinksContainer>
      </PostPrincipalCard>
    </PostContainer>
  )
}
