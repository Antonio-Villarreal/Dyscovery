export default class APIService{
    // Insert an article
    static InsertData(body){
        return fetch(`http://localhost:8080/add`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

}