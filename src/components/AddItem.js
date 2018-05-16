import React, {Component} from 'react'

export default class AddItem extends Component {
  state = {
    title: '',
    author: '',
    tags: '',
    lended: false,
    lender: ''
  }
  
  handleClick = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({
      title: '',
      author: '',
      tags: '',
      lended: false,
      lender: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <section className="app__item add">
        <p className="add__title">Dodaj książkę</p>
        <form className="add__form" >
          <div className="add__inputs">
            <label className="add__label">Tytuł:
              <input type="text" className="add__input" name="title" 
                onChange={this.handleChange} 
                value={this.state.title} />
            </label>
            <label className="add__label">Autor:
              <input type="text" className="add__input" name="author" 
                onChange={this.handleChange} 
                value={this.state.author}/>
            </label>
            <label className="add__label">Tagi:
              <input type="text" className="add__input" name="tags"
                onChange={this.handleChange} 
                value={this.state.tags}/>
            </label>
          </div>
          <input type="submit" className="add__input add__input--btn" value="Dodaj" onClick={this.handleClick} />
        </form>
      </section>
    )
  }
}
