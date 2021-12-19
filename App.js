import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoTable from './table';
import InfoForm from './form';
import axios from 'axios';

class App extends React.Component {
    constructor() {
      super();
      this.state={
          data:{}
      }
    }

    create =data=>{
        axios.post("http://localhost:5000/info",data).then(res=>{
            console.log(res);
        })
    }

    componentDidMount()
    {
      this.getAll();
    }

    getAll()
    {
        axios.get("http://localhost:5000/info").then(res=>{
            console.log(res.data);
            this.setState({
                data:res.data
            })
    })
    }

    render() 
    {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-6">
                     
                        <InfoForm myData={this.create}/>                
                    </div>
                    <div className="col-6">
                         <InfoTable getData ={this.state.data}/>  
                    </div>
                </div>     
            </div> 
           );
   }

}
export default App;
