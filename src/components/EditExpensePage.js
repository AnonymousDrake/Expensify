import React from 'react';

const EditExpensePage=(props)=>{
    return(
    <div>This is my edit Expense with id = {props.match.params.id}</div>
    )
}

export default EditExpensePage;