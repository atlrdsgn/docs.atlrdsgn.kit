import * as React from 'react'
import {Button, Container, Space} from '@atlr/kit'

import {ComponentWrapper} from '@/components/common/ComponentWrapper'

const ButtonDemoProvider = () => {
  return (
    <>
      <ComponentWrapper>
        <Container size={'md'} align={'center'} css={{}}>
          <Space size={'md'} />
          <Button size={'sm'} neon>
            Neon Button
          </Button>

          <Space size={'md'} />
        </Container>
      </ComponentWrapper>
    </>
  )
}

export const ButtonDemo = () => {
  return <ButtonDemoProvider />
}