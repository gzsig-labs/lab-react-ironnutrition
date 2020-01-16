import React, { Component } from 'react';
import FoodLine from '../FoodLine';
import NewForm from '../NewForm';

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodQnt: {},
      add: false,
      newItemName:'wq',
      newItemQnt:'',
      newItemUrl:'',
    }
    let foodQnt = this.state.foodQnt;
    this.props.food.map((f) => {
      return foodQnt[f.name] = f.quantity
    })
    if (foodQnt){
      this.state.foodQnt = foodQnt
    }
  }

  toggleForm = () => {
    let newState = !this.state.add
    this.setState({
      add: newState
    })
  }

  updateQnt = (event, name) => {
    const state = this.state
    state.foodQnt[name] = event.target.value
    this.setState(
      state
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}>Toggle Form</button>
        {this.state.add && <NewForm />}
        {this.props.food.map((f, i) => {
          return (
            <FoodLine f={f} key={i} updateQnt={this.updateQnt} />
          )
        })}
      </div>
    )
  }
}

export default FoodBox;