// import handleBlogs from "./blogs"
// import handleCards from "./cards"
// import handleDocs from "./docs"
import handleImages from "./images"
import productHandlers from "./products"
// import handleTexts from "./texts"
// import handleUsers from "./users"
// import handleVideos from "./videos"

const apiHandler = {
  // user:{...handleUsers},
  image: { ...handleImages },
  product: { ...productHandlers }
  // card:{...handleCards},
  // doc:{...handleDocs},
  // text:{...handleTexts},
  // video:{...handleVideos},
  // blog:{...handleBlogs}
}

export default apiHandler