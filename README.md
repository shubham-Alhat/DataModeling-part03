## Data modeling

### Data modeling using mongoose.

1. Go to **Github codespaces. choose express environment.**
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
