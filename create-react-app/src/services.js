import axios from "axios";

export function fetchAll(){
    // axios.defaults.headers.common['Authorization'] = 'Basic YTNhMTUyNTcxMjM3OTVjNjViYTYzZDUxODkwOTk1YjE6NDdmYTM5NDNmMTUyNDAzYjUxZjk1NjAxYzRmOWNlNTk=';
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    // var respuesta = axios.get("https://pebble-beach-concours-delegance.myshopify.com/admin/orders.json");510968299583
    // console.log(respuesta);
    const AuthStr = 'Basic '.concat('YTNhMTUyNTcxMjM3OTVjNjViYTYzZDUxODkwOTk1YjE6NDdmYTM5NDNmMTUyNDAzYjUxZjk1NjAxYzRmOWNlNTk=');
    axios.get('https://a3a15257123795c65ba63d51890995b1:47fa3943f152403b51f95601c4f9ce59@pebble-beach-concours-delegance.myshopify.com/admin/orders.json', { 
        headers: {
        "Content-Type": "application/json","Cache-Control" : "no-cache" } }).then(response => {
        // If request is good...
        console.log(response.data);
      })
      .catch((error) => {
        console.log('error 3 ' + error);
      });
}












