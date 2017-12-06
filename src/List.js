import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  render() {
    return (
      <ul className="app__item list">
        {this.props.items.map((el, i)=>{
          return <ListItem key={i} id={i} author={el.author} title={el.title} tags={el.tags} state={el.state} lender={el.lender}
            onDelete={this.props.onDelete} 
            onLend={this.props.onLend} />
        })}
      </ul>
    );
  }
}

export default List;