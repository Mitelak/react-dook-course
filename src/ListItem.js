import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      lending: false,
      lender: ''
    }
  }

  handleDelete = (e) => {
    this.props.onDelete(this.props.id);
  }

  handleLend = (e) => {
    if(!this.state.lending){
      this.setState({
        lending: true,
        lender: 'd'
      });
    }else{
      this.setState({
        lending: false,
        lender: ''
      });
      this.props.onLend(this.props.id, this.state.lender);
    }
  }

  render() {
    return (
      <li className="item">
        <div className="item__info">
          <h2 className="item__title">{this.props.title}</h2>
          <p className="item__author">Autor: {this.props.author}</p>
          <div className="item__tags">
            {this.props.tags.map((el, i) => {
              return <button className="item__tag" key={i}>{el}</button>;
            })}
          </div>
        </div>
        <div className="item__options">
          <p className="item__status">Status: <span>{ !this.props.state ? 'Na miejscu' : 'Wypożyczona' }</span></p>
          { this.props.state ? <p className="item__lended">{this.props.lender}</p> : null}
          { this.state.lending ? <input type="text" name="lended" /> : null}
          <button className="item__button" onClick={this.handleDelete}>Usun</button>
          <button className="item__button" onClick={this.handleLend}>
            { !this.props.state ? this.state.lending ? 'Potwierdź' : 'Wypożycz' : 'Oddaj' }
          </button>
        </div>
      </li>
    );
  }
}

export default ListItem;