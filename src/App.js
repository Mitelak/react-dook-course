import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Filters from './Filters';
import List from './List';
import AddItem from './AddItem';

class App extends Component {
  constructor(props){
    super(props);    

    this.state = {
      items: [{
        title: 'Wiedźmak',
        author: 'A. Sapkowski',
        tags: ['fantasy', 'fajne'],
        state: 0,
        lender: ''
      },{
        title: 'Prawo Miltenium',
        author: 'Trudi Canavan',
        tags: ['horror', 'fantasy'],
        state: 0,
        lender: ''
      },{
        title: 'Hari Pota',
        author: 'J.K. Rowling',
        tags: ['sci', 'horror'],
        state: 0,
        lender: ''
      }]
    }
    this.handleAddNew = this.handleAddNew.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleLend = this.handleLend.bind(this);
  }

  handleAddNew (values) {
    values.tags = values.tags.split(',');    
    this.setState({
      items: [...this.state.items, values]
    });
  }
  
  handleDelete (id){
    let arr = this.state.items;
    arr.splice(id, 1);
    this.setState({
      items: arr
    });
  }

  handleLend (id, lender){
    let arr = this.state.items;
    if(arr[id].state){
      arr[id].state = 0;
      arr[id].lender = '';
    }else{
      arr[id].state = 1;
      arr[id].lender = lender;
    }
    this.setState({
      items: arr
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Filters tags={this.state.items.map( e => e.tags )}/>
        <List items={this.state.items} onDelete={this.handleDelete} onLend={this.handleLend} />
        <AddItem onSubmit={this.handleAddNew} />
      </div>
    );
  }
}

export default App;
