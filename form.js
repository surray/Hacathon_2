import React from 'react';
  
     
class InfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            Name:"",
            Question:""
            
        }

    }

    infoChange = event=>
    {
        const{name,value} =event.target;
        this.setState({
            [name]:value
        })
    }

    infoSubmit= event=>
    {
        event.preventDefault();
        let data ={
            Name:this.state.Name,
            Question:this.state.Question
           
        }
        this.props.myData(data);
        

    }
    render() 
    {
        return (
       
         <form onSubmit={this.infoSubmit} autoComplete='off'>     
            <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" placeholder="Enter Name"
                onChange={this.infoChange} 
                name='Name'
                value={this.state.Name}
                />
            </div>
            <div className="form-group">
                <label>Question:</label>
                <input className="form-control" placeholder="Enter your question"
                onChange={this.infoChange} 
                name='Question'
                value={this.state.Question}
                /> 
                    
                
            </div>
            
                       
            <button  type="submit" className="btn btn-primary">Submit</button>
        </form> 
         );
        }
        
        }
        
export default InfoForm;
