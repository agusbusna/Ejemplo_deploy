import React from 'react'
import usePosts from '../../hooks/usePosts'

export default function PostList() {
    const usePostResult= usePosts()

    if(usePostResult.isLoading){
        return (
            <div>Cargando</div>
        )
    }
    
    const lista_posteos_jsx = []
    for (const post of usePostResult.response){
        lista_posteos_jsx.push(
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <hr/>
            </div>
        )
    }
    
    return (
        <div>
            {lista_posteos_jsx}
        </div>
    )
}
