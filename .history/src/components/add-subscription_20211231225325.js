///サブスクを追加する画面
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';


class AddSubscription extends Component {
  constructor(props){
    super(props);
    this.state={subscs: [],
                name:''
              };
  }
  onInput = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  addTodo = () => {
    const { subscs, name } = this.state;
    this.setState({
      subscs: [...subscs, name]
    });
  }
  removeTodo = (index) => {
    const { subscs, name } = this.state;
    this.setState({
      subscs: [...subscs.slice(0, index), ...subscs.slice(index + 1)]
    });
  }


  // handleClick(){
  //   this.props.history.push({
  //     pathname: "/Home",
  //     state: {sbsc: this.state.sbsc}
  //   })
  // }



    render() {
      const {subscs}=this.state
        return (
            <div className="container">
                <h3 className="add-subscription">追加</h3>
                <div className="add-subscription-toHome"><Link to="/">homeへ戻る</Link></div>
                <div>Netflix</div>
                <div>AmazonPrime</div>
                <ul>{subscs.map((subsc,index)=><li key={index}>{subsc}</li>)}</ul>

            
            <input type="text" onInput={this.onInput} />
            <button onClick={this.addTodo} >登録</button>
            {/* <button onClick={this.handleClick}>Homeへ</button> */}
                <ul>
                  {subscs.map((subsc, index) => <li key={index}>
                  {subsc}<button onClick={() => { this.removeTodo(index)}}>削除</button>
                  </li>)}
                 </ul>
              </div>
              );
    }
}

export default AddSubscription);