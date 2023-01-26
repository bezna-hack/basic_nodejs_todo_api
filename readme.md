To start the app:
`node app.js`

To get Todos:
`curl https://localhost:5000/api/todos`

To get Todo by ID:
`curl https://localhost:5000/api/todos/<number[0-99]>`

To delete Todo by ID:
`curl -X DELETE https://localhost:5000/api/todos/<number[0-99]>`

To post Todo:
`curl -H 'Content-Type: application/json' -d '{"title":<string>,"description":<string>,"id":<number>,"completed":false}' -X POST https://localhost:5000/api/todos`

To update Todo:
`curl -X PATCH https://localhost:5000/api/todos/<number[0-99]> -H 'Content-Type: application/json' -d '{"title":<string>,"description":<string>,"completed":<boolean>}'`