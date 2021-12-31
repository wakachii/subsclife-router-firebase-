import React from 'react';
import { Link } from 'react-router-dom';

class Create extends React.Component {
    render() {
        return (
            <div className="container">
                <h3 className="add">追加</h3>
                <div className="text-right my-3"><Link to="/">homeへ戻る</Link></div>
            </div>
        );
    }
}

export default Create;