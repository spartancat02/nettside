# nettside

A small static website made to keep score in your ping pong games. It is served by Nginx in the Docker image.

## Docker deployment

The GitHub Actions workflow builds the image and publishes it to GitHub Container Registry on pushes. It publishes the `latest` tag from the repository's default branch. The workflow requires a repository Actions secret named `GHCR_PAT`, configured with permission to publish packages.

On the server, place `compose.yaml` in a directory and start the service:

```sh
docker compose up -d
```

The site is available on port `8080` by default. To change the port, set `WEB_PORT` in the environment or in a Compose `.env` file. To use a different image, set `GHCR_IMAGE`.

The Compose file defaults to `ghcr.io/spartancat02/nettside:latest`. Public packages can be pulled without logging in. For a private package, log in to GHCR on the server with a token that has `read:packages` permission before starting Compose:

```sh
docker login ghcr.io --username spartancat02
```

Docker prompts for the token; do not put it in the Compose file or commit it to the repository. To deploy an updated image, run `docker compose up -d` again.