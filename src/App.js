import axios from 'axios'; 
import csvParser from 'csv-parser';
  
import React,{Component} from 'react'; 
import ReactFileReader from 'react-file-reader';
//const csv = require('csv-parser')

class App extends Component { 
    state = { 
  
      // Initially, no file is selected 
      selectedFile: null,
      results : []
    }; 
     
    handleFiles = files => {
      var reader = new FileReader();
      reader.onload = function(e) {
          // Use reader.result
          //alert(reader.result)
          //this.state.results.push(reader.result);
          console.log(reader.result);
          //csv()
      }
      reader.readAsText(files[0]);
  }
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
     
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "myFile", 
        this.state.selectedFile, 
        this.state.selectedFile.name 
      ); 
     
      // Details of the uploaded file 
      console.log(this.state.selectedFile);
      
     
      // Request made to the backend api 
      // Send formData object 
      //axios.post("api/App", formData); 
      
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
     
      if (this.state.selectedFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p> 
            <p>File Type: {this.state.selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            <h4>Choose before Pressing the Upload button</h4> 
          </div> 
        ); 
      } 
    }; 
     
    render() { 
     
      return ( 
        <div> 
            <h3> 
              File Upload! 
            </h3> 
            <div> 
            <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
              <button className='btn'>Upload</button>
            </ReactFileReader>
            </div> 
          {this.fileData()} 
        </div> 
      ); 
    } 
  } 
  
  export default App; 