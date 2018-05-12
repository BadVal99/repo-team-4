import React, {Component} from 'react';
import MessageInput from '../MessageInput/MessageInput';
import {getEmoji} from '../../services/emoji';
import './SendMessage.css';
import {sendMessage} from "../../reducers/chat/action";
import {connect} from "react-redux";

class SendMessage extends Component {
  state = {
    emoji: []
  }

  componentDidMount() {
    this.setState({
      emoji: getEmoji()
 })
  }

    clickTextHundler() {
         const valueText = document.querySelector('.sendmessage__textarea').value;
        document.querySelector('.sendmessage__textarea').value = '';
        this.props.sendMessage(this.props.roomId, valueText);
    }

    clickEmoji(emoji) {
         const valueText = emoji;
        document.querySelector('.sendmessage__textarea').value += valueText;
        // this.props.sendMessage(this.props.roomId, valueText);
    }

    // componentDidMount {}
    handleKeyPress(e){
        if (e.key === 'Enter') {
            this.clickTextHundler()
        }
    }

    render() {
      const { emoji } = this.state;
        return (
            <div className="sendmessage" onKeyPress={(e) => this.handleKeyPress(e)}>
                <MessageInput />
                <div className="sendmessage__send-button">
                  <button className="send-button__button" onClick={() => this.clickTextHundler()}>
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  </button>
                  <button className="send-button__button emoji-button">
                    <i className="far fa-sticky-note"></i>
                    <div className='popup-emoji'>
                      {emoji.map((emoji,index) => (
                          <div key = {index} onClick={() => this.clickEmoji(emoji)}   className = 'emoji'>{emoji}</div>
                        ))}
                    </div>
                  </button>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        roomId: state.chat.currentChatId,
        messages: state.chat.messages
    }), {
        sendMessage
    }
)(SendMessage)
