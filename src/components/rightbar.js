import ListContent from './listcontent'
import Profile from './profile'

export default function RightBar(props) {
  if(props.view == 'home') {
    return (
      <div class="right-bar">
        <Profile profiles={props.profiles}/>
      </div>
      )
  }
    return (
    <div class="right-bar">
      <ListContent />
      <Profile />
    </div>
    )
}