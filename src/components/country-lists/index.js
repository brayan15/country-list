import React from 'react'
import { Card, List } from 'antd'

const data = [
  {
    title: 'Title 1'
  },
  {
    title: 'Title 2'
  },
  {
    title: 'Title 3'
  },
  {
    title: 'Title 4'
  },
  {
    title: 'Title 5'
  },
  {
    title: 'Title 6'
  },
  {
    title: 'Title 7'
  },
  {
    title: 'Title 8'
  }
]

const CountryLists = () => {
  return (
    <div className='country-lists w-100'>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4
        }}
        pagination={{
          pageSize: 16
        }}
        dataSource={data}
        className='country-lists__items-wrapper'
        renderItem={item => (
          <List.Item className='country-lists__item'>
            <Card title={item.title}>Card content {item.title}</Card>
          </List.Item>
        )}
      />
    </div>
  )
}

export default CountryLists
