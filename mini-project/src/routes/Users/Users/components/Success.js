import React from 'react';

export const Success = ({ count }) => {
    return (
        <div className="success-block">
            <img src="/icons/success.svg" alt="Success" />
            <h3>Successful!</h3>
            <p>The invitation was sent to the {count} users</p>
            <button onClick={() => window.location.reload()} className="
            users__user-list_main-btn users__user-list_invite-btn">Return</button>
        </div>
    );
};