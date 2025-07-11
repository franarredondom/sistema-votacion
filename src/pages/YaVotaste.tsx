import React from 'react'
import { Layout, Typography, Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Header, Content, Footer } = Layout
// const { Paragraph, Text } = Typography

const YaVotaste: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#001529', padding: '0 24px' }}>
        <Typography.Title level={3} style={{ color: 'white', lineHeight: '64px' }}>
          Proceso de Votación Finalizado
        </Typography.Title>
      </Header>

      <Content style={{ padding: '48px 50px' }}>
        <Result
          status="info"
          title="Ya has emitido tu voto"
          subTitle="Gracias por participar en las elecciones presidenciales 2025. No es posible votar más de una vez."
          extra={[
            <Button type="primary" key="volver" onClick={() => navigate('/')}>
              Volver al Inicio
            </Button>,
          ]}
        />
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Plataforma de Votación · SERVEL Chile ©2025
      </Footer>
    </Layout>
  )
}

export default YaVotaste
