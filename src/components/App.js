import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';
// import { Validation } from '../Exercise';

class App extends React.Component{
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos', {
            params : {
                query: term
            },
         headers:{
            Authorization: 'Client-ID tTapuA3As4sJADIUT7K1Mh6tTFM6cn7fIntenDNfiz0'
         }
        })

    }
    render(){
        return(
            <div className='ui container' style={{marginTop:'10px'}}>   
                <SearchBar onInnerSubmit={this.onSearchSubmit}/>
                {/* <Validation onInnerSubmit = {this.onSearchSubmit} /> */}
                
            </div>
        
            
        )
    }
}


export default App;