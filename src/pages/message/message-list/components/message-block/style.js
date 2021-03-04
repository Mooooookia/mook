import styled from 'styled-components'


export const MessageBlockWrapper = styled.div`
  position: relative;
  height: 50px;
  padding: 20px 0 20px 70px;
  cursor: pointer;
  .avatar {
    position: absolute;
    left: 10px;
    top: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    .avatar-img {
      width: 100%;
    }
  }
  .nickname {
    font-size: 15px;
    line-height: 20px;
    color: #333;
  }
  .content {
    font-size: 12px;
    color: #999;
    line-height: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .time {
    position: absolute;
    right: 10px;
    top: 20px;
  }
  
`
