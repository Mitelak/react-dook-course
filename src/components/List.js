import React from 'react'
import ListItem from './ListItem'

class List extends React.Component {
  render() {
    const { items, onDelete, onLend, onReturn } = this.props

    return (
      <ul className="app__item list">
        {
          items.map((el, i) =>
            <ListItem 
              key={el.id} 
              author={el.author} 
              title={el.title} 
              tags={el.tags} 
              lended={el.lended} 
              lender={el.lender}
              onDelete={() => onDelete(el.id)} 
              onReturn={() => onReturn(el.id)}
              onLend={(lender) => onLend(el.id, lender)} />
        )}
      </ul>
    )
  }
}

export default List
