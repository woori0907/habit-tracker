import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    
    render() {
        // 여기서는 habits를 map으로 빙글빙글 돌면서 Habit 컴포넌트에 habit 데이터를 props으로 전달해줌.
        //Habits 컴포넌트는 세 개의 자식 컴포넌트를 가짐.
        // 각각의 컴포넌트 안에는 부모 컴포넌트에서 받아온 habit을 가짐.
        return <ul>
           {this.props.habits.map(habit=>(
                   <Habit key={habit.id} 
                   habit={habit}
                   name={habit.name}
                   count={habit.count} 
                   onIncrement={this.props.onIncrement}  onDecrement={this.props.onDecrement} onDelete={this.props.onDelete}/>
               ))} 
        </ul>;
    }
}

export default Habits;