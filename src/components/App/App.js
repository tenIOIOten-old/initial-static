import React from 'react'
import axios from 'axios'

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      response:{},
    }
  }

  handleFile= (e)=>{
    let files =e.target.files
    let data = new FormData();

    for (var i = 0; i < files.length; i++) {
      let file = files.item(i);
      data.append('images[' + i + ']', file, file.name);
    }

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'Access-Control-Allow-Headers':'*',
        'Access-Control-Allow-Origin': '*' 
      }
    }

    axios.post('https://api.filepreviews.io/v2/previews', data, config).then(
      (res)=>{
        this.setState({response:res})
      }
    ).catch((res)=>{
        this.setState({response:res})
    })
  }
  render(){
    return(
      <div>
      <input type="file" onChange={this.handleFile} />
      hello world! <br/>
      <pre>
      {JSON.stringify(this.state.response,null,'  ')}
      </pre>
      </div>
    )
  }
}
