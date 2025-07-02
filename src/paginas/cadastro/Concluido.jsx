import { Link as RouterLink } from "react-router-dom";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Botao } from "../../componentes/Botao/Botao";
import { Row, Col } from "react-grid-system";
import clienteConcluindo from "./assets/cliente-concluido.png";
import styled from "@emotion/styled";

const ImagemEstilizada = styled.img`
    max-width:100%;
    border-radius: 16px;
`

const Concluido = () => {
    return (
        <>
            <div style={{ textAlign: 'center ' }}>
                <Tipografia variante="h1" componente="h1">
                    Seu perfil está completo
                </Tipografia>

                <Tipografia variante="body" componente="body">
                    Agora é só começar a se conectar com os melhores freelancers do mercado!
                </Tipografia>
            </div>
            <figure>
                <ImagemEstilizada src={clienteConcluindo} alt="Mulher jovem de cabelos cacheados e óculos, sentada à frente de um computador com a mão apoiada no queixo e expressão sorridente." />
            </figure>
            <Row justify="center">
                <Col lg={6} md={6} sm={6} style={{ textAlign: "center" }}>
                    <RouterLink to='/cadastro'>
                        <Botao variante="secundaria">
                            Voltar para a home
                        </Botao>
                    </RouterLink>
                </Col>
            </Row>
        </>
    )
}

export default Concluido;