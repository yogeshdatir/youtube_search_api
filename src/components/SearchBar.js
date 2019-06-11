import React from 'react'

export default class SearchBar extends React.Component {
    state = { term: ''} 

    onInputChange = (e) => {
        this.setState( { term: e.target.value } )
    }

    onFormSubmit = (e) => {
      e.preventDefault()

      //Make sure to call callback from parent component
      this.props.onSubmit(this.state.term)
    }
    
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div>
                        <div>
                            <label>YouTube Search</label>  
                        </div>                    
                        <div className="field">
                            <input  
                                type="text"
                                value={this.state.term}
                                onChange = {this.onInputChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}