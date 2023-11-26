export class UserApi {
    static API = 'https://6561cab0dcd355c08324324a.mockapi.io/users/'
    static request(error, url='', method='GET', body) {
        return fetch(UserApi.API + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {
            if (res.ok) {
                return res.json()
            }
            throw new Error(error)
        })
    }

    static getList() {
        return UserApi.request('Can`t get users from server!')
    }

    static create(data){
        return UserApi.request('Can`t create user on server!', '', 'POST', data)
    }

    static update(id, changes){
        return UserApi.request('Can`t update user on server!', id, 'PUT', changes)
    }

    static delete(id){
        return UserApi.request('Can`t delete user on server!', id, 'DELETE')
    }
}