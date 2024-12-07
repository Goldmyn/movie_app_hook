import React, { useState } from "react";
import { Button, Modal, Rate, Input, message } from "antd";
const { TextArea } = Input;

const AddMovie = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [movieData, setMovieData] = useState({
    _id: "",
    title: null,
    description: null,
    posterURL: null,
    rating: null,
  });

  const errorAlert = (errorMessage) => {
    messageApi.open({
      type: "error",
      content: errorMessage,
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const isImageUrl = (url) => {
    const imageUrlPattern = /\.(jpeg|jpg|png|gif|bmp|webp|svg)$/i;
    return imageUrlPattern.test(url);
  };

  const validateImageUrl = async (url) => {
    if (!isImageUrl(url)) {
      return false; // URL format is invalid
    }

    try {
      const response = await fetch(url, { method: "HEAD" });
      const contentType = response.headers.get("Content-Type");

      // Check if Content-Type indicates an image
      if (response.ok && contentType && contentType.startsWith("image/")) {
        return true; // Valid image URL
      }
    } catch (error) {
      console.error("Error while validating image URL:", error);
    }

    return false; // URL is not valid
  };

  const handleOk = async () => {
    if (movieData.title === null) {
      return errorAlert("Please Enter Movie Title");
    }
    if (movieData.description === null || movieData.description.length < 100) {
      return errorAlert("Description : Minimum of 100 Characters");
    }
    if (
      movieData.posterURL === "" ||
      !(await validateImageUrl(movieData.posterURL))
    ) {
      return errorAlert("Please Enter a Valid Image URL");
    }
    if (movieData.rating === null) {
      return errorAlert("Please Enter Movie Rating");
    }

    const newMovie = { ...movieData, _id: Date.now() };

    props.handleAddMovie(newMovie);

    setMovieData({
      _id: "",
      title: null,
      description: null,
      posterURL: null,
      rating: null,
    });

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showModal} className="mb-6">
        Add New Movie
      </Button>
      <Modal
        title={
          <div>
            <h2 className="text-center uppercase text-blue-900 font-bold">
              Add Movie
            </h2>
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form action="" className="grid gap-6 bg-violet-100 p-4 rounded-lg">
          <Input
            value={movieData.title}
            onChange={(event) => {
              setMovieData({ ...movieData, title: event.target.value });
            }}
            size="large"
            placeholder="Enter Movie Title"
          />
          <TextArea
            showCount
            value={movieData.description}
            maxLength={150}
            minLength={100}
            onChange={(event) => {
              setMovieData({ ...movieData, description: event.target.value });
            }}
            placeholder="Enter Movie Description"
            style={{ height: 120, resize: "none" }}
          />
          <Input
            value={movieData.posterURL}
            onChange={(event) => {
              setMovieData({ ...movieData, posterURL: event.target.value });
            }}
            className="capitalize"
            size="large"
            placeholder="Enter Movie Image Link"
          />
          <div className="flex gap-4 items-center">
            <p className="font-bold uppercase text-yellow-400">
              Movie Rating :
            </p>
            <Rate
              allowHalf
              value={movieData.rating}
              onChange={(value) => {
                setMovieData({ ...movieData, rating: value });
              }}
              className="p-2 rounded-xl flex gap-3"
              style={{ backgroundColor: "white", fontSize: "24px" }}
            />
          </div>
        </form>
      </Modal>
    </>
  );
};
export default AddMovie;
