## Data modeling

### Data modeling using mongoose.

1. Go to **Stackblitz.com . choose express environment.**
2. Install mongoose using another terminal.
3. Create a folder **/models(folder)/todos(folder)/--- user.model.js.**

_user.model.js_

```javascript
import mongoose from "mongoose"; // import mongoose

const userSchema = new mongoose.Schema({}); // create a schema

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({});

export const User = mongoose.model("User", userSchema); // export it
```

**IMP NOTE - ** When in line // import mongoose from "mongoose"

const userSchema = new mongoose.Schema({})

export `const User = mongoose.model('User',userSchema)` the "User" is get converted into `users` when get in DB.

<hr>

### Writing data in Schema

Mongoose schemas support a timestamps option. If you set timestamps: true, Mongoose will add two properties of type Date to your schema:

1. createdAt: a date representing when this document was created.

2. updatedAt: a date representing when this document was last updated.

```javascript
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // It adds the createdAT and updateAt
);

export const User = mongoose.model("User", userSchema);
```

<hr>

### How to relate the Schemas.

Like, here we creating a todo app. a complex one where a todo will have **subtodos**.

Until now, we have created `user.model.js`, `todo.model.js` and `subtodo.model.js`. we have seen how to write their schemas. but Now how relate them and store them.

**Structure**

     Todo
      |----> sub todos

_todo.model.js_

```javascript
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subtodo",
      },
    ], // Array of sub-todos
  },
  { timestamps }
);

export const Todo = mongoose.model("Todo", todoSchema);
```

_subtodos.model.js_

```javascript
import mongoose from "mongoose";

const subtodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subtodo = mongoose.model("Subtodo", subtodoSchema);
```
