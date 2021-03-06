import React from 'react';

class CardForm extends React.Component {
  state = { card: '' }

  addItem = (question) => {
    const { cards } = this.state
    const card = { id: this.getUniqId(), question }
    this.setState({ cards: [card, ...cards] })
  }

  handleChange = (e) => {
    this.setState({ card: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.addItem(this.state.card)
    this.setState({ card: '' })
  }

  

  render() {
    const { card } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={card}
          card="card"
          onChange={this.handleChange}
          required 
          placeholder="Add a Card" 
        />
      </form>
    )
  }
}

export default CardForm;