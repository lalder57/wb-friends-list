import { useState, useEffect } from "react"
import axios from "axios";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [picture, setPicture] = useState('');
  const [name, setName] = useState('');

  const getSavedFriends = async () => {
    const response = await axios.get('/api/friends');
    setFriends(response.data);
  }

  useEffect(() => {
    getSavedFriends();
  }, [])



  const addFriend = () => {
    const newFriends = [...friends]
    newFriends.push({picture: picture, name: name});
    setFriends(newFriends);

    setPicture('');
    setName('');
  }

  const friendInfo = friends.map((friend) => {
      return (
        <div key={`${friend.name}`}>
          <img width="100px" src={friend.picture} />
          <span>{friend.name}</span>
        </div>
      );
    });
  

  return (
    <div>
      <label htmlFor="picture">Picture:</label>
      <input value={picture} onChange={(e) => setPicture(e.target.value)} id="picture" type="text" />

     <label htmlFor="name">Name:</label>
     <input value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" />

      <button onClick={addFriend}>Add friend</button>

      {friendInfo}
      
  </div>
  )
}
