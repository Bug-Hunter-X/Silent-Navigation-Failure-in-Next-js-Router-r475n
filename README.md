# Silent Navigation Failure in Next.js Router

This repository demonstrates a subtle bug in Next.js routing where navigation to a route works the first time but subsequent attempts fail silently.  The issue is likely related to how the router is handled within a component that's re-rendered.

## Bug Description

The `MyComponent` attempts to navigate to the `/about` page. The first click works correctly. However, subsequent clicks do not change the URL and fail to navigate to the '/about' page. The console shows no errors which makes debugging difficult.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the button to navigate to `/about`.
5. Click the button again.  Navigation will fail silently.

## Solution

The solution involves ensuring the `useRouter` hook is properly handled in situations where the component might be re-rendered.

## License

MIT