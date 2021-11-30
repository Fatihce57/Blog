import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Post from '../../components/post/Post';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css;';


export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts")
            console.log(res)
        }
        fetchPosts()
    }, [])

    return (
        <>
            <Header />
            <div className="home">
                <Post />
                <Sidebar />
            </div>
        </>
    )
}
