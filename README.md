# e28886.tech

# TODO

[✅] Show user's name in dashboard
[X] Render with proper HTML formatting
[X] Show recent papers at top

# Commands

1. npm install better-sqlite3
2. const db = require("better-sqlite3")("database.db")
3. add the performance code
4. db.transaction(() => {
   db.prepare(`CREATE users TABLE if not there with schema`).run()
   })()
