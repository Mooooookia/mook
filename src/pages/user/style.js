import styled from 'styled-components'

export const UserWrapper = styled.div`
  width: 950px;
  margin: auto;
  display: flex;
  margin-top: 20px;
  height: auto;
`
export const LeftWrapper = styled.div`
  width: 640px;
  .user {
    padding: 0 240px 0 120px;
    position: relative;
    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      left: 20px;
      .avatar-img {
        width: 100%;
      }
    }
    .option {
      display: flex;
      position: absolute;
      right: 0;
      top: 15px;
      .send {
        width: 88px;
        height: 38px;
        border: 1px solid #42c02e;
        font-size: 15px;
        color: #42c02e;
        line-height: 38px;
        text-align: center;
        margin-right: 10px;
        border-radius: 20px;
        cursor: pointer;
      }
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
      font-size: 21px;
      color: #333;
      font-weight: bold;
      padding-top: 5px;
    }
    .info {
      display: flex;
      flex-flow: row wrap;
      margin: 10px 0;
      .info-item {
        height: 40px;
        padding: 0 10px;
        border-right: 1px solid #eee;
        .count {
          height: 20px;
          font-size: 15px;
          color: #333;
        }
        .text {
          color: #969696;
          font-size: 12px;
        }
      }
    }
  }
  .switch {
    height: 50px;
    margin: 20px 0;
    display: flex;
    .switch-item {
      display: block;
      height: 100%;
      color: #969696;
      line-height: 50px;
      padding: 0 20px;
      font-size: 15px;
      font-weight: bold;
      opacity: .7;
      position: relative;
      &:before {
        position: absolute;
        content: '';
        border-bottom: 2px solid #ccc;
        width: 0;
        height: 0;
        bottom: 0;
        right: 50%;
        transition: width .2s;
      }
      &:after {
        position: absolute;
        content: '';
        border-bottom: 2px solid #ccc;
        width: 0;
        height: 0;
        bottom: 0;
        left: 50%;
        transition: width .2s;
      }
      &.active, &:hover {
        color: #646464;
        opacity: 1;
        &:before {
          width: 50%;
        }
        &:after{
          width: 50%;
        }
      }
    }
  }
`

export const RightWrapper = styled.div`
  width: 300px;
  margin-left: 60px;
  .info {
    padding: 10px 20px;
    .info-item {
      padding: 20px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      .title {
        font-size: 14px;
        color: #969696;
        margin-bottom: 10px;
      }
      .content {
        font-size: 14px;
        color: #333;
      }
    }
  }
  .black {
    margin-left: 15px;
    font-size: 13px;
    background: transparent;
    color: #969696;
    &:hover {
      color: #333;
    }
  }
`