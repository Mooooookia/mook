import styled from 'styled-components'


export const ArticleWrapper = styled.div`
  background: #f9f9f9;
  display: flex;
  .rc-md-editor {
    border: none !important;
    .section-container {
      overflow: visible !important;
    }
  }
`

export const LeftWrapper = styled.div`
  width: 700px;
  
  margin: 10px 10px 0 140px;
  .article {
    padding: 30px;
    background: #fff; 
    .title {
      font-size: 30px;
      width: 100%;
      color: #404040;
      font-weight: bold;
    }
    .author {
      margin-top: 20px;
      height: 50px;
      width: 100%;
      box-sizing: border-box;
      padding-left: 70px;
      position: relative;
      .avatar {
        position: absolute;
        left: 10px;
        top: 0;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        .avatar-img {
          width: 100%;
        }
      }
      .nickname {
        height: 30px;
        color: #404040;
        font-size: 16px;
        line-height: 30px;
      }
      .info {
        height: 20px;
        line-height: 20px;
        font-size: 13px;
        color: #969696;
        .time {
          margin-right: 10px;
        }
        .word {
          margin-right: 10px;
        }
      }
    }
    .tag-list {
      font-size: 15px;
      color: #666;
      .tag-item {
        margin-left: 10px;
      }
    }
    .option {
      width: 50px;
      height: 160px;
      position: fixed;
      left: 60px;
      top: 220px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .like {
        width: 50px;
        height: 72px;
        color: #969696;
        .iconfont {
          font-size: 25px;
          line-height: 50px;
          text-align: center;
          display: block;
          width: 100%;
          height: 50px;
          box-sizing: border-box;
          border-radius: 50%;
          border: 1px solid #ccc;
          background: #fff;
          cursor: pointer;
        }
        .option-title {
          margin-top: 2px;
          width: 100%;
          height: 20px;
          text-align: center;
          line-height: 20px;
          font-size: 15px;
        }
      }
      .collect {
        width: 50px;
        height: 72px;
        color: #969696;
        .iconfont {
          font-size: 20px;
          line-height: 50px;
          text-align: center;
          display: block;
          width: 100%;
          height: 50px;
          box-sizing: border-box;
          border-radius: 50%;
          border: 1px solid #ccc;
          background: #fff;
          cursor: pointer;
        }
        .option-title {
          margin-top: 2px;
          width: 100%;
          height: 20px;
          text-align: center;
          line-height: 20px;
          font-size: 15px;
        }
      }
    }
  }
  .comment {
    padding: 30px;
    background: #fff; 
    margin-top: 10px;
    .add-comment {
      .input-wrapper {
        height: 64px;
        width: 600px;
        background: #fafafa;
        padding: 12px 16px;
        border: 1px solid #eee;
        .input {
          background: transparent;
          width: 100%;
          height: 100%;
          font-size: 15px;
          resize: none;
        }
      }
      .submit {
        height: 40px;
        width: 60px;
        background: #7fb80e;
        border-radius: 10px;
        color: #fff;
        font-size: 15px;
        position: relative;
        cursor: pointer;
        margin-top: 5px;
        margin-left: 500px;
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
        margin-top: 5px;
        margin-left: 10px;
      }
    }
    .cut {
      height: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      .title {
        font-size: 18px;
        height: 20px;
        color: #404040;
        line-height: 20px;
        .count {
          margin-left: 5px;
        }
      }
      .order {
        display: flex;
        height: 100%;
        .order-item {
          margin-left: 10px;
          line-height: 20px;
          color: #969696;
          font-size: 14px;
          cursor: pointer;
          &.selected {
            color: #2d2d2d;
          }
        }
      }
    }
  }
`

export const RightWrapper = styled.div`
  width: 300px;
  background: yellow;
`