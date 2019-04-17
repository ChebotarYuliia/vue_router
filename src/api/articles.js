import { HTTP } from './http-common';

let db = "https://jsonplaceholder.typicode.com/posts/";

export default {
  articelsRequest: function () {
    return HTTP
      .get(db)
      .then(response => {
        if (response.status == 200) {
          return response.data;
        }
        throw new Error("Network response was not ok");
      })
  }
}
