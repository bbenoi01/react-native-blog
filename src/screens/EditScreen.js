import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
import { HeaderTitle } from 'react-navigation-stack';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(BlogContext);

    const blogPost = state.find(
        blogPost => blogPost.id === id
    );

    return (
        <BlogPostForm
            initialValues= {{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {
                editBlogPost(id, title, content);
            }}
        />
    );
};

const styles = StyleSheet.create({

})

export default EditScreen;