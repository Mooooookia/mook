import styled from 'styled-components'

export const RegisterWrapper = styled.div`
  .title {
    font-size: 30px;
    margin: 60px auto 40px;
    text-align: center;
  }
  .input-wrapper {
    width: 350px;
    height: 50px;
    margin: 20px auto;
    background: #fff;
    .input {
      box-sizing: border-box;
      padding-left: 30px;
      width: 100%;
      height: 100%;
      background: #eee;
      border: #eee 1px solid;
      font-size: 17px;
      border-radius: 10px;
      &:focus {
        border: #7fb80e 1px solid;
        background: transparent;
      }
    }
  }
  .submit-btn {
    width: 100px;
    height: 50px;
    border-radius: 10px;
    text-align: center;
    line-height: 50px;
    background: #7fb80e;
    color: #fff;
    font-size: 22px;
    display: block;
    margin: 30px auto;
  }
`