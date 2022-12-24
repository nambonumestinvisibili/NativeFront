import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.View`
  align-self: center;
`

const Icon = ({ family, name, size, color}) => {
  const Family = family
  return (
    <IconWrapper>
      <Family name={name} size={size} color={color} />
    </IconWrapper>
  )
}

Icon.propTypes = {

}

export default Icon