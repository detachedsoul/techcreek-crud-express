# Techcreek Group 3 Express Assignment

This is a solution to an assignment to create `Create`, `Read`, `Update`, and `Delete` operations using Express. Below are the endpoints and values to be used:

## Database connection

To test the endpoints, you need a database connection. The login details are:

- `MongoDB url`: mongodb+srv://detachedsoul:YouDontLoveMe@cluster0.3e4ku.mongodb.net/blogDB?retryWrites=true&w=majority

- `Port`: 8080

I know you would be thinking: "Omo, make I just hack this thing." You won't find my atm pin there so don't bother. 😏

## IDs

- 61faeb4fee9ee21357d6ee54
- 61faec6cf88bf15e8f42721d
- 61faecc7f88bf15e8f42721f

## Blog post body format

```json
    {
        "title": "My First Blog Post",
        "summary": "This was a pretty nice blog post",
        "author": "Wisdom Ojimah"
    }
```

### To get all blog posts

```javascript
    localhost:8080/blogs
```

### To get a single blog post

```javascript
    localhost:8080/blog/:id
```

Replace `:id` with the actual ID indicated above

### To create a new blog post

```javascript
    localhost:8080/create
```

Use the format indicated above

### To delete a single blog post

```javascript
    localhost:8080/delete/:id
```

Replace `:id` with the actual ID indicated above

### To edit a single blog post

```javascript
    localhost:8080/edit/:id
```

Replace `:id` with the actual ID indicated above and use the format indicated above
