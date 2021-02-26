
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.res=this.res.bind(this);
    this.arr=this.arr.bind(this);
    this.list=this.list.bind(this);
    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
    ]
    this.arr=this.city.filter((item)=>
      item.country==='India')
    this.list=this.arr.map((item)=><li key={item.country}>{item.city}</li>)  
  }
  
     
     
    

  
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        
      <ol>
      {this.list}
      </ol>
      </div>
    )
  }
}


export default App;
