import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';
import Button from './Button';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {count: 0};
  }

  handleRead = () => {
/*    
    axios.get('/api/read',{
      params: {
        value: 3
      }
    })
    .then(res =>  this.setState({count:res.data.count} )); 
*/
    fetch('/api/read?value=3')
    .then(res => res.json())
    .then(res => this.setState({count:res.count}));


  };

  handleCreate = () => {
/*    
    axios.post('/api/create',{
        value: 30
    })
    .then(res =>  this.setState({count:res.data.count} )); 
*/
    var obj = {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: 30})
    };

    fetch("/api/create", obj)  
        .then(res => res.json())
        .then(res => this.setState({count:res.count}));

  };

  handleDeleteSimple = () => {
/*    
    axios.delete('/api/deleteSimple',{
        data: {value:300}
    })
    .then(res =>  this.setState({count:res.data.count} )); 
*/
    var obj = {  
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: 300})
    };

    fetch("/api/deleteSimple", obj)  
        .then(res => res.json())
        .then(res => this.setState({count:res.count}));

  };



  handleDelete = () => {

/*    
    axios.delete('/api/delete/7',{
        data: {value:300}
    })
    .then(res =>  this.setState({count:res.data.count} )); 
*/
    var obj = {  
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: 300})
    };

    fetch("/api/delete/7", obj)  
        .then(res => res.json())
        .then(res => this.setState({count:res.count}));
  };


  handlePutSimple = () => {
/*    
    axios.put('/api/putSimple',{
        value: 3000
    })
    .then(res =>  this.setState({count:res.data.count} )); 
*/
    var obj = {  
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: 3000})
    };

    fetch("/api/putSimple", obj)  
        .then(res => res.json())
        .then(res => this.setState({count:res.count}));

  };


  handlePut = () => {
/*    
    axios.put('/api/put/9',{
        value: 3000
    })
    .then(res =>  this.setState({count:res.data.count} )); 
*/
    var obj = {  
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value: 3000})
    };

    fetch("/api/put/9", obj)  
        .then(res => res.json())
        .then(res => this.setState({count:res.count}));
  };



  render() {
    return (
      <div>
        <Display count={this.state.count}/>
        <Button text="Read" onClick={this.handleRead} />
        <br></br>
        <Button text="Create" onClick={this.handleCreate} />
        <br></br>
        <Button text="DeleteSimple" onClick={this.handleDeleteSimple} />
        <br></br>
        <Button text="Delete" onClick={this.handleDelete} />
        <br></br>
        <Button text="PutSimple" onClick={this.handlePutSimple} />
        <br></br>
        <Button text="Put" onClick={this.handlePut} />

      </div>
    );
  }
}

export default App;
