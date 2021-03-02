import styled from 'styled-components'


export const UserWrapper = styled.div`
  height: 48px;
  padding: 10px 100px 10px 70px;
  position: relative;
  border-bottom: 1px solid #eee;
  .avatar {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    .avatar-img {
      width: 100%;
    }
  }
  .option {
    display: flex;
    position: absolute;
    right: 0;
    top: 15px;
    .follow {
      width: 90px;
      height: 40px;
      background: #42c02e;
      color: #fff;
      font-size: 15px;
      line-height: 40px;
      text-align: center;
      border-radius: 20px;
      cursor: pointer;
      &.cancel {
        color: #8c8c8c;
        width: 88px;
        height: 38px;
        border: 1px solid #8c8c8c;
        background: #fff;
      }
    }
  }
  .nickname {
    font-size: 15px;
    color: #333;
    line-height: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  .info {
    height: 16px;
    font-size: 12px;
    color: #969696;
    .info-item {
      display: inline-block;
      line-height: 16px;
      padding-right: 10px;
      border-right: 1px solid #eee;
      margin-right: 5px;
      &:last-child {
        border: none;
      }
    }
  }
  .like {
    color: #969696;
    font-size: 12px;
    line-height: 16px;
  }
`