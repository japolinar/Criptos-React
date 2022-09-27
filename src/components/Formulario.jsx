import React, {useState ,useEffect} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'


const InputSiubmit = styled.input `
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 7px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {     
   const [criptos, setCriptos] = useState([]) 
   const [error, setError] = useState(false)

   const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomonedas', criptos)

    useEffect( ()=>{
        const consultarAPI = async()=> {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            const arraCriptos = resultado.Data.map((cripto)=>{

                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                //console.log(cripto.CoinInfo)
                //console.log(cripto.CoinInfo.Name)
                //console.log(cripto.CoinInfo.FullName)
                //console.log(objeto)
                return objeto
            })
            //console.log(arraCriptos)
            setCriptos(arraCriptos)
        }
        consultarAPI()
    },[])

  const handleSubmit = (e)=>{
    e.preventDefault()
    if([moneda, criptomoneda].includes('')){
    setError(true)

    //Para que se esconda el mensaje del error en 10 segundos    
    setTimeout( ()=>{
    setError(false)
    }, 10000)

    return
    } 
    
    //si pasa la validacion se esconda el error
    setError(false)

    setMonedas({
        moneda,
        criptomoneda
    })

  }    

  return (
    <div>
        {error && <Error>Todos los campos son obligatorios</Error> }
        <form onSubmit={handleSubmit}>
            <SelectMonedas> </SelectMonedas>
            <SelectCriptomoneda></SelectCriptomoneda>                
            <InputSiubmit type="submit" value="Cotizar" />
        </form>
      
    </div>
  )
}

export default Formulario
