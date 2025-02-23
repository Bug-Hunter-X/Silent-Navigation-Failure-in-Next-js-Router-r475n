```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export default function MyComponent() {
  const router = useRouter();
  const hasNavigated = useRef(false);

  const handleClick = () => {
    router.push('/about');
    hasNavigated.current = true;
  };

  useEffect(() => {
    if (hasNavigated.current && router.route === '/') {
      // Reset the flag after a successful navigation
      hasNavigated.current = false;
    }
  }, [router.route]);

  return (
    <button onClick={handleClick}>Go to About</button>
  );
}

//pages/about.js
export default function About(){
  return <p>About Page</p>
}
```