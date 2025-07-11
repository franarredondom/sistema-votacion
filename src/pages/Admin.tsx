import { useState } from 'react'
import {
  Button,
  Card,
  Form,
  Input,
  DatePicker,
  Table,
  Tag,
  Space,
  message,
  Typography,
  Layout
} from 'antd'
import type { ColumnsType } from 'antd/es/table'
import dayjs from 'dayjs'
import { FileProtectOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography
const { Content, Footer } = Layout

interface Votacion {
  id: number
  titulo: string
  descripcion: string
  fecha: string
  estado: 'Activa' | 'Finalizada'
}

const Admin = () => {
  const [form] = Form.useForm()
  const [votaciones, setVotaciones] = useState<Votacion[]>([])
  const [contador, setContador] = useState(1)

  const crearVotacion = (values: any) => {
    const nueva: Votacion = {
      id: contador,
      titulo: values.titulo,
      descripcion: values.descripcion,
      fecha: values.fecha.format('YYYY-MM-DD'),
      estado: 'Activa'
    }
    setVotaciones([...votaciones, nueva])
    setContador(contador + 1)
    message.success('Votación creada exitosamente')
    form.resetFields()
  }

  const finalizarVotacion = (id: number) => {
    const actualizadas = votaciones.map((v) =>
      v.id === id ? { ...v, estado: 'Finalizada' as 'Finalizada' } : v
    )
    setVotaciones(actualizadas)
    message.info('La votación fue finalizada')
  }

  const columns: ColumnsType<Votacion> = [
    { title: 'Título', dataIndex: 'titulo', key: 'titulo' },
    { title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      render: (estado) => (
        <Tag color={estado === 'Activa' ? 'green' : 'red'}>{estado}</Tag>
      )
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (_, record) => (
        <Space>
          <Button
            danger
            disabled={record.estado === 'Finalizada'}
            onClick={() => finalizarVotacion(record.id)}
          >
            Finalizar
          </Button>
        </Space>
      )
    }
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '2rem 4rem' }}>
        <Title level={2}>
          <FileProtectOutlined /> Panel de Administración Electoral
        </Title>
        <Paragraph type="secondary">
          Desde aquí puedes crear nuevas instancias de votación, establecer fechas oficiales y
          finalizar procesos ya existentes.
        </Paragraph>

        <Card title="Crear Nueva Votación" style={{ marginBottom: 24 }}>
          <Form layout="vertical" form={form} onFinish={crearVotacion}>
            <Form.Item
              name="titulo"
              label="Título"
              rules={[{ required: true, message: 'Ingrese el título de la votación' }]}
            >
              <Input placeholder="Ej: Elección Presidencial 2025" />
            </Form.Item>
            <Form.Item
              name="descripcion"
              label="Descripción"
              rules={[{ required: true, message: 'Ingrese una descripción' }]}
            >
              <Input.TextArea rows={3} placeholder="Ej: Votación oficial para elegir al próximo presidente de Chile" />
            </Form.Item>
            <Form.Item
              name="fecha"
              label="Fecha de Votación"
              rules={[{ required: true, message: 'Seleccione la fecha' }]}
            >
              <DatePicker
                style={{ width: '100%' }}
                defaultValue={dayjs()}
                format="YYYY-MM-DD"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Crear Votación
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Card title="Votaciones Existentes">
          <Table dataSource={votaciones} columns={columns} rowKey="id" />
        </Card>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Sistema de Administración Electoral · SERVEL Chile ©2025
      </Footer>
    </Layout>
  )
}

export default Admin
