import './app.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import InputField from './components/inputField';
import Habits from './components/habits';

class App extends Component {
  state = {
    // 습관을 담는 배열. 이것을 자식인 habit에 props으로 전달할 예정.
    habits: [
        {id : 1, name:'reading', count : 0},
        {id : 2, name:'running', count : 0},
        {id : 3, name:'coding', count : 0},
    ]
  };
  handleIncrement = (habit) => {
        const habits = this.state.habits.map(item => {
          if(item.id === habit.id){
            return {...habit, count: habit.count+1}
          }
          return item;
        });
        this.setState({habits});
  };
  handleDecrement = (habit) => {
        const habits = this.state.habits.map(item =>{
          if(item.id === habit.id){
            const count = habit.count-1;
            return {...habit, count: count < 0 ? 0 : count}
          }
          return item;
        });
        this.setState({habits});
  };

  handleDelete = (habit) => {
    const newHabits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({habits:newHabits});
  };

  handleReset = () => {
    const habits = this.state.habits.map(item => {
      if(item.count !== 0){
        return {...item, count : 0};
      }
      return item;
    });
    this.setState({habits});
  }

  addHabit = (name) => {
    const habits = [...this.state.habits, {id:Date.now(), name: name, count: 0}];
    this.setState({habits});
  }

  render() {
    console.log('app');
    return(
      <>
        <Navbar count={this.state.habits.filter(item => item.count > 0).length}/>
        <InputField habits={this.state.habits} onAdd={this.addHabit}/>
        <Habits 
        habits={this.state.habits} 
        onIncrement={this.handleIncrement} 
        onDecrement={this.handleDecrement} 
        onDelete={this.handleDelete}/>
        <button className='habits-reset' onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}

export default App;
