import * as React from 'react'
import {Section, Container} from '@atlr/kit'

type WrapperProps = {
  children?: React.ReactNode
}

const ComponentWrapperProvider = ({...props}: WrapperProps) => {
  return (
  <Section>
    <Container
      {...props}
      size={'full'}
      dev
      css={{justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
      {props.children}
    </Container>
  </Section>
)
}

export const ComponentWrapper = ({children}: WrapperProps) => {
  return <ComponentWrapperProvider>{children}</ComponentWrapperProvider>
}