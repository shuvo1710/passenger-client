import React, { useEffect, useState } from "react";
import TravelReviewsCarousel from "./TravelReviewsCarousel";

const TravelReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("TravelReview.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="">
      <div className=" my-10">
        <h1 className="font-mono text-sky-500 text-2xl  text-center mt-4">
          Read The Top{" "}
        </h1>
        <h1 className="text-5xl font-bold text-white  text-center">
          Travel Reviews
        </h1>

        <div className="my-16">
          <TravelReviewsCarousel reviews={reviews}></TravelReviewsCarousel>
        </div>
      </div>
    </div>
  );
};

export default TravelReviews;
