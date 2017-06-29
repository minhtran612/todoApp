import moment from 'moment';
import React from 'react';

export default function Item(props){
    return (
        <tr>
            <td>{props.item.todo_name}</td>
            <td>{props.item.todo_description}</td>
            <td>{moment(props.item.created_at).toString()}</td>
        </tr>
    );
}