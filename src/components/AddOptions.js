import React from 'react';
// export default cannot do this with const but can do so with default class definitions
export default class AddOptions extends React.Component {
  state = {
    error: undefined
  };
    
     
    handleAddOption = (e) => {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
     // console.log('error' + error);
      this.setState(() => ({error}));
      if (!error){
        e.target.elements.option.value = '';
      }
    }
  
    render () { 
      return (
        <div>
          {this.state.error && <p className="add-option-error">
                                 {this.state.error}
                               </p>}
          <form className="add-option" onSubmit={this.handleAddOption}>
            <input className="add-option--input" type='text' name='option' />
            <button className="button">
              Add Option
            </button>
          </form>
        </div>
      );
    }
  }