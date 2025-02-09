import axios from 'axios'
import { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'
const Feed = () => {
  const dispatch = useDispatch()
  const feed = useSelector((store) => store.feed)
  const feedData = async () => {
    const connections = await axios.get(BASE_URL + "/user/feed", {
      withCredentials: true
    })
    dispatch(addFeed(connections.data.data))
  }
  useEffect(() => {
    feedData()
  }, [])
  return (
    feed && (
      <div className='flex justify-center'>
        <div className='flex flex-wrap justify-center gap-4'>
        {feed && feed.map((user)=><UserCard key={user._id} user={user}/>)}
        </div>
      </div>
    )
  )
}
export default Feed