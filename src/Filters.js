import React from 'react';

class Filters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tags: this.props.tags.reduce((a,b) => a.concat(b),[])
    }
      // this.tags = new Map();
  }
  
  render() {
    return (
      <div className="app__item filters">
        <p className="filters__title">Filters</p>
        <ul>
          {                  
            [...new Set(this.state.tags)].map( (el, i) => {
              return <button className="item__tag" key={i}>{el} 
                  <span> ({this.state.tags.reduce((total, x) => { return x==el ? total+1 : total}, 0)})</span>
                </button>;
            })
            // [...new Set(this.tags)].map( (el, i) => {
            //   return <button className="item__tag" key={i}>{el} 
            //       <span>{this.tags.reduce((total, x) => { return x==el ? total+1 : total}, 0)}</span>
            //     </button>;
            // })
          }
        </ul>
      </div>
    );
  }
}

export default Filters;