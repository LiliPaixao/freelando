import { Row, Col } from "react-grid-system";
import { Card } from "../../componentes/Card/Card";
import SelecaoCliente from "./SelecaoCliente";
import { Outlet } from "react-router-dom";
import { CadastroUsuarioProvider } from "../../contexto/CadastroUsuario";

const LayoutBaseCadastro = () => {
    return (
        <CadastroUsuarioProvider>
            <Row justify="center">
                <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ margin: '80px 0' }}>
                    <Card>
                        <Outlet />
                    </Card>
                </Col>
            </Row>
        </CadastroUsuarioProvider>
    )
}

export default LayoutBaseCadastro;