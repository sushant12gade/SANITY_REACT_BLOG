import sanityClient from'./Client.js';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function AllPost() {
    const [allPostData, setAllPostData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(
            `*[_type=="post"]{
        title,
        slug,
        mainImage{
            asset->{
                _id,
                url,
            }
        }
    }`
        )
            .then((data) => setAllPostData(data))
            .catch(console.error);
    }, []);

    return (
<div className='bg-gray-500 min-h-screen p-12'>
        <div className='container mx-auto'>
            <h2 className='text-5xl flex justify-center'> Blog Post </h2>
            <h3 className='text-lg text-black flex justify-center mb-12'>
                welcome to my blog page
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 '> 
                {allPostData && allPostData.map((post, index) => (
                    <Link to={'/' + post.slug.current} key={post.slug.current}>
                        <span className='bg-white block h-64 relative shadow leading-snug border-l-8 border-green-800' key= {index}>
                            <img  className='w-full h-full rounded-r object-cover absolute'  src={post.mainImage.asset.url} alt="imag main" />
                            <span className='  relative h-full flex justify-end items-end pr-4 pb-4'>
                                <h2 className=' text-gray-50 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded '>
                                    {post.title}
                                </h2>
                            </span>
                        </span>
                    </Link>



                ))}
            </div>
        </div>

        </div>
    )




}

export default AllPost;