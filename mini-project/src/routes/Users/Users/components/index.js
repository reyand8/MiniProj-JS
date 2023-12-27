import {Skeleton} from './Skeleton';
import {User} from './User';
import '../../index.css';
import React from 'react';


export const Users = ({ items, isLoading, searchValue, onChangeSearchValue,
    invites, onClickInvite, onClickSendInvites}) => {
    return (
        <>
            <div className="users__user-list_search">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42
                    1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
                <input value={searchValue}
                    onChange={onChangeSearchValue}
                    type="text"
                    placeholder="Search a user..." />
            </div>
            {isLoading ? (
                <div className="users__user-list_skeleton">
                    {<Skeleton/>}
                </div>
            ) : (
                <ul className="users__user-list_user-items">
                    {items.filter(obj => {
                        const allInfo = (obj.firstName + obj.lastName + obj.email).toLowerCase();
                        return allInfo.includes((searchValue).toLowerCase());
                    }).map((obj) => (
                        <User onClickInvite={onClickInvite}
                            isInvited={invites.includes(parseInt(obj.id))}
                            key={obj.id}
                            obj={obj}/>
                    ))}
                </ul>
            )}
            {invites.length > 0 && (
                <button
                    onClick={onClickSendInvites}
                    className="users__user-list_main-btn users__user-list_invite-btn">
                    Send the invitation
                </button>
            )}
        </>
    );
};
