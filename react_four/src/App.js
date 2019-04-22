import React from 'react';
import './App.css';
import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import TimeNow from './Components/TimeNow';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import CastleInfo from './Components/Castles/CastleInfo';




var config = {
   apiKey: "AIzaSyDAmz1PMS_JEuhvcwLQp1MNJa4K2T7PVEc",
   authDomain: "bmap-6221c.firebaseapp.com",
   databaseURL: "https://bmap-6221c.firebaseio.com",
   projectId: "bmap-6221c",
   storageBucket: "bmap-6221c.appspot.com",
   messagingSenderId: "92463439069"
};
firebase.initializeApp(config);


var castles = [
  {
    id : {name:'蛇血要塞', plusText:'軍團生命+10%，軍團防禦+10%'},
    score : '1',
    owner : 'Otto',
    photo : ''
  },
  {
    id : {name:'獸爪要塞', plusText:'軍團攻擊+15%'},
    score : '20',
    owner : 'Otto',
    photo : ''
  },
  {
    id : {name:'鐵盾要塞', plusText:'騎兵生命+20%，騎兵防禦+20%'},
    score : '32',
    owner : 'John',
    photo : ''
  },
  {
    id : {name:'石山要塞', plusText:'步兵攻擊+25%'},
    score : '41',
    owner : 'Gery',
    photo : ''
  },
  {
    id : {name:'獨角獸要塞', plusText:'騎兵攻擊力+25%'},
    score : '54',
    owner : 'Ada',
    photo : ''
  },
  {
    id : {name:'烈日要塞', plusText:'弓兵攻擊力+25%'},
    score : '13',
    owner : 'Amy',
    photo : ''
  },
  {
    id : {name:'齒輪要塞', plusText:'步兵生命+20%，步兵防禦+20%'},
    score : '37',
    owner : 'Rich',
    photo : ''
  },
  {
    id : {name:'王城要塞', plusText:'王國冊封官職'},
    score : '48',
    owner : 'Dav',
    photo : ''
  }
];

export default class App extends React.Component {
  componentDidMount() {
      addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  }

  constructor(props){
    super(props);
      this.state = {
        status : false,
        data: {},
        castles : castles
      };
    }

  render() {
    var widget
    if (this.state.status) {
      widget = <Widget
        handleNewUserMessage={this.handleNewUserMessage}
      />
    }else {
      widget = null;
    }
    return (
      <>
        <TimeNow date = { new Date() }/>

          <h3 style={{ color: 'orange' }}>戰略分析系統</h3>

          <div id="login">
            <input id="username" type="text" ref="usernameInput" placeholder="請輸入你的ID" value="Otto"/>
            <input id="password" type="text" ref="passwordInput" placeholder="請輸入你的密碼" value="a1234" />
            <input type="submit" value="登入" onClick={ this.handleClick.bind(this) }/>
          </div>
          { this.welcomeText() }
          <div className="Widget">
            { widget }
          </div>
          
          <CastleInfo id={castles} photo={castles} score={castles} owner={castles} />

       </>

    );
  }

    //tripper
    handleClick() {
      const username = this.refs.usernameInput.value;
      const password = this.refs.passwordInput.value;
      var checkRef = firebase.database().ref().child('users');

      checkRef.orderByChild('uid').equalTo(username).on('child_added', (data) => {

        let a = Object.values(data.val());
        // console.log(a[1],a[0]);
        // console.log(username,password);
        if (a[1] === username) {
          if (a[0] === password) {
            this.setState({userName: username, status: true}, () => {

            });

            console.log('登入成功');
          }else {
            alert('帳號密碼錯誤！')
            this.setState({ status: false });
          }
        }else {
            alert('帳號密碼錯誤！')
            this.setState({ status: false });
        }
      });
    }

    welcomeText(){
      if (this.state.status) {
        // document.getElementById('login').style.display='none';
        return '歡迎登入！' + this.state.userName;
      }
    }
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
      }

}
