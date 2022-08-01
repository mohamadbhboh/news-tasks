
const getNewsFromRepository = async (searchText) => {
    try {
        let result;
        var url = 'https://newsapi.org/v2/everything?q='+searchText+'&from=2022-07-31&apiKey=3d92f875bbc044ebb7355ad093750302';
        var request = new Request(url);
        await  fetch(request)
        .then(response =>response.json())
        .then(data => {
           data=JSON.stringify(data);
           data=JSON.parse(data);
           result=data.articles;
        });
        return result;
    } catch (error) {
      console.error(error);
    }
  };

  export default getNewsFromRepository;