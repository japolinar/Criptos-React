import styled from '@emotion/styled'
import React, {useState} from 'react'

const Label = styled.label `
    color: white;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select `
    width: 100%;
    font-size: 18px;
    padding: 14px;    
    text-align: center;
    border-radius: 7px;
`
const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('')

    const SelectMonedas = ()=>(
        <div>
            <Label htmlFor=""> {label} </Label>
            <Select 
                value={state} 
                onChange={(e)=> setState(e.target.value)}
            >
                <option value="">Seleciones</option>

                {opciones.map((opcion)=>(
                    <option 
                        key={opcion.id}
                        value={opcion.id}                        
                    > 
                        {opcion.nombre} 
                    </option>
                ))}

            </Select>
        </div>
    )
  return [state, SelectMonedas] //Importante va en Corchete
}

export default useSelectMonedas
