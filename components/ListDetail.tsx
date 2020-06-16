import * as React from 'react'

import { Blog } from '../interfaces'

type ListDetailProps = {
  item: Blog
}

const ListDetail = ({ item: blog }: ListDetailProps) => (
  <div>
    <h1>Detail for {blog.name}</h1>
    <p>ID: {blog.id}</p>
  </div>
)

export default ListDetail
