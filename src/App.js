import React, { Component } from 'react';
import './App.css';
import malifaux from './malifaux'
import ClickImages from './ClickImages'
import Counter from './Counter'

class App extends Component {

  //The inital state of our images on load.
  state = {
    malifaux,
    groupSize: 4
  }

  lastId = 10000
  totalClicks = 0

  newId = () => {
    const id = this.lastId += 1001
    return id;
  }

  minionId = () => {
    const id = this.lastId += 100
    return id;
  }


  swapPage = array => {
    for(let i=0; i < array.length; i++) {
        let tmp = array[i];
        let indexB = Math.floor(Math.random() * array.length)
        if(i === indexB) {
          while(i === indexB) {
          indexB = Math.floor(Math.random() * array.length)
          }
        }
        array[i] = array[indexB]
        array[indexB] = tmp
    }
  }

  resetClickState = () => {
    const minions = this.state.malifaux.map(minion => {
      minion.clicked = false
      return minion
    })
    this.setState({malifaux: minions})
  }

  updateClickedFor = id => {
    const minions = this.state.malifaux.map( minion => {
      if (minion.id === id) {
        if(minion.clicked === true) {
            alert("Already clicked on this one. Score reset!")
            this.resetClickState()

            this.totalClicks = 0
        }
        else {
            minion.clicked = true
            this.totalClicks += 1
            if(this.totalClicks === this.state.malifaux.length) {
                alert("You remembered all of them! Game reset.")
                this.totalClicks = 0
            }
        }
      }
      return minion
    })
    this.swapPage(minions)
    this.setState({ malifaux: minions })
  }


  render() {
    return (
        <div 
            className="App"
            key={'a'}>
            <header className="App-header">
                <h1 className="App-title">Memory Game</h1>
                <p className="App-intro">
                    Try to click on all of the images without clicking on the same one twice!
                </p>
                <Counter
                    className="App App-intro" 
                    numberClicked = {this.totalClicks} 
                />
                
            </header>
            
            <ClickImages
              index = {this.newId()}
              toggleClickedState = {this.updateClickedFor} 
              malifaux = {this.state.malifaux}
              clicked = {this.state.clicked}
              groupSize = {this.state.groupSize}
            />
        </div>
    );
  }
}

export default App;
