// 全局类型声明
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

// 确保 Chrome 类型可用
/// <reference types="@types/chrome" />

// 全局 Chrome 对象声明
declare const chrome: typeof chrome;
