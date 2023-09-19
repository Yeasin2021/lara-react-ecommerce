import React from 'react'
import ReactDOM from 'react-dom';
import Web from './frontend/Web';

const Master = () => {
  return (
    <div>
       <Web />
    </div>
  )
}

export default Master

if (document.getElementById('master')) {
    ReactDOM.render(<Master />, document.getElementById('master'));
}
