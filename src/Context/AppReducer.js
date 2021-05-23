export default ( state, action )=> {
    switch (action.type) {
        case 'REMOVE_BLOG':
            return {
                blogs: state.blogs.filter(blogs => {
                    return blogs.id !== action.payload
                })
            }

        case 'ADD_BLOG':
            return {
                blogs: [action.payload, ...state.blogs]
            }

        case 'LIKE_BLOG':
            blogs: state.blogs.filter(blogs => {
                if (blogs.id == action.payload) {
                    blogs.like = 'Liked';
                    
                }
            })

        case 'EDIT_BLOG':
            const updateBlog = action.payload;
            const updateBlogs = state.blogs.map(blogs => {
                if (blogs.id === updateBlog.id) {
                    return updateBlog;
                }
                return blogs;
            })
            return {
                blogs: updateBlogs
            }

        default:
            return state
    }
}