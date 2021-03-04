import styled from 'styled-components'


export const BasicWrapper = styled.div`
  .setting-avatar {
    display: flex;
    padding: 20px 0;
    height: 100px;
    align-items: center;
    border-bottom: 1px solid #eee;
    width: 100%;
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      .avatar-img {
        width: 100%;
      }
    }
    .change-btn {
      display: block;
      background: transparent;
      width: 56px;
      height: 18px;
      padding: 4px 12px;
      font-size: 14px;
      color: #42c02e;
      margin-left: 40px;
      border: 1px solid #42c02e;
      border-radius: 20px;
      box-sizing: content-box;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      .file {
        position: absolute;
        opacity: 0;
        top: 0;
        right: 0;
        bottom: 0;
        cursor: pointer;
        font-size: 100px;
      }
    }
  }
  .setting-password {
    padding: 20px 0;
    height: 160px;
    border-bottom: 1px solid #eee;
    .password-wrapper {
      display: flex;
      align-items: center;
      margin: 20px 0;
      .title {
        font-size: 15px;
        color: #969696;
        line-height: 17px;
        width: 100px;
      }
      .input-wrapper {
        width: 200px;
        height: 30px;
        .input {
          padding-left: 15px;
          width: 100%;
          height: 100%;
          font-size: 13px;
          border: 1px solid #f0f0f0;
          border-radius: 10px;
          box-sizing: border-box;
          &:focus, &:hover {
            border: 1px solid #1890ff;
          }
        }
      }
    }
    .change-btn {
      display: block;
      background: transparent;
      width: 56px;
      height: 18px;
      padding: 4px 12px;
      font-size: 14px;
      color: #42c02e;
      margin-left: 120px;
      border: 1px solid #42c02e;
      border-radius: 20px;
      box-sizing: content-box;
      cursor: pointer;
    }
  }
`