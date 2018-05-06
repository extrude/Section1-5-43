import React from 'react';
//import ReactDOM from 'react-dom';
import AddOptions from './AddOptions';
//import Option from './components/Option';
import Header from './Header';
import Action from './Action';
import Options from './Options';
 export default class IndecisionApp extends React.Component {
  constructor (props) {
    super(props);
    this.deleteOptions = this.deleteOptions.bind(this);
    this.pickOptions = this.pickOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount(){
try{
  const json = localStorage.getItem('options');
  const options = JSON.parse(json);
  if (options){
    this.setState(() => ({options}));
  }
} catch (e){
  //do nothing

} 
}
  componentDidUpdate(prevProps,prevState){
    if(prevState.options.length !== this.state.options.length){
      console.log("Updated + Saving Data!");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }
  }
  componentWillUnmount(){
    console.log("unmountated!");
  }
  deleteOptions () {
    console.log("deleteoptions");
    this.setState(() => ({  options: []})); 
  }
  handleDeleteOption(optionToRemove) {
    console.log("deleted" + optionToRemove);
    this.setState((prevState) => ({
      options: prevState.options.filter((option) =>  optionToRemove !== option)}));
}
  handleAddOption (option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    })); 
  }
  pickOptions () {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
    console.log(randomNum);
  }
  render () {

    const subTitle = 'Put your life in the hands of a computer';
    const quote = <i>Never Know What to do</i>;

    return (
      <div>
        <Header    quote={quote} />
        <Action hasOptions={this.state.options.length > 0} pickOptions={this.pickOptions} />
        <Options option1={this.state.options[0]} options={this.state.options} 
        deleteOptions={this.deleteOptions} handleDeleteOption={this.handleDeleteOption} />
       
        <AddOptions handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
 