import React from 'react'
interface User {
  id: number;
  name :string;
  email: string;
}
const UsersPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',
{method : "get",
})

  const users : User[] = await res.json();


  return (
    <>
    <h1 className='m-5 text-center text-2xl '>Alle brukere</h1>
    <table className='table table-bordered m-1 text-base'>
    <thead>
      <tr className='text-xl'>
        <th>Navn</th>
        <th>E.post</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td></tr>)}
    </tbody> 
    </table>
    </>
  )
}

export default UsersPage