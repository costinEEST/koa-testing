- Commands:

```bash
tsc --init
```

```bash
curl --request POST 'localhost:7654/games' \
--header 'Content-Type: application/json' \
--data-raw '{
    "game": "World of Warships"
}'
```

### TODO:

- Can I replace [supertest](https://www.npmjs.com/package/supertest) with [undici](https://www.npmjs.com/package/undici) or [got](https://www.npmjs.com/package/got) ?
