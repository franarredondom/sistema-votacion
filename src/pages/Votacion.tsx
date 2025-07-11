import React, { useState } from 'react'
import {
  Layout,
  Typography,
  Card,
  Row,
  Col,
  Radio,
  Button,
  message,
  Modal
} from 'antd'
import { useNavigate } from 'react-router-dom'

const { Title, Text } = Typography
const { Header, Content, Footer } = Layout

const candidatos = [
  {
    nombre: 'Jeannette Jara',
    partido: 'Partido Comunista',
    foto: 'https://images2-mega.cdn.mdstrm.com/mega/2023/07/26/_151097_1_64c1526804930.jpg?d=950x535'
  },
  {
    nombre: 'José Antonio Kast',
    partido: 'Partido Republicano',
    foto: 'https://finis.cl/wp-content/uploads/2025/05/jose-kast.jpg'
  },
  {
    nombre: 'Evelyn Matthei',
    partido: 'Unión Demócrata Independiente (UDI)',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Evelyn_Matthei%2C_alcaldesa_de_Providencia.png'
  },
  {
    nombre: 'Johannes Kaiser',
    partido: 'Independiente',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Johannes_Kaiser_%28BCN%29.jpg'
  }
]

const Votacion: React.FC = () => {
  const [voto, setVoto] = useState<string | null>(null)
  const [confirmModal, setConfirmModal] = useState(false)
  const navigate = useNavigate()

  const handleConfirmar = () => {
    if (!voto) {
      message.warning('Debes seleccionar un candidato para continuar.')
      return
    }
    setConfirmModal(true)
  }

  const handleFinalizarVoto = () => {
    setConfirmModal(false)
    message.success('Voto emitido exitosamente.')
    navigate('/confirmacion')
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#001529', padding: '0 24px' }}>
        <Title level={3} style={{ color: 'white', lineHeight: '64px' }}>
          Elección Presidencial 2025 - Chile
        </Title>
      </Header>

      <Content style={{ padding: '24px 50px' }}>
        <Title level={4}>Selecciona tu candidato/a:</Title>
        <Radio.Group onChange={(e) => setVoto(e.target.value)} value={voto} style={{ width: '100%' }}>
          <Row gutter={[24, 24]}>
            {candidatos.map((candidato) => (
              <Col xs={24} sm={12} md={12} lg={12} key={candidato.nombre}>
                <Card
                  bordered
                  hoverable
                  style={{ textAlign: 'center', height: '100%' }}
                >
                  <img
                    src={candidato.foto}
                    alt={candidato.nombre}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginBottom: 12,
                      border: '1px solid #ccc'
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100?text=Foto'
                    }}
                  />
                  <div>
                    <Radio value={candidato.nombre}>
                      <Title level={5} style={{ margin: 0 }}>{candidato.nombre}</Title>
                      <Text type="secondary">{candidato.partido}</Text>
                    </Radio>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Radio.Group>

        <div style={{ marginTop: 32 }}>
          <Button
            type="primary"
            size="large"
            onClick={handleConfirmar}
            disabled={!voto}
          >
            Confirmar voto
          </Button>
        </div>

        <Modal
          title="Confirmación de Voto"
          open={confirmModal}
          onOk={handleFinalizarVoto}
          onCancel={() => setConfirmModal(false)}
          okText="Emitir Voto"
          cancelText="Cancelar"
        >
          <Text>¿Estás segura/o de emitir tu voto por <strong>{voto}</strong>?</Text>
          <br />
          <Text type="secondary">Una vez confirmado, no podrás cambiar tu elección.</Text>
        </Modal>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Plataforma de Votación · SERVEL Chile ©2025
      </Footer>
    </Layout>
  )
}

export default Votacion
