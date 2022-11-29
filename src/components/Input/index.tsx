import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
}

export function Input({ id, ...rest }: InputProps) {
  const { register } = useFormContext()

  return <StyledInput id={id} {...rest} {...register(id)} />
}
