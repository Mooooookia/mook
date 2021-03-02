import React, { memo, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classnames from "classnames";

import { getAvatar } from "@/utils/avatar";
import toast from "@/utils/message";
import { addLike, deleteLike } from "@/service/comment";
import parseTime from '@/utils/time'

import { CommentWrapper } from "./style";

export default withRouter(memo(function MookCommentBlock(props) {
  const { comment } = props;
  const [liked, setLiked] = useState(comment.liked);
  const [likeCount, setLikeCount] = useState(comment.likeCount);

  const { isLogin } = useSelector(state => ({
    isLogin: state.getIn(["user", "isLogin"])
  }), shallowEqual)

  const dispatch = useDispatch();

  function onLike() {
    if (!isLogin) {
      toast(dispatch, "您未登录！")
      return;
    }
    if (liked) {
      deleteLike(comment.id).then((res) => {
        setLiked(false);
        setLikeCount(likeCount - 1);
        toast(dispatch, "取消点赞成功");
      });
    } else {
      addLike(comment.id).then((res) => {
        setLiked(true);
        setLikeCount(likeCount + 1);
        toast(dispatch, "点赞成功");
      });
    }
  }

  function jumpToUser(id) {
    if (props.history) {
      props.history.push(`/user/${id}`)
    }
  }

  return (
    <CommentWrapper>
      <div className="avatar" onClick={e => jumpToUser(comment.user.id)}>
        <img src={getAvatar(comment.user.id)} className="avatar-img" alt="#" />
      </div>
      <div className="nickname" onClick={e => jumpToUser(comment.user.id)}>{comment.user.nickname}</div>
      <div className="time">
        {parseTime(comment.createAt)}
      </div>
      <div className="content">{comment.content}</div>
      <div className="option">
        <div className="like" onClick={onLike}>
          <i className={classnames("iconfont", { liked })}>
            &#xe602;
          </i>
          <div className="like-count">{likeCount}</div>
        </div>
      </div>
    </CommentWrapper>
  );
}))
