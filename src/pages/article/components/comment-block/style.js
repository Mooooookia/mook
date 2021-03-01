import styled from 'styled-components'


export const CommentWrapper = styled.div`
  position: relative;
  padding-left: 60px;
  border-bottom: 1px solid #eee;
  margin: 25px 0;
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: 10px;
    top: 0;
    .avatar-img {
      width: 100%;
    }
  }
  .nickname {
    height: 20px;
    line-height: 20px;
    font-size: 15px;
    color: #404040;
  }
  .time {
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: #969696;
    margin-bottom: 10px;
  }
  .content {
    font-size: 16px;
    color: #404040;
    margin-bottom: 15px;
  }
  .option {
    display: flex;
    height: 20px;
    align-items: center;
    margin-bottom: 10px;
    .like {
      display: flex;
      height: 100%;
      color: #b0b0b0;
      cursor: pointer;
      .iconfont {
        display: block;
        font-size: 16px;
        line-height: 20px;
        &.liked {
          color: #7fb80e;
        }
      }
      .like-count {
        margin-left: 5px;
        font-size: 15px;
        line-height: 20px;
      }
    }
  }
`