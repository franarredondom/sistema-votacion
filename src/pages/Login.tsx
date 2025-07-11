import React, { useState } from 'react'
import {
  Button,
  Card,
  Form,
  Input,
  Typography,
  Layout,
  message,
  Divider
} from 'antd'
import { LockOutlined, IdcardOutlined, LoginOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const { Title, Text } = Typography
const { Content, Footer } = Layout

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

      // Usuario ciudadano
      if (values.rut === '11111111-1' && values.password === 'clave123') {
        message.success('Bienvenido, ciudadano')
        navigate('/dashboard')
      }
      // Usuario administrador
      else if (values.rut === '22222222-2' && values.password === 'admin123') {
        message.success('Bienvenido, administrador')
        navigate('/admin')
      }
      // Usuario inválido
      else {
        message.error('RUT o clave incorrecta')
      }
    }, 1000)
  }

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card
          title={<Title level={3}>Ingreso con Clave Única</Title>}
          style={{ width: 420, marginTop: 80 }}
          bordered={false}
        >
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="RUT"
              name="rut"
              rules={[{ required: true, message: 'Por favor ingrese su RUT' }]}
            >
              <Input
                prefix={<IdcardOutlined />}
                placeholder="Ej: 11111111-1"
              />
            </Form.Item>

            <Form.Item
              label="Clave Única"
              name="password"
              rules={[{ required: true, message: 'Ingrese su clave única' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Clave Única"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                icon={<LoginOutlined />}
                htmlType="submit"
                loading={loading}
                block
              >
                Ingresar
              </Button>
            </Form.Item>
          </Form>

          <Divider />
          <Text type="secondary">
            <strong>Ejemplo de acceso:</strong><br />
            Ciudadano → RUT: 11111111-1 | Clave: clave123<br />
            Administrador → RUT: 22222222-2 | Clave: admin123
          </Text>
        </Card>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        <Text type="secondary">
          Sistema de Votación Electrónica · SERVEL · Chile ©2025
        </Text>
      </Footer>
    </Layout>
  )
}

export default Login
