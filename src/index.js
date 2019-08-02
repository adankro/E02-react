import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './commentDetail';
import ApprovalCard from './ApprovalCard';

const comments=[
    {'author':faker.name.firstName(), 'comment':faker.hacker.phrase(), 'date':faker.date.past(),'avatar':faker.image.avatar()},
    {'author':faker.name.firstName(),  'comment':faker.hacker.phrase(),'date':faker.date.past(),'avatar':faker.image.avatar()},
    {'author':faker.name.firstName(),  'comment':faker.hacker.ingverb(),'date':faker.date.past(),'avatar':faker.image.avatar()},
    {'author':faker.name.firstName(),  'comment':faker.hacker.ingverb(),'date':faker.date.past(),'avatar':faker.image.avatar()},
    {'author':faker.name.firstName(),  'comment':faker.hacker.phrase(),'date':faker.date.past(),'avatar':faker.image.avatar()},
    {'author':faker.name.firstName(),  'comment':faker.hacker.ingverb(),'date':faker.date.past(),'avatar':faker.image.avatar()}
];

const App = () =>{
    const allcomments = comments.map(item=>{
        return(
            <ApprovalCard >
                <CommentDetail 
                    author ={item.author} 
                    comment = {item.comment} 
                    avatar = {item.avatar}
                    date = {item.date}/>
            </ApprovalCard>
        );
    })
    return (
    <div className="ui container comments">
    <br/>
      {allcomments}
    </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
