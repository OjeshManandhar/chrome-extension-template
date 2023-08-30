import 'vite/client';

const envVariables = {
  env: import.meta.env.ENV,
  version: import.meta.env.VERSION,

  test: {
    testKey: import.meta.env.TEST_KEY,
    viteTestKey: import.meta.env.VITE_TEST_KEY,
  },
} as const;

export default envVariables;
