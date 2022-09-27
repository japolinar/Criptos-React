import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div `
    background-color: #B7322C;
    color: white;
    padding: 15px;
    font-size: 22px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    text-align: center;
    border-radius: 7px;    
`

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
