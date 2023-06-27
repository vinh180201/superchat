import React, { useRef, useState } from 'react';
import { useFirebase } from './component/FirebaseProvider';
import ChatRoom from './component/ChatRoom';
import { useParams } from 'react-router-dom';

const Chat = () => {
  const { project_name, token } = useParams()
  console.log(project_name, token)
  

  return (
    <div className="Chat">
      <ChatRoom
        project_name={project_name}
        token={token}
      />
    </div>
  );
}

export default Chat;