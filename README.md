# ReactJS Indonesia Website: Remix

Community website of ReactJS Indonesia, built using [Remix](https://remix.run).

Links:

- URL: [remix.reactjs.id](https://remix.reactjs.id) (Coming Soon)
- UI Design: <https://figma.com/design/gMo6kSyNTFRI4NE7ZRLMIF/%E2%9A%9B%EF%B8%8F-React-ID-Design-Draft?node-id=497-32376&t=vqBqn1CzlgbJ4peJ-1>
- Brand Design: <https://figma.com/design/WvZuXYc09qZQJW0DQ7hxM2/ReactJS-ID-General-Design-Assets>

## References

- 📖 [Remix docs](https://remix.run/docs)
- [shadcn UI](https://ui.shadcn.com)

## Development

Run the dev server:

```shellscript
bun dev
```

## Deployment

First, build your app for production:

```sh
bun build
```

Then run the app in production mode:

```sh
bun start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `bun build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
