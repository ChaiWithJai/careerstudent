import React from 'react'
import Link from 'next/link'

import { Blog } from '../interfaces'

type Props = {
  data: Blog
}

const ListItem = ({ data }: Props) => (
  <Link href="/blogs/[id]" as={`/blogs/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
