import React from 'react'
import {
  Layout,
  Typography,
  Card,
  Button,
  Row,
  Col,
  Divider,
  message
} from 'antd'
import {
  UserOutlined,
  CheckCircleTwoTone,
  FileDoneOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const { Title, Text } = Typography
const { Header, Content, Footer } = Layout

const Dashboard: React.FC = () => {
  const navigate = useNavigate()

  const handleVotar = () => {
    message.success('Redirigiendo a la plataforma de votación...')
    navigate('/votacion')
  }

  const handleLogout = () => {
    message.info('Sesión finalizada')
    navigate('/')
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#001529', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={3} style={{ color: 'white', margin: 0 }}>
          Sistema de Votación Electrónica - Chile 2025
        </Title>
        <Button type="link" icon={<LogoutOutlined />} onClick={handleLogout} style={{ color: 'white' }}>
          Cerrar sesión
        </Button>
      </Header>

      <Content style={{ padding: '24px 50px' }}>
        <Card style={{ marginBottom: 24 }}>
          <Title level={4}><UserOutlined /> Bienvenida/o al portal ciudadano</Title>
          <Text>Participa de forma segura en las Elecciones Presidenciales 2025.</Text>
        </Card>

        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card title="Tus datos del padrón electoral" bordered={false}>
              <Text><strong>RUT:</strong> 11111111-1</Text><br />
              <Text><strong>Región:</strong> Metropolitana</Text><br />
              <Text><strong>Comuna:</strong> Maipú</Text><br />
              <Divider />
              <CheckCircleTwoTone twoToneColor="#52c41a" />{' '}
              <Text>Estás habilitado/a para votar</Text>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card
              title="Elección Presidencial 2025"
              bordered={false}
              actions={[
                <Button type="primary" onClick={handleVotar}>
                  Ingresar a Votación
                </Button>
              ]}
            >
              <Text><strong>Proceso:</strong> Elección Presidencial</Text><br />
              <Text><strong>Fecha:</strong> 27 de noviembre de 2025</Text><br />
              <Text><strong>Estado:</strong> Activo</Text><br />
              <Divider />
              <Text type="secondary">
                Puedes emitir tu voto solo una vez. Una vez enviado, no podrá modificarse.
              </Text>
            </Card>
          </Col>
        </Row>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        <FileDoneOutlined /> Sistema de Votación · SERVEL Chile ©2025
      </Footer>
    </Layout>
  )
}

export default Dashboard
