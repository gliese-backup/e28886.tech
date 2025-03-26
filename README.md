# e28886.tech

# TODO

[X] Bun support
[X] AI Images for new papers

# Planned

1. Implement bun sqlite: https://bun.sh/docs/api/sqlite
2. In our paper navigation buttons (moving between prev and next) stop next for the last paper
3. Add comments functionality

# Commands

1. npm install better-sqlite3
2. const db = require("better-sqlite3")("database.db")
3. add the performance code
4. db.transaction(() => {
   db.prepare(`CREATE users TABLE if not there with schema`).run()
   })()
