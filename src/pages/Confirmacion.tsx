import React from 'react'
import { Layout, Typography, Result, Button, Divider } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Header, Content, Footer } = Layout
const { Paragraph, Text, Title } = Typography

const Confirmacion: React.FC = () => {
  const navigate = useNavigate()
  const hash = '3a7d9f2b98e12d3456c1a0b7f5e43a6f' // Simulación de hash

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#001529', padding: '0 24px' }}>
        <Title level={3} style={{ color: 'white', margin: 0, lineHeight: '64px' }}>
          Confirmación de Voto
        </Title>
      </Header>

      <Content style={{ padding: '48px 50px' }}>
        <Result
          status="success"
          title="¡Tu voto fue registrado con éxito!"
          subTitle="Gracias por participar en las elecciones presidenciales de Chile 2025."
          extra={[
            <div key="info" style={{ marginBottom: 24 }}>
              <Divider />
              <Paragraph>
                <Text strong>Tu comprobante de voto (hash único):</Text><br />
                <Text code style={{ fontSize: 16 }}>{hash}</Text>
              </Paragraph>
              <Text type="secondary">
                Guarda este código como comprobante de tu participación. Este comprobante es solo informativo.
              </Text>
              <Divider />
            </div>,
            <Button type="primary" key="volver" onClick={() => navigate('/')}>
              Volver al Inicio
            </Button>
          ]}
        />
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Plataforma de Votación Electrónica · SERVEL Chile ©2025
      </Footer>
    </Layout>
  )
}

export default Confirmacion
