import './App.css'
import { FeedCard } from './components/FeedCard/FeedCard'

const feedData = {
  imgSrc: 'https://picsum.photos/200/300',
  author: 'Robert Carlos',
  time: '5 mins ago',
  edited: false,
  feedContent: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups',
  emoticon: '0x1F601',
  commentCount: 5,
}

function App() {


  return (
   <div>
    <FeedCard {...feedData}/>
   </div>
  )
}

export default App
