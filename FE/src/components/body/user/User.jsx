import './User.scss'
import {useState, useEffect} from 'react'
function User() {
    const [listUsers, setListUsers] = useState([]);
    const [numberUser, setNumberUser] = useState(10)
    
    useEffect(() => {
        fetch(`http://localhost:3002/api/getUser`)
        .then(res => res.json())
        .then(res => {
            setListUsers(res)
        console.log(listUsers)

        })

    },[])


    const handdleDelete = (selectId) => {
        fetch(`http://localhost:3002/api/delete/` + selectId, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.status === 200) {
              alert(res.message + " deleted");
              const newlist = listUsers.filter((item) => item._id !== selectId);
              setListUsers(newlist);
            } else alert(res.message);
          });
    };

    return (
        <div className='user'>
                <h1 className='title'>Quản Lý User</h1>
            <div className='container'>
                <ul className='container__list-title'>
                    <li className='container__list-title--item-stt'>STT</li>
                    <li className='container__list-title--item-name'>Tên</li>
                    <li className='container__list-title--item-email'>Email</li>
                    <li className='container__list-title--item-role'>Vai trò</li>
                    <li className='container__list-title--item-acctive'>Tương Tác</li>
                </ul>
                <ul className='container__list-content'>
                    { listUsers.map((user, index) => {
                        if(index < numberUser) {
                            return (
                                <li className='container__list-title--item' key={index}>
                        <p className='container__list-title--item-stt'>{index +1 }</p>
                        <p className='container__list-title--item-name'>{user.name}</p>
                        <p className='container__list-title--item-email'>{user.email}</p>
                        <p className='container__list-title--item-role'>{user.role}</p>
                        <div className='container__list-title--item-acctive'>
                            <button className='container__list-content--item-btn'>Edit</button>
                            <button className='container__list-content--item-btn' onClick={() => handdleDelete(user._id)}>Delete</button>
                        </div>
                    </li>
                            )
                        }
                    })}


                </ul>
            </div>
        </div>
     );
}

export default User;