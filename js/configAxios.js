const url_token = new URL(window.location.href);
const token = url_token.searchParams.get('token');
axios.defaults.baseURL ='http://fustekaicecream.test/api/v2/game/quiz';
//axios.defaults.baseURL ='https://apifustekag.fustekaice.com/api/v2/game';
axios.defaults.headers.common['Authorization'] = "Bearer " + token;
axios.defaults.headers.post['Content-Type'] = 'application/json';