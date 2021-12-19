import React from 'react';


class InfoTable extends React.Component {
  constructor() {
    super();
  }
  render() 
  {
      return (

            <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Question</th>
                
              </tr>
            </thead>
            <tbody>
              {
                this.props.getData.length < 0 ? 
                (
                  this.props.getData.map(e=>
                    <tr key={e._id}>
                      <td>{e.Name}</td>
                      <td>{e.Question}</td>
                    </tr>
                 )
                ) 
                :

                (
                  <tr>
                    <td>No Data</td>
                  </tr>
                )
              }
            </tbody>
          </table> 
        );
  }
  
  }
export default InfoTable;
