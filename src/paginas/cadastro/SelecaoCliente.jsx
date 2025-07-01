import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import clienteConcluindo from './assets/cliente-concluido.png';
import cliente from './assets/cliente.png';
import freela from './assets/freela.png'
import { Link } from "../../componentes/Link/Link";
import { Link as RouterLink } from 'react-router-dom';

const SelecaoCliente = () => {
    return (<div style={{ textAlign: 'center'}}>
        <Tipografia variante="h1" componente="h1">
            Crie seu cadastro
        </Tipografia>
        <Tipografia variante="h3" componente="h2">
            Como podemos te ajudar ?
        </Tipografia>
        <Row>
            <Col md={6} sm={12}>
                <RouterLink to='interesses'>
                    <img src={cliente} alt="Mulher de cabelos escuros cacheados e óculos, com a mão apoiada no rosto olhando compenetrada para uma tela." />
                    <Tipografia variante="body" componente="body">Sou cliente e preciso de um freela!</Tipografia>
                </RouterLink>
            </Col>
            <Col md={6} sm={12}>
                <img src={freela} alt="Homem de cabelos escuros curtos, camisa clara e relógio de pulso falando e gesticulando com as mãos." />
                <Tipografia variante="body" componente="body">Sou um freela e preciso de clientes!</Tipografia>

            </Col>
        </Row>
        <div >
            <Tipografia variante="body2" componente="body2">Já tem conta?</Tipografia>
            <Link variante="body" componente="body2">Faça login!</Link>
        </div>

    </div>)
}

export default SelecaoCliente;