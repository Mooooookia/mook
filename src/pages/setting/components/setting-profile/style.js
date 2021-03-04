import styled from 'styled-components'


export const ProfileWrapper = styled.div`
  .setting-block {
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    .block-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .title {
        font-size: 15px;
        color: #969696;
        line-height: 17px;
        width: 100px;
      }
      .input-wrapper {
        width: 200px;
        .input {
          padding-left: 15px;
          width: 100%;
          height: 30px;
          font-size: 13px;
          border: 1px solid #f0f0f0;
          border-radius: 10px;
          box-sizing: border-box;
          &:focus, &:hover {
            border: 1px solid #1890ff;
          }
        }
        .text {
          padding: 15px;
          width: 100%;
          height: 120px;
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
    }
    .change-btn {
      display: block;
      background: transparent;
      width: 56px;
      height: 18px;
      line-height: 18px;
      padding: 4px 12px;
      font-size: 14px;
      color: #42c02e;
      margin-left: 120px;
      border: 1px solid #42c02e;
      border-radius: 20px;
      box-sizing: content-box;
      cursor: pointer;
      text-align: center;
    }
  }
`