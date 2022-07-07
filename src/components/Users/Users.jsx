import React from 'react';
import Paginator from "../general/Paginator/Paginator";
import User from "./User";


let Users = ({totalItemsCount, pageSize, currentPage, onChangedPage, users, ...props}) => {

    return <div>
        <Paginator totalItemsCount={totalItemsCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onChangedPage={onChangedPage}/>

        <div>
            {
                users.map(u => <User
                        key={u.id}
                        user={u}
                        isFetchingInProgress={props.isFetchingInProgress}
                        follow={props.follow}
                        unfollow={props.unfollow}
                    />
                )
            }
        </div>
    </div>
}

export default Users;

