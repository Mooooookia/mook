import styled from 'styled-components'

export const EditorWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  height: 100%;
  .top {
    width: 100%;
    height: 50px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      margin-left: 20px;
      width: 600px;
      height: 100%;
      .title-input {
        padding-left: 20px;
        background: transparent;
        width: 100%;
        height: 100%;
        font-size: 18px;
        border: 1px solid #f0f0f0;
        border-radius: 10px;
        box-sizing: border-box;
        &:focus, &:hover {
          border: 1px solid #1890ff;
        }
      }
    }
    .option {
      display: flex;
      .submit {
        display: block;
        height: 40px;
        width: 60px;
        background: #7fb80e;
        border-radius: 10px;
        color: #fff;
        font-size: 15px;
        margin-right: 10px;
        &.delete {
          background: #ff4d4f;
        }
      }
    }
    
  }
  .tag-wrapper {
    height: 40px;
    padding: 15px 0;
    width: 100%;
    display: flex;
    .add-tag {
      margin-left: 20px;
      width: 200px;
      display: flex;
      .tag-input-wrapper {
        width: 150px;
        .tag-input {
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
      .tag-btn {
        width: 50px;
        display: block;
        height: 30px;
        margin: 5px 10px;
        background: #009ad6;
        border-radius: 10px;
        color: #fff;
        font-size: 13px;
      }
    }
    .tag-list {
      flex: 1;
      display: flex;
      align-items: center;
      .tag-item {
        height: 30px;
        line-height: 30px;
        padding: 0 20px;
        text-indent: -10px;
        margin-left: 15px;
        background: #7bbfea;
        color: #fff;
        position: relative;
        border-radius: 5px;
        .iconfont {
          text-indent: 0;
          position: absolute;
          right: 0;
          bottom: 0;
          width: 20px;
          cursor: pointer;
        }
      }
    }
  }
`