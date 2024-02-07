import React from "react";

import Carousel from "../../../Components/Carousel/Carousel";
import Usefetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = Usefetch(
    `/${mediaType}/${id}/recommendations`
  );


  return (
    <Carousel
      title="Recommendations"
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

export default Recommendation;