import { css, Global } from "@emotion/react"

const estilos = css`
    * {
        font-family: "Montserrat", sans-serif;
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;
    }
`

export const Estilos = () => {
    return (<Global styles={estilos}/>)
}