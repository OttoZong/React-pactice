import React from 'react';
import Sortable from 'sortablejs';


export default class Sortbale extends React.Component {
  constructor(props){
    super(props);
      this.state = {
      };
    }

  render() {
    var el = document.getElementById("items");
    Sortable.create(el, {
      // 參數設定[註1]
      disabled: false, // 關閉Sortable
      animation: 150,  // 物件移動時間(單位:毫秒)
      handle: ".items",  // 可拖曳的區域
      filter: ".ignore",  // 過濾器，不能拖曳的物件
      preventOnFilter: true, // 當過濾器啟動的時候，觸發event.preventDefault()
      draggable: ".item",  // 可拖曳的物件
      ghostClass: "sortable-ghost",  // 拖曳時，給予物件的類別
      chosenClass: "sortable-chosen",  // 選定時，給予物件的類別
      forceFallback: false  // 忽略HTML5 DnD
    });

    return(
      <>
        <div className="items" >
        <ul id="items">
          <div className="item">TWMingzhang</div>
          <div className="item">LionDag</div>
          <div className="item">LoALita</div>
          <div className="item">mRx</div>
        </ul>
        </div>
        <div className="items">第一梯隊
        </div>
        <div className="items">第二梯隊
        </div>
        <div className="items">第三梯隊
        </div>
      </>
    )
  }
}
