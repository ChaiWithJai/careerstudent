import * as React from 'react'
import ListItem from './ListItem'
import { Blog } from '../interfaces'

type Props = {
  items: Blog[]
}

const List = ({ items }: Props) => (
  <div>
    {items.map((item) => (
      <>
        <h3 key={item.id}>
          <ListItem data={item} />
        </h3>
        {item.metadata && <p>{item.metadata} | {item.readingTime} minute read </p>}
      </>
    ))}
  </div>
)

export default List
