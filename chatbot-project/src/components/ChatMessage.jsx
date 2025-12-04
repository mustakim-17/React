import dayjs from 'dayjs'
import RobotProfileImage from '../Images/robot.png'
import UserProfileImage from '../Images/Profile.jpg'
import './ChatMessage.css'

export function ChatMessage({message , sender, time}) {
  //const message = props.message;
  //const sender = props.sender;
  //const {message , sender} = props;

  /*
  if (sender === 'robot') {
    return(
      <div>
        <img src="Images/robot.png" width="50px" />
        {message}
      </div>
    );
  }
  */

  return(
    <div className = {
      sender === 'user' 
        ? 'chat-msg-user' 
        : 'chat-msg-robot'
    }>
      {sender === 'robot' && (
        <img src={RobotProfileImage} className="chat-msg-profile" />
      )}

      <div className="chat-msg-text">
        {message}

        {time && (
          <div className='chat-message-time'>
            {dayjs(time).format('h:mma')}
          </div>
        )}
      </div>

      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-msg-profile" />
      )}
    </div>
  );

}