import { useEffect } from "react";
import WebSocketComponent from "./utils/common/WebSocket";

const WsTest = () => {
  const roomId = "stockInfo";
  const name = "3S";

  useEffect(() => {
    // WebSocket 객체 얻기
    const socket = WebSocketComponent(roomId, name);

    // 언마운트될 때 WebSocket 연결 닫기
    return () => {
      socket.close();
    };
  }, [roomId, name]);

  // 나머지 컴포넌트 로직
  return <div>{/* 컴포넌트의 내용 */}</div>;
};

export default WsTest;
