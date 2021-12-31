///サブスクを編集（削除）する画面と処理
import React from 'react';
import { Link } from 'react-router-dom';

class EditSubscription extends React.Component {
    render() {
        return (
            <div className="container">
                <h3 className="edit-subscription">詳細・編集</h3>
                <div className="edit-subscription-link"><Link to="/">一覧へ戻る</Link></div>
            </div>
        );
    }
}

export default EditSubscription;