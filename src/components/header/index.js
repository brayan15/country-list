// @flow
import React from 'react'
import { Layout, Row, Col, Input } from 'antd'

const Header = () => {
  const onSearch = (term: string) => {
    console.log(term) //eslint-disable-line
  }

  return (
    <Layout.Header className='header'>
      <Row className='w-100'>
        <Col xs={{ span: 24 }} xl={{ span: 20, offset: 2 }} className='header__container'>
          <div className='header__branding'>
            <a href='/' className='header__branding-link'>
              Country Lists
            </a>
          </div>
          <div className='header__search-wrapper'>
            <Input.Search
              enterButton
              onSearch={onSearch}
              placeholder='Search country'
              className='header__search'
            />
          </div>
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header
