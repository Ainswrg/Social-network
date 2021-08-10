import { FormikHelpers } from "formik";
import React from "react";
import { PostType } from "../../../../types/Types";
import Post from "./Post/Post";
import PostForm from "./PostInput/PostMe";

export interface MapIProps {
  posts: Array<PostType>;
}
export interface DispatchIProps {
  addPost: (newPostText: string) => void;
}
const initialValues = {
  newPost: "",
};

export type InitialValuesType = typeof initialValues;

const MyPosts: React.FC<MapIProps & DispatchIProps> = ({ addPost, posts }) => {
  let postsElement = [...posts]
    .reverse()
    .map((p) => (
      <Post message={p.message} key={p.id} likesCount={p.likesCount} />
    ));

  const handleSubmit = (
    values: InitialValuesType,
    { setSubmitting }: FormikHelpers<{}>
  ) => {
    addPost(values.newPost);
    values.newPost = "";
    setSubmitting(false);
  };

  return (
    <>
      <PostForm handleSubmit={handleSubmit} initialValues={initialValues} />
      {postsElement}
    </>
  );
};

const MyPostsMemorized = React.memo(MyPosts);

export default MyPostsMemorized;
