export default {
  query: "moon",
  page: 1,
  perPage: 4,
  baseUrl: `https://api.pexels.com/v1`,
  getFetch() {
    let key = "563492ad6f917000010000010bc7d6cc1a58490e999eb6b49b04379d";
    let params = `/search?query=${this.query}`;
      let url = this.baseUrl + params;
      let options = {
          method: "GET",
          headers: {
              Authorization: key,
          },
      };
      return fetch(url, options)
          .then((response) => {
            //   console.log(response);
              return response.json();
          })
          .then((data) => {
              //   console.log(data);
              return data.photos;
          })
          .then((result) => {
            //   console.log(result);
          });
  },
};
