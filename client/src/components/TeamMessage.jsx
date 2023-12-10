import { MessageTeam, useMessageContext } from "stream-chat-react";

const TeamMessage = () => {
  // const { handleOpenThread, message } = useMessageContext();
  const { message } = useMessageContext();

  return (
    <MessageTeam
      message={{ ...message, user: {} }}
      // TODO:
      // handleOpenThread={}
    />
  );
};

export default TeamMessage;
