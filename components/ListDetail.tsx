import * as React from 'react'

import { Blog } from '../interfaces'

type ListDetailProps = {
  item: Blog
}

const ListDetail = ({ item: blog }: ListDetailProps) => (
  <div>
    <h1>{blog.name}</h1>
    <p>{blog.body}</p>
  </div>
)

export default ListDetail
