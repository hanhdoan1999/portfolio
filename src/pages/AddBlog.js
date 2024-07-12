import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { getBlogById } from "../API/blogAPI";
import "../styles/pages/Blogs.scss";
import Loading from "../components/Loading/Loading";
import { useParams } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from "../components/Button/Button";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html'; 

function AddBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchBlogDetail = async () => {
  //     try {
  //       const blogData = await getBlogById(id);
  //       setBlog(blogData);
  //       setLoading(false);
  //       console.log(blog)
  //     } catch (error) {
  //       console.error("Error fetching blog:", error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchBlogDetail();
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  
  const onEditorStateChange = (newState) => {
    setEditorState(newState);
  };

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContent);
  }

  const uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Simulate a successful image upload
        resolve({ data: { link: reader.result } });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <Container>
      <h2>Add new blog</h2>
      <div style={{ backgroundColor:'white', margin: '2rem 0'}}>
        <Editor
          wrapperStyle={{ height: 400, border: '1px solid #F1F1F1' }}
          editorStyle={{ height: 300, padding: '0 10px',  overflow: 'hidden' }}
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          // toolbar={{
          //   options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
          //   inline: { inDropdown: true },
          //   list: { inDropdown: true },
          //   textAlign: { inDropdown: true },
          //   link: { inDropdown: true },
          // }}
        />
      </div>
      <Button title="Save" onClick={handleSave}/>
   
    </Container>
  );
}

export default AddBlog;
