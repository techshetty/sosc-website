import React from 'react'
import Link from 'gatsby-link'

const BlogCard = ({data}) => (
    <div className="blog-card">

        <div className="cover">
        <img src={data.cover.publicURL}></img>
        </div>
        <div className="card-content">
            <div className="tags">
                {data.tags}
            </div>
            <div className="title">
                {data.title}
            </div>
            <div className="description">
                {data.description}
            </div>
            <div className="author-box">
                <img
                    className="author-img"
                    src=
                    { `https://avatars1.githubusercontent.com/${data.author}?size=100` }></img>
                <div className="author-details">
                    <div className="author-name">
                        {data.author}
                    </div>
                    <div className="date">
                        {data.date}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default BlogCard