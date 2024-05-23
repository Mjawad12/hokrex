const { createApi } = require("unsplash-js");

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UN_ACCESSKEY,
});

export default unsplash;
