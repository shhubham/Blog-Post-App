import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    blogs:
    [
        //By defaults these blogs will be present at the main page
            {
                id: 1,
                Title: 'Bezold effect',
                Author: 'Wilhelm von Bezold',
                Body: 'The Bezold effect is an optical illusion, that a color may appear different depending on its relation to adjacent colors.It happens when small areas of color are interspersed. An assimilation effect called the von Bezold spreading effect, similar to spatial color mixing, is achieved.',
                like:'Like'
            },
            {
                id: 2,
                Title: 'Kafka on the Shore',
                Author: 'Haruki Murakami',
                Body: 'Kafka on the Shore, a tour de force of metaphysical reality, is powered by two remarkable characters: a teenage boy, Kafka Tamura, who runs away from home either to escape a gruesome oedipal prophecy or to search for his long-missing mother and sister; and an aging simpleton called Nakata, who never recovered from a wartime affliction and now is drawn toward Kafka for reasons that, like the most basic activities of daily life, he cannot fathom. ',
                like: 'Like'
            }
    ]

};

export const GlobalContext = createContext(initialState);

export const GlobaProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const removeBlog = (id) => {
        dispatch({
            type: 'REMOVE_BLOG',
            payload: id
        })
    }

    const addBlog = (blog) => {
        dispatch({
            type: 'ADD_BLOG',
            payload: blog
        })
    }

    const editBlog1 = (blog) => {
        dispatch({
            type: 'EDIT_BLOG',
            payload: blog
        })
    }

    const likeBlog = (id) => {
        dispatch({
            type: 'LIKE_BLOG',
            payload: id
        })
    }
    return (
        <GlobalContext.Provider value={{
            blogs: state.blogs,
            removeBlog,
            addBlog,
            editBlog1,
            likeBlog
        }}>
            {children}
        </GlobalContext.Provider>
        )
}