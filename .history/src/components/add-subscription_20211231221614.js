///サブスクを追加する画面
import React,{Component} from 'react';
import { Link } from 'react-router-dom';

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
    const { todos, name } = this.state;
    this.setState({
      todos: [...todos, name]
    });
  }
  removeTodo = (index) => {
    const { todos, name } = this.state;
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    });
  }

    render() {
      const {subscs}=this.state
        return (
            <div className="container">
                <h3 className="add-subscription">追加</h3>
                <div className="add-subscription-toHome"><Link to="/">homeへ戻る</Link></div>
                <div>Netflix</div>
                <div>AmazonPrime</div>
                <ul>{subscs.map((subsc,index)=><li key={index}>{subsc}</li>)}</ul>
            </div>

                <div>
            <input type="text" onInput={this.onInput} />
            <button onClick={this.addTodo} >登録</button>
                <ul>
                  {todos.map((todo, index) => <li key={index}>
                  {todo}
              <button onClick={() => { this.removeTodo(index) }}>削除</button>
                  </li>)}
                 </ul>
              </div>)
        );
    }
}

export default AddSubscription;