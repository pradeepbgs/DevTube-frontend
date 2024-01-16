import React, {useState} from 'react'
import {  FaTwitter } from 'react-icons/fa';
import TweetCard from './TweetCard';

const ChannelTweets = () => {
  const [isTr, setIstr] = useState(true)

  const tweets = [
    {
        username: "Pradeep sahu",
        ago: "20 hours ago",
        tweet: "Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11",
        likes: 120,
        userAvatar: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        username: "Pradeep sahu",
        ago: "2 hours ago",
        tweet: "Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11",
        likes: 122,
        userAvatar: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        username: "Pradeep sahu",
        ago: "2 hours ago",
        tweet: "Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11",
        likes: 122,
        userAvatar: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        username: "Pradeep sahu",
        ago: "2 hours ago",
        tweet: "Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11",
        likes: 122,
        userAvatar: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        username: "Pradeep sahu",
        ago: "2 hours ago",
        tweet: "Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11",
        likes: 122,
        userAvatar: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        username: "Pradeep sahu",
        ago: "2 hours ago",
        tweet: "Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11",
        likes: 122,
        userAvatar: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        username: "Pradeep sahu",
        ago: "2 hours ago",
        tweet: "Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11",
        likes: 122,
        userAvatar: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        username: "Pradeep sahu",
        ago: "2 hours ago",
        tweet: "Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11",
        likes: 122,
        userAvatar: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        username: "Pradeep sahu",
        ago: "2 hours ago",
        tweet: "Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11",
        likes: 122,
        userAvatar: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        username: "Pradeep sahu",
        ago: "2 hours ago",
        tweet: "Exploring the latest features in JavaScript ES11! The language keeps evolving. 💡 #JavaScript #ES11",
        likes: 122,
        userAvatar: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]

  return  isTr ? (
    <div>
      {
        tweets.map((tweet, index) => (
          <div key={tweet} className='border border-l-0 border-r-0 border-t-0 pb-4'>
            <TweetCard tweet={tweet} />
          </div>
        ))
      }
    </div>
  ) : <div className='flex flex-col items-center w-full mt-5'>
        <FaTwitter size={50} />
        <h1 className='font-bold'>No Tweets</h1>
        <p className='font-semiboold'>This channel has yet to make a Tweet.</p>
     </div>
}

export default ChannelTweets