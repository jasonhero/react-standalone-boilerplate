import React, { Component } from 'react';
import { render } from 'react-dom';

import './assets/css/style.css';

class Foobar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='test'>
        {'test'}
      </div>
    )
  }
}

render((
  <Foobar />
),
document.getElementById('root')
)
