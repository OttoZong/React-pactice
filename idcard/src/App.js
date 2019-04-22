import React from 'react';
import Photo from './Components/Photo';
import Bio from './Components/Bio';
import Updates from './Components/Updates';


var person = {
  name: 'Otto Zong',
  location: 'Yuil, Taiwan',
  occupation: {
    title: 'Marketing Intern',
    employer: '@voicetube'
  },
  photo: './images/me.png',
  updates: [
    {
     platform: 'twitter',
     status: 'I\'m happy, hope you\'re happy too!'
    },
    {
     platform: 'twitter',
     status: 'All about learning is just trying to become a better version of ourselves.'
    },
    {
     platform: 'twitter',
     status: 'Feel excited to join this competition!!!!!'
    },
    {
     platform: 'facebook',
     status: 'If you\’re working on something that you think is going to get accomplished in this lifetime then you’re not thinking big enough'
    }
  ]
}

class Card extends React.Component {
  render() {
    return (
         <div className="card">

            <Photo/>
            <Bio name={"Otto Zong"} location={"Taiwan"}/>
            <Updates />

        </div>
    );
  }
}



export default Card;
