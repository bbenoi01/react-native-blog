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
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);