import React from 'react';
import {Button, Dropdown} from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {createEditUser, deleteUser} from '../../store/actions';
import Minus from '@icons/minus.svg';
import Plus from '@icons/plus.svg';


export function User({obj, onClickInvite, isInvited}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {firstName, lastName, avatar, email, id} = obj;
    function onDeleteClick(user) {
        dispatch(deleteUser(user));
    }

    function onEditBtnClick(user) {
        dispatch(createEditUser(user));
        navigate(`/users/${user.id}/edit/`);
    }

    return (

        <li>
            <div>
                <img className="avatar" src={avatar} alt="User" />
                <div className="users__user-item__info">
                    <h3>{firstName} {lastName}</h3>
                    <p>
                        <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                            <path d="M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z" />                        </svg>
                        {email}
                    </p>
                </div>
            </div>
            <div>
                <img
                    onClick={() => onClickInvite(parseInt(id))}
                    className="action"
                    src={`${isInvited ? Minus : Plus}`}
                    alt="Action" />
                <Dropdown
                    className="action"
                    menu={{
                        items:
                            [{
                                key: '1',
                                label:
                                        <Button onClick={() => onEditBtnClick(obj)} type="link">
                                            <EditOutlined />
                                            Edit
                                        </Button>,
                            },
                            {
                                key: '2',
                                label:
                                    <Button onClick={() => onDeleteClick(obj)} danger type="text">
                                        <DeleteOutlined />
                                        Delete
                                    </Button>,
                            },
                            ]}}
                    placement="bottomLeft">
                    <EditOutlined />
                </Dropdown>
            </div>
        </li>
    );
}
