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
        );
    }
}

export default AddSubscription;