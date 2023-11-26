import React from "react";
import {Button} from "antd";
import {deleteUser} from '../../store/actions/index'
export function menuActions({dispatch, navigate, user}) {

    function onDeleteClick(user) {
        dispatch(deleteUser(user))
    }

    function onEditBtnClick(user) {
        navigate(`/waiters/${user.id}/edit/`)
    }
    return [
        {
            key: '1',
            label: (_, user) => (
                <Button onClick={() => onEditBtnClick(user)} type="link">
                   Edit
                </Button>
            ),
        },
        {
            key: '2',
            label: (_, user) =>(
                <Button onClick={() => onDeleteClick(user)} danger type="text">
                    Delete
                </Button>

            ),
        }
    ]

}