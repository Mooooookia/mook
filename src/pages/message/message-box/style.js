import styled from 'styled-components'


export const MessageBoxWrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  padding-top: 20px;
  .header {
    height: 30px;
    text-align: center;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    border-bottom: 1px solid #eee;
  }
  .message-wrapper {
    padding-bottom: 150px;
    .message-left-wrapper {
      margin: 20px 0;
      display: flex;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
        .avatar-img {
          width: 100%;
        }
      }
      .message {
        margin-left: 15px;
        margin-top: 10px;
        padding: 8px 12px;
        font-size: 14px;
        line-height: 20px;
        width: 350px;
        color: #333;
        position: relative;
        background: #e7f1fc;
        &:before {
          content: '';
          width: 0;
          height: 0;
          border-top: 16px solid #e7f1fc;
          border-left: 9px solid transparent;
          position: absolute;
          top: 0;
          left: -9px;
        }
        .time {
          position: absolute;
          font-size: 12px;
          line-height: 14px;
          color: #d9d9d9;
          bottom: -14px;
          left: 5px;
        }
      }
    }
    .message-right-wrapper {
      margin: 20px 0;
      display: flex;
      flex-direction: row-reverse;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        .avatar-img {
          width: 100%;
        }
      }
      .message {
        margin-right: 15px;
        margin-top: 10px;
        padding: 8px 12px;
        font-size: 14px;
        line-height: 20px;
        width: 350px;
        color: #333;
        position: relative;
        background: #eee;
        &:before {
          content: '';
          width: 0;
          height: 0;
          border-top: 16px solid #eee;
          border-right: 9px solid transparent;
          position: absolute;
          top: 0;
          right: -9px;
        }
        .time {
          position: absolute;
          font-size: 12px;
          line-height: 14px;
          color: #d9d9d9;
          bottom: -14px;
          right: 5px;
        }
      }
    }
  }
  .send-message {
    height: 150px;
    width: 700px;
    margin: 0 auto;
    position: fixed;
    bottom: 0;
    background: #fff;
    z-index: 999;
    .input-wrapper {
      width: 600px;
      margin: 0 auto;
      .text {
        padding: 15px;
        width: 100%;
        height: 80px;
        font-size: 13px;
        border: 1px solid #f0f0f0;
        border-radius: 10px;
        box-sizing: border-box;
        resize: none;
        &:focus, &:hover {
          border: 1px solid #1890ff;
        }
      }
    }
    .hint {
      position: absolute;
      font-size: 13px;
      color: #969696;
      left: 50px;
      top: 100px;
    }
    .submit {
      height: 40px;
      width: 60px;
      background: #7fb80e;
      border-radius: 10px;
      color: #fff;
      font-size: 15px;
      cursor: pointer;
      margin-top: 10px;
      margin-left: 520px;
    }
    .cancel {
      height: 38px;
      width: 58px;
      border: 1px solid #ccc;
      background: #fff;
      border-radius: 10px;
      color: #ccc;
      font-size: 15px;
      position: relative;
      cursor: pointer;
      margin-top: 10px;
      margin-left: 10px;
    }
  }
`