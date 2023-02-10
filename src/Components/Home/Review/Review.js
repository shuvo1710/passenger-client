import React, { useEffect, useState } from 'react';
import ReviewCarousel from './ReviewCarousel';

const Review = () => {
    const [reviews, setReviews]=useState([])
    useEffect(()=>{
        fetch('Review.json')
        .then(res=> res.json())
        .then(data=> setReviews(data))
    },[])
    return (
        <div>
          <ReviewCarousel reviews={reviews}></ReviewCarousel>
        </div>
    );
};

export default Review;