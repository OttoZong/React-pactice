import React from 'react';
import CountTime from './CountTime';
import * as firebase from 'firebase/app';


export default class CastleInfo extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      };
    }

  setArmy(){
    var username = this.refs.usernameInput.value;
    var armylist = this.refs.armylistInput.value;
    var updateRef = firebase.database().ref().child('usersList');

    if (armylist === '1') {
      updateRef.push().set({
      uid: username,
      army: armylist

      }).then(function(){
        console.log("新增Post成功");
      }).catch(function(err){
        console.error("新增Post錯誤：",err);
      });
    }else if(armylist === '2'){
      updateRef.push().set({
      uid: username,
      army: armylist

      }).then(function(){
        console.log("新增Post成功");
      }).catch(function(err){
        console.error("新增Post錯誤：",err);
      });
    }else if(armylist === '3'){
      updateRef.push().set({
      uid: username,
      army: armylist

      }).then(function(){
        console.log("新增Post成功");
      }).catch(function(err){
        console.error("新增Post錯誤：",err);
      });
    }
  }
  componentDidMount() {
    var updateRef = firebase.database().ref().child('usersList');
    var storge01 = []; var storge02 = []; var storge03 = [];

    updateRef.once('value', (snapshot) => {
      var array = Object.values(snapshot.val());

      array.map((item, index, array)=>{

        if (item.army === '1') {
          this.setState({
            checkarmy01: true
          });
          storge01.push(item.uid)
        }else if (item.army === '2') {
          this.setState({
            checkarmy02: true
          });
          storge02.push(item.uid)
        }else if (item.army === '3') {
          this.setState({
            checkarmy03: true
          });
          storge03.push(item.uid)
        }
      });

      // console.log(this.state.checkarmy01,storge01,storge02);

      switch (true) {
        case this.state.checkarmy01:
          document.getElementById('army01').innerHTML = '第一梯隊：'+ storge01
        case this.state.checkarmy02:
          document.getElementById('army02').innerHTML = '第二梯隊：'+ storge02
        case this.state.checkarmy03:
          document.getElementById('army03').innerHTML = '第三梯隊：'+ storge03
          break;

        }

    });
  }

  render() {

     var ee = this.props.id.map((item,index) => {
      var CastleName = JSON.parse(JSON.stringify(item.id.name));
      var CastlePlus = item.id.plusText;
      var Owner = item.owner;
      var Score = item.score;
              // var Photo = item.photo;
      // var TimeString = ( 60 - item.score ) * 1000;
      // console.log(item.id.name);

      return(
        <>
          <div key={index} className="castleInfo" >
            <h5 style={{ color:'red' }}>{Score}，目前佔領者：{Owner}</h5>
            {CastleName}：{CastlePlus}
            <CountTime/>
            <p></p>
          </div>
        </>
      )
    });

    return(
      <>
        <div>
          <div id="army01" className="items" >第一梯隊</div>
          <div id="army02" className="items" >第二梯隊</div>
          <div id="army03" className="items" >第三梯隊</div>
          <input id="username" type="text" ref="usernameInput" placeholder="請輸入玩家ID" />
          <input id="armylist" type="text" ref="armylistInput" placeholder="請輸入玩家的編制0~3" />
          <input type="submit" value="送出" onClick={ this.setArmy.bind(this) }/>
        </div>

        <div className="castleInfo">
          {ee}
        </div>
        <div>
          <input id="Score" type="text" ref="ScoreInput" placeholder="請輸入佔領分數" /><p></p>
          <input id="Owner" type="text" ref="OwnerInput" placeholder="請輸入佔領玩家ID" /><p></p>
          <input id="Castle" type="text" ref="CastleInput" placeholder="請輸入佔領城堡" /><p></p>
          <input type="submit" value="送出" onClick={ this.setArmy.bind(this) }/>
        </div>
      </>
    )
  }
}
