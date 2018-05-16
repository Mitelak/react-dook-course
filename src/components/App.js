import React, { Component } from 'react'
import '../assets/css/App.css'
import Header from './Header'
import Filters from './Filters'
import List from './List'
import AddItem from './AddItem'
import { items as initialItems } from '../consts'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: initialItems
    }
  }

  handleAddNew  = (values) => {
    const { items } = this.state
    values.tags = values.tags.split(',') 
    this.setState({
      items: [...items, {
        ...values,
        id: items.length ? items[items.length-1].id + 1 : 0,
        visibility: true
      }]
    })
  }
  
  handleDelete = (id) => {
    const { items } = this.state
    this.setState({
      items: items.filter(item => item.id !== id)
    })
  }

  handleLend  = (id, lender) =>{
    const { items } = this.state
    const item = items.find(item => item.id === id)

    this.setState({
      items: [...items.filter(item => item.id !== id), {
        ...item,
        lended: true,
        lender: lender
      }]
    })
  }

  handleReturn = (id) => {
    const { items } = this.state
    const item = items.find(item => item.id === id)

    this.setState({
      items: [...items.filter(item => item.id !== id), {
        ...item,
        lended: false,
        lender: ''
      }]
    })
  }

  handleFilter = (tag) => {
    const { items } = this.state

    this.setState({
      items: items.map(item => {
        if(item.tags.indexOf(tag) === -1) {
          return {
            ...item,
            visibility: false
          }
        }
        return {
          ...item,
          visibility: true
        }
      })
    })
  }

  render() {
    const { items } = this.state

    return (
      <div className="app">
        <Header />
        <Filters tags={items.map(item => item.tags)} onFilter={this.handleFilter}/>
        <List items={items.filter(item => item.visibility)} 
          onDelete={this.handleDelete} 
          onLend={this.handleLend}
          onReturn={this.handleReturn} />
        <AddItem onSubmit={this.handleAddNew} />
      </div>
    )
  }
}

export default App
