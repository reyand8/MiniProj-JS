import {useEffect, useState} from "react";
import {fetchUserList} from "../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectUsers} from "../store/selectors";
import {Users} from "./components";
import {Success} from './components/Success';

export default function UserList() {
    const list = useSelector(selectUsers)
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const [invites, setInvites] = useState([])
    const [success, setSuccess] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if (!dispatch(fetchUserList())) {
            setLoading(false)
        }
    }, [dispatch])

    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value)
    }

    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites((prev) => prev.filter((_id) => _id !== id))
        } else {
            setInvites((prev) => [...prev, id])
        }
    }

    const onClickSendInvites = () => {
        setSuccess(true)
    }

    return (
        <div className="user-list">
            {success ? (<Success count={invites.length}/>) :
                    <Users
                    searchValue={searchValue}
                    items={list}
                    invites={invites}
                    isLoading={isLoading}
                    onChangeSearchValue={onChangeSearchValue}
                    onClickInvite={onClickInvite}
                    onClickSendInvites={onClickSendInvites}/>
            }
        </div>
    )
}