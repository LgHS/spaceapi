# SpaceAPI worker for the lghs

[SpaceAPI](http://spaceapi.net/) for our space is live at [lghs.be/spaceapi](https://lghs.be/spaceapi).

Worker is automatically deployed on push in the `main` branch, feel free to submit PRs.

## Dependencies

```sh
cargo install wrangler --features sys-openssl
```

## Deploying

```sh
wrangler login # only required once
wrangler publish # -e production
```
