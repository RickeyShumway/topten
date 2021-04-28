import Video from './video'
import VideoList from './list'
import Profile from './profile'
export default function RightBar() {
    return (
    <div class="right-bar">
      <VideoList />
      <Profile />
    </div>
    )
}