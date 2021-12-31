///サブスクを追加する画面
import React from 'react';
import { Link } from 'react-router-dom';

class AddSubscription extends React.Component {
    render() {
        return (
            <div className="container">
                <h3 className="add-subscription">追加</h3>
                <div className="add-subscription-toHome"><Link to="/">homeへ戻る</Link></div>
                <div>Netflix</div>
                <div>Amazon </div>
            </div>
        );
    }
}

export default AddSubscription;