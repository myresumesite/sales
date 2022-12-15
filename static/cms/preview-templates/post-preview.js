import React from "react";
import { PostTemplate } from "../../templates/index-page.js";


const PostPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  

  if (data) {
    console.log(data);
    return <PostTemplate data={data} />;
  } else {
    console.log("CHECK");
    return <div>Loading...</div>;
  }
};

export default PostPreview;