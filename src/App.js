import React from 'react';
import './App.css';

const displayEmojiName = event => alert(event.target.id);
const greeting = "greeting";
var buttonClicked = false;

//thats an array
const emojis = [
  {
    emoji: "😀",
    name: "grinning face"
  },
  {
    emoji: "🎉",
    name: "party popper"
  },
  {
    emoji: "💃",
    name: "woman dancing"
  }
]


class App extends React.Component {
  handleClick() {
    console.log('Button clicked');
  }

  render() {
    return(
      <div className="container">
      <h1 id="greeting">Hello World!</h1>
      <p>Writing a JSX</p>
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button 
                className="emoji-btn"
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>  
      <ul>
        <button 
          onClick={this.handleClick}>Click me!
        </button>
      </ul>
    </div>
    );
  }
}

export default App;