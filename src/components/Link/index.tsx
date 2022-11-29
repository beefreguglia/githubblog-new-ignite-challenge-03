import { AnchorHTMLAttributes, ReactNode } from 'react'
import { StyledLink } from './styles'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export function Link({ children, ...rest }: LinkProps) {
  return <StyledLink {...rest}>{children}</StyledLink>
}
