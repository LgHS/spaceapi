# SpaceAPI worker for the lghs

[SpaceAPI](http://spaceapi.net/) for our space is live at [lghs.be/spaceapi](https://lghs.be/spaceapi).

## Dependencies

```sh
cargo install wrangler --features sys-openssl
```

## Deploying

```sh
wrangler login # only required once
wrangler publish # -e production
```
