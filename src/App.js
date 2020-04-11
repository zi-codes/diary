import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { map } from "lodash";
import NullEntry from "./NullEntry";
import Entry from "./Entry";
import DupeEntry from "./DupeEntry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: [
        // {
        //   date: 1586561307863,
        //   word: "DOWN",
        //   order: 0,
        // },
        // {
        //   date: 1586561317863,
        //   word: "DSAOIJA",
        //   order: null,
        // }
      ],
      endpoint: "https://tranquil-wave-46651.herokuapp.com/"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("diary updated", data => this.setState({ response: data }));
  }

  toEntry = (entry) => {
    if (entry.order === null) {
      return <NullEntry date={entry.date} word={entry.word}></NullEntry>
    }

    if (entry.order === 'dupe') {
      return <DupeEntry date={entry.date} word={entry.word}></DupeEntry>
    }

    return <Entry date={entry.date} word={entry.word} number={entry.order}></Entry>
  }

  renderEntries = () => {
    return map(this.state.response, this.toEntry)
  }

  render() {
    return (
      <div style={{ padding: 20, paddingLeft: 50 }}>
        <h1>Zi's Diary 11.04.20</h1>
        <div>
          <p><strong>16:04:12 >>  </strong>
            Been so busy with the DMail Lab recently. Haven't even had time to prepare the Egg Hunt. Which numbers shall I use?</p>
        </div>
        <hr></hr>
        <div>
          <p><strong>17:42:10 >>  </strong>
            I received a weird text from an unknown number. It simply said <strong>"UP"</strong>. It fits the theme, I'll make it the <strong>first digit</strong>.</p>
        </div>
        {this.renderEntries()}
      </div >
    );
  }
}

export default App;