import React from 'react';

class Filters extends React.Component {
  render() {
    const { tags, onFilter } = this.props
    const allTags = [].concat(...tags)

    return (
      <div className="app__item filters">
        <p className="filters__title">Filters</p>
          {                  
            [...new Set(allTags)].map(el => 
              <button className="item__tag" 
                key={el}
                onClick={() => onFilter(el)}>
                {el} 
                <span> {allTags.reduce((total, x) => x === el ? total+1 : total, 0)}</span>
              </button>
            )
          }
      </div>
    )
  }
}

export default Filters
