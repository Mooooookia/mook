import React, { memo, useState, useEffect } from 'react'


import {
  EditorWrapper
} from './style'

export default memo(function MookEditor(props) {
  
  const { article, onSubmit } = props;
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);
  const [category, setCategory] = useState(article.category);
  const [tags, setTags] = useState(article.tags ? [...article.tags] : []);
  
  useEffect(() => {
    setTitle(article.title);
    setContent(article.content);
    setCategory(article.category);
    setTags(article.tags ? [...article.tags] : []);
  }, [article]);
  
  return (
    <EditorWrapper>
      <textarea value={title} onChange={e => setTitle(e.target.value)}></textarea>
      <textarea value={content} onChange={e => setContent(e.target.value)}></textarea>
      <button onClick={e => onSubmit({title, content, category, tags})}>发表</button>
    </EditorWrapper>
  )
})
