import React,{ Component } form 'react';

export default class CreateText extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  componentWillMount(){
    const users = firebase.database().ref().child('users_Message');
        users.on('value',(snapshot) => {
          let words = snapshot.val();
          let newState = [];
          for(let word in words){
            newState.push({
              id: word,
              text:words[word].text

            });
          }

          this.setState({
            data: newState,
            status: true
          });

        });

      }


  render(){
    var button;
    var message;
    var a = this.state.data;

    if (this.state.status === false ) {
      button = null;
    } else {
      button = []
      Object.values(a).map(function(objectKey, index) {
        button.push(<p key={index}>{objectKey.text} </p>)
      });
    }
    return(
      <>
        { button }
        { message }
        <div>
          <input id="text" style={{ display:'none' }} type="text" placeholder="請輸入聊天文字" />
          <input id="send" style={{ display:'none' }} type="submit" value="送出" onClick={ this.handleSend }/>
        </div>
      </>
    );
  }


  handleSend(e){
    e.preventDefault();
    console.log('send message');
  }

  
}
