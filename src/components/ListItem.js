import React from 'react';

class ListItem extends React.Component {
  state = {
    lending: false,
    lender: ''
  }

  handleLend = (e) => {
    const { lending, lender } = this.state
    
    if(lending) {
      this.props.onLend(lender)
      this.setState({
        lending: false,
        lender: ''
      })
    } else if (lender) {

    } else {
      this.setState({
        lending: true
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      lender: e.target.value
    })
  }

  render() {
    const { title, author, tags, lended, lender, onDelete, onReturn } = this.props
    const { lending } = this.state

    return (
      <li className="item">
        <div className="item__info">
          <h2 className="item__title">{title}</h2>
          <p className="item__author">Autor: {author}</p>
          <div className="item__tags">
            {
              tags.map((el, i) => 
                <span className="item__tag" key={i}>{el}</span>
            )}
          </div>
        </div>
        <div className="item__options">
          <p className="item__status">Status: 
            <span> {lended ? 'Wypożyczona' : 'Na miejscu'}</span>
          </p>
          {lended && <p className="item__lended">{lender}</p>}
          {lending && <input type="text" name="lender" onChange={this.handleChange} />}
          <button className="item__button" 
            onClick={onDelete}>Usuń</button>
          {lended 
            ? <button className="item__button"
                onClick={onReturn}>Zwróć</button>
            : <button className="item__button" 
                onClick={this.handleLend}>
                  {lending ? 'Potwierdź' : 'Wypożycz'}
              </button>
          }
        </div>
      </li>
    )
  }
}
export default ListItem
