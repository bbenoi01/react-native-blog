import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ('add_blogPost'): {
            return (
                [
                    ...state,
                    {
                        id: Math.floor(Math.random() * 99999),
                        title: payload.title,
                        content: payload.content
                    }
                ]
            )
        }

        case ('edit_blogPost'): {
            return state.map(blogPost => {
                return blogPost.id === payload.id ? payload : blogPost;
            })
        }

        case ('delete_blogPost'): {
            return (
                state.filter(blogPost => blogPost.id !== payload)
            )
        }

        default: {
            return state;
        }
    }
};


const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogPost', payload: {title, content} });
        callback();
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogPost', payload: id })
    };
};

const editBlogPost = dispatch => {
    return (id, title, content) => {
        dispatch({
            type: 'edit_blogpost',
            payload: { id, title, content }
        })
    }
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: 'BS Blog Post', content: 'BS content', id: 1 }]
);