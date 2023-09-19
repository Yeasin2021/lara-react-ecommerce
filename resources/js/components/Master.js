import React from 'react'
import ReactDOM from 'react-dom';

const Master = () => {
  return (
    <div>
        <h1>All Routes Are Including here ........</h1>
    </div>
  )
}

export default Master

if (document.getElementById('master')) {
    ReactDOM.render(<Master />, document.getElementById('master'));
}
