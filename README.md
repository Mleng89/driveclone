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

- [ ] Breadcrumbs:
```
import { Breadcrumb } from 'react-bootstrap';
```

Used bootstrap to set up breadcrumbs, but need to challenge myself and build own breadcrumb logic from scratch. 

- [ ] Wrapping components with one component logic.
```
import React from 'react';
import { Container } from 'react-bootstrap';
export default function CenteredContainer({ children }) {
	return (
		<>
			<Container
				className='d-flex align-items-center justify-content-center'
				style={{ minHeight: '100vh' }}
			>
				<div className='w-100' style={{ maxWidth: '400px' }}>
					{children}
				</div>
			</Container>
		</>
	);
}
```
Used this to wrap around authentication components to center items on the page.
