FORMAT: 1A
HOST: https://api.foo.com

# HIPPIE MOCKUP API (version 0.0.1)

# Group session

## Session [/session{?action}]

### Session login, logout [POST]

+ Parameters
    + action: login (String) - The actions for session management
    	+ Options: `login`, `logout`, `reset_password`

+ Request for login (application/json)  
	
	+ Body

			{
				"username": "user@foo.com", 
				"password": "123456", 
				"remember": false
			}

+ Response 200 (application/json)

	+ Body

			{
				"meta": {},
				"data": {
					"access_token": "WBLP4sUZfg4b31oHUI7WYxVQ9eE1V5NlYbdXf4PcE56WRGL4iGzxZfKORIYGnTRS1b7yPCTohuJeufH49Qgn7TZ			NoWqtTclnv6qbarD1XjdBnZygUGu08yGXzZ8Fu8aGRUHlnWVbptJOvscnrPn6AmIBJykACPmOm6KHXK3q8G7iq7YaW34KGBy75ZQbqZD			B6x14M6FJSajHjBLOgICFLCiJZBsAs33afVGdVMCVhoOPU1fbnUneVOFos8fgEdDf",
					"refresh_token": "l88osCp7wRcC3bAdzsn4DauIA2PABqL27xXWJ2HbfWnHBTHQvJrrAYLD6Pptt9cBisQdqf6n9bB64DRCFxdEWk			6CTLcRMpKW0FXJydCLq8ncO5GzDa6woMM3gtbbWD0c0CgIXHuIuTzfgZrrt4qBxUb1vii96NT67WbIVFkVcjzqTXuUHkfhOlOSckit2l			bB8DvY2Gr7DzR7FsS0cBImhPSXFQbR9Rchp1bGsUsdC4GDOl7wMRBeXl9WK6IxbUqR",
					"expires_in": 3600,
					"token_type": "bearer"
				}
			}

+ Request for logout (application/json)  
	
	+ Body

			{}

+ Response 200 (application/json)

	+ Body

			{
				"meta": {
					"message": "logout successfully"
				},
				"data": {
					"timestamp": "2015-05-16T09:00:00z"
				}
			}			


# Group User

## User [/user]

### Register a user [POST /user]

+ Request (application/json)

		{
		  "firstname": "Homer",
		  "lastname": "Quan",
		  "username": "homerquan@gmail.com",
		  "password": "abcdef",
		  "education":[
		  {
		  	"schole": "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		  	"year": 2014,
		  	"major": "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		  	"gpa": "3.5",
		  	"activities": [],
		  	"interests": []
		  }],
		  "location": "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		  "skills": [
		    "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		    "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		    "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5"
		  ],
		  "targets": [
		    "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		    "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		    "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5"
		  ],
		  "avatar": "http://foo.com/default-avatar.png",  
		  "website": "hoemrquan.com",
		  "telephone": "23232323",
		  "email": "homerquan@gmail.com"
		}

+ Response 200 (application/json)
		
		{
		  "meta": {
		  },
		  "data": {
		    "id": "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5"
     	  }
		}		

### Retrival a user [GET /user]

+ Response 200 (application/json)
		
		{
		  "meta": {
		  },
		  "data": {
		    "id": "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		 	"firstname": "Homer",
		 	"lastname": "Quan",
		 	"username": "homerquan@gmail.com",
		 	"password": "abcdef",
		 	"education":[
		 	{
		 		"schole": "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		 		"year": 2014,
		 		"major": "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		 		"gpa": "3.5",
		 		"activities": [],
		 		"interests": []
		 	}],
		 	"location": "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		 	"skills": [
		 	  "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		 	  "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		 	  "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5"
		 	],
		 	"targets": [
		 	  "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		 	  "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		 	  "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5"
		 	],
		 	"avatar": "http://foo.com/default-avatar.png",  
		 	"website": "hoemrquan.com",
		 	"telephone": "23232323",
		 	"email": "homerquan@gmail.com"
     	  }
		}			

## Me [/me]

### User's personal content  [GET /me]

+ Response 200 (application/json)
		
		{
		  	"meta": {
		  	},
		  	"data": {
		 		"firstname": "Homer",
		 		"lastname": "Quan",
		 		"username": "homerquan@gmail.com",
		 		"education":[
		 		{
		 			"schole": "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		 			"year": 2014,
		 			"major": "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		 			"gpa": "3.5",
		 			"activities": [],
		 			"interests": []
		 		}],
		 		"location": "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		 		"skills": [
		 		  "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		 		  "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		 		  "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5"
		 		],
		 		"targets": [
		 		  "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		 		  "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5",
		 		  "f98fe4af-4e4a-480c-bbf7-d266c88e5fa5"
		 		],
		 		"avatar": "http://foo.com/default-avatar.png",  
		 		"website": "hoemrquan.com",
		 		"telephone": "23232323",
		 		"email": "homerquan@gmail.com"
			}
		}	


# Group Feeds

## feeds [/feeds]

### User's recommended content feeds [GET /feeds]

+ Response 200 (application/json)
		
		{
			"meta": {},
			"data": [{
				"card": "employer",
				"address": "",
				"title": "Endurance",
				"description": "",
				"feedbacks": [],
				"actions": []
			}]
		}


