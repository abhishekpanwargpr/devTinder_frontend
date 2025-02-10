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
    dispatch(addFeed(connections?.data?.data))
  }
  useEffect(() => {
    feedData()
  }, [])
  if(!feed)return;
  if(feed.length === 0){
    return <div><h1 className='text-center text-2xl font-bold'>No more Users</h1></div>
  }
  return (
    feed && (
      <div className='flex justify-center'>
        <UserCard user={feed[0]}/>
      </div>
    )
  )
}
export default Feed