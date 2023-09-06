# Chrome Extension Template

This template provides a minimal setup for building a Chrome extension using React, TypeScript, Vite, and either TailwindCSS or Ant Design.

## Some points to note:

- Use [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) instead of [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc). When using SWC, HRM (Hot Module Replacement) doesn't work in the content script.
- [CRXJS](https://crxjs.dev/vite-plugin/) is used to manage HMR. Please note that the beta version of the package is used.
- Ant Design
  - Ant Design is used as the UI library, and it functions without any configuration in the popup.
  - To make Ant Design work in the shadow DOM without affecting the actual DOM, the `StyleProvider` from `@ant-design/cssinjs` is used to inject Ant Design CSS into the shadow DOM.
  - A common theme file is employed to provide the same theme to both the popup and the content script within the shadow DOM.
- Tailwind CSS
  - TailwindCSS is used for creating custom styles, and both Tailwind and [Twind](https://twind.style/) are used in the project.
  - Tailwind is utilized in the popup, while Twind is used in the content script within the shadow DOM.
  - Alternatively, Twind can be used in the popup as well, eliminating the need for explicit Tailwind usage. However, this may cause VSCode Tailwind IntelliSense to fail. Therefore, Tailwind is used in the popup to enable it.
  - Tailwind configuration is also applied to Twind in order to maintain synchronization between the two.
  - Additionally, when using only Tailwind, Tailwind classes is not be available in the shadow DOM, making Twind necessary for using Tailwind in the content script.
- Tailwind cannot be directly used alongside Ant Design because both frameworks establish some base styles that conflict with each other.
