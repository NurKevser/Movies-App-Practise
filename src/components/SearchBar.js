import React, { Component } from 'react'

export class SearchBar extends Component {

    handleFormSubmit = (e) => {
        e.preventDefault();
    } // varsayılan davranısı durdurduk search bara bir seyler yazıp submit edince artık sayfa yenilenmiyor

    render() {
        return (
            
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-row mb-5">
                        <div className="col-12">
                            <input 
                            onChange={this.props.searchMovieProp} 
                            type="text" className="form-control" 
                            placeholder="Search a movie"
                            />
                        </div>
                    </div>
                </form>
            
        )
    }
}

export default SearchBar;

