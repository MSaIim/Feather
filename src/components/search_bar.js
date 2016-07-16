// This says: import React and pull off "Component" as a variable
// e.g. const Component = React.Component;
import React, { Component } from 'react';

//class SearchBar extends React.Component (This way works if not using ES6 syntax)
class SearchBar extends Component
{
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    // Every class that extends React.component must have a render method
    // setState calls render() again
    // value is a controlled component (can set it in constructor)
    render() {
        return (
          <div className="row header">
            <img className="left" src="src/images/logo.png" width="200" height="67" />

            <div className="search-bar left">
              <input className="form-control" type="text" value={this.state.term} placeholder="Search"
                     onChange={event => this.onInputChange(event.target.value)} />
            </div>
          </div>
        )
    }

    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
}

// When importing, only explicitly defined exports will be imported
export default SearchBar;
