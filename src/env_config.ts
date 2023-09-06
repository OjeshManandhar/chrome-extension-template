/**
 * Ignore the "Property 'env' does not exist on type 'ImportMeta'." error.
 * This can be resolved by importing 'vite/client' here.
 * But this is cause error in runtime so ignoring that error for now,
 * until a fixed is found.,
 */

const envVariables = {
  test: {
    key: import.meta.env.VITE_TEST_KEY,
  },
} as const;

export default envVariables;
