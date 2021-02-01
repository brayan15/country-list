import React from 'react'
import { Layout, Row, Col } from 'antd'
import Footer from './components/footer'
import Header from './components/header'
import CountryLists from './components/country-lists'
import './styles/main.scss'

function App() {
  return (
    <div className='app'>
      <Layout className='app__layout'>
        <Header />
        <Layout.Content className='container'>
          <Row className='w-100'>
            <Col xs={{ span: 24 }} xl={{ span: 20, offset: 2 }}>
              <CountryLists />
            </Col>
          </Row>
        </Layout.Content>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
