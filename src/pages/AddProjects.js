import React, { useState } from "react";
import { storage } from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import "../styles/pages/AddProject.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { createProject } from "../API/projectAPI";
import { toast } from "react-toastify";

function AddProjects() {
  const [formData, setFormData] = useState({ image: '', title: '', tech : '', description: '', link: '', gitLink: '' });
  const [errors, setErrors] = useState({ title: '' });
  const [localImage, setLocalImage] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = React.useRef(null);

  const validateForm = () => {
    let titleError = '';

    if (formData.title.length < 3) {
      titleError = 'Title must be at least 3 characters long.';
    }

    setErrors({ title: titleError });

    return !titleError;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLocalImage(imageUrl);
      setImageUpload(file);
    }
  };

  const uploadImage = () => {
    return new Promise((resolve, reject) => {
      if (!imageUpload) {
        resolve(null);
        return;
      }

      const storageRef = ref(storage, `files/${imageUpload.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageUpload);

      uploadTask.on("state_changed",
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData({ ...formData, image: downloadURL });
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleCreateProject = async (updatedFormData) => {
    try {
      const projectCreated = await createProject(updatedFormData);
      toast.success("Project created successfully!");
      setFormData({ image: '', title: '', tech: '', description: '', link: '', gitLink: '' });
      setLocalImage(null);
    } catch (error) {
      toast.error("Something went wrong, please try again");
      console.error("Error creating project:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const imageUrl = await uploadImage();
        if(imageUrl) {
          const updatedFormData = { ...formData, image : imageUrl};
          await handleCreateProject(updatedFormData);
        }
      } catch (error) {
        toast.error("Image upload failed. Please try again.");
        console.error("Error uploading image:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Container>
      <h2 style={{textAlign:'center'}}>Add New Projects</h2>
      <form onSubmit={handleSubmit} className="form-custom">
        <div>
          <label>
            <input type="file" ref={fileInputRef} className="hidden-input" onChange={handleFileChange} />
            <FontAwesomeIcon icon={faCameraRetro} style={{ width: '50px', height: '50px' }} className="camera-icon" />
          </label>
          {localImage && (
            <div className="image-upload">
              <img src={localImage} alt="Uploaded" style={{ marginTop: '20px', maxWidth: '100%', objectFit: "cover" }} />
            </div>
          )}
        </div>
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          {errors.title && <p className="error">{errors.title}</p>}
        </div>
        <div>
          <label>
            Link :
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Link Git:
            <input
              type="text"
              name="gitLink"
              value={formData.gitLink}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Tech:
            <input
              type="text"
              name="tech"
              value={formData.tech}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
            />
          </label>
        </div>
        <Button type="submit" title={isLoading ? 'Submitting...' : 'Submit'} disabled={isLoading} />
      </form>
    </Container>
  );
}

export default AddProjects;
