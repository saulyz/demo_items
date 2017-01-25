/*Import inhouse styling*/
import "../styles/main.scss";

/*Import dependencies*/
import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/header';
import List from '../components/list';



function Application (props) {
  return (
    <div className="application">
      <Header title={props.title}/>
      <div className="content">
        <List />
        
      </div>
    </div>
    )
}

ReactDOM.render(<Application />, document.getElementById('root'));