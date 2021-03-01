import React, { memo, useState, useEffect } from 'react'

import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';

import {
  getArticleInfo
} from '@/service/article'

import {
  EditorWrapper
} from './style'


const mdParser = new MarkdownIt(/* Markdown-it options */);

export default memo(function MookEditor(props) {
  const { article, removeArticle, updateArticle } = props;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("")
  
  useEffect(() => {
    if (!article) return;
    setTitle(article.title)
    setContent(article.content)
    getArticleInfo(article.id).then(res => {
      res = res.data
      if (res.tags) setTags(res.tags.map(item => item.content))
      else setTags([])
    })
  }, [article]);
  

  function contentChange(text) {
    setContent(text)
  }
  function addTag() {
    if (!tag) return;
    const newTags = [...tags, tag];
    setTag("");
    setTags(newTags);
  }
  function deleteTag(index) {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags)
  }
  function onSubmit() {
    updateArticle(article.id, title, content, tags)
  }
  return (
    <EditorWrapper>
      <div className="top">
        <div className="title">
          <input className="title-input" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="option">
          <button className="submit" onClick={onSubmit}>发表</button>
          <button className="submit delete" onClick={e => removeArticle(article.id)}>删除</button>
        </div>
      </div>
      <MdEditor
        style={{ width: "100%", height:"calc(100% - 140px)" }}
        renderHTML={(text) => mdParser.render(text)}
        value={content}
        onChange={(info, e) => contentChange(info.text)}
      />
      <div className="tag-wrapper">
        <div className="add-tag">
          <div className="tag-input-wrapper">
            <input
              className="tag-input"
              placeholder="请输入标签"
              value={tag}
              onChange={e => setTag(e.target.value)}
            />
          </div>
          <button className="tag-btn" onClick={e => addTag()}>添加</button>
        </div>
        <div className="tag-list">
          {
            tags && tags.map((item, index) => {
              return (
                <div className="tag-item" key={index}>
                  {item}
                  <i className="iconfont" onClick={e => deleteTag(index)}>&#xe60c;</i>
                </div>
              )
            })
          }
        </div>
      </div>
    </EditorWrapper>
  )
})
