import React from 'react';
import unplash from '../api/unplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
// import { Validation } from '../Exercise';

class App extends React.Component{
    state = {images : [] }

    onSearchSubmit = async (term) => {
        const response = await unplash.get('/search/photos', {
            params : {
                query: term
            },
         
        }) 

        console.log(response.data.results.length)
        this.setState({images: response.data.results})

    }
    render(){
        return(
            <div className='ui container' style={{marginTop:'10px'}}>   
                <SearchBar onInnerSubmit={this.onSearchSubmit}/>

                <ImageList images={this.state.images}/>       
            </div>
        )
    }
}


export default App;