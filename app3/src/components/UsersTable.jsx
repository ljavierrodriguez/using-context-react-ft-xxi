import React from 'react'

const UsersTable = ({ theme, users }) => {
    return (
        <table className={`table table-bordered table-striped table-${theme} mx-auto w-75`}>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    !!users &&
                    users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>
                                    {user.name}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default UsersTable