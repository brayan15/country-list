// @flow
import React from 'react'
import { Input } from 'antd'
import { Layout } from 'antd'

const Header = () => {
  const onSearch = (term: string) => {
    console.log(term) //eslint-disable-line
  }

  return (
    <Layout.Header className='header'>
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
    </Layout.Header>
  )
}

export default Header
