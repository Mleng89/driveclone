# Clone
## Learned about: 
- [ ] Firebase rules 
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
    function auth(){
    	return request.auth != null
    }
    
    function matchesUser(data){
    	return request.auth.uid == data.userId
    }
    function notUpdating(field){
    return !(field in request.resource.data) || resource.data[field] == request.resource.data[field]
    }
      allow read, write: if auth() && matchesUser(resource.data)
      allow create: if auth() && matchesUser(request.resource.data)
      allow update: if auth() && matchesUser(resource.data) && notUpdating('userId')
    }
  }
}
```
This allows for authentication & user matching to read, write, and update in the drive.

- [ ] Custom hooks:
```
function useFolder(){}
```
Able to recreate a redux store, without creating a redux store. 
