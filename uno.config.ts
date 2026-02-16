import { defineConfig, transformerDirectives, presetUno, presetIcons } from "unocss";
import { presetTheme } from "unocss-preset-theme";
const themes = {
  dark: {
    colors: {
      // 主色 / 强调色   
      primary: "#569cd6",      // 亮蓝，用于链接、主按钮等
      accent: "#ffd700",       // 亮黄，装饰 / 高亮
      // 背景
      bg: "#2b2b2b",           // 主背景
      modal: "#3c3f41",        // 次背景（卡片、代码块、弹窗）
      // 文本
      text: "#d4d4d4",         // 正文
      "text-bright": "#ffffff", // 标题
      // 灰度
      gray: "#808080",         // 次要文本（日期、备注）
      border: "#4a4a4a",       // 边框 / 分割线
      // 选中
      selection: "#3c3f41",    // 选中文本背景（与次背景协调）
      // 语法高亮（保持原字段名，按 Ashik 风格映射）
      comment: "#6a9955",
      string: "#ce9178",
      keyword: "#569cd6",
      function: "#dcdcaa",
      variable: "#9cdcfe",
      type: "#4ec9b0",
      number: "#b5cea8",
      operator: "#d4d4d4",
      constant: "#4fc1ff",
    },
  } as any,
  light: {
    colors: {
      primary: "#569cd6",
      text: "#2b2b2b",
      bg: "#ffffff",
      modal: "#f3f3f3",
      gray: "#808080",
      border: "#d4d4d4",
      selection: "#d4d4d4",
    },
  },
};
export default defineConfig({
  transformers: [transformerDirectives({ enforce: "pre" })],
  presets: [
    presetUno({
      dark: "class",      // 保持 dark mode 为 class 方式
    }),
    presetTheme({
      theme: {
        dark: themes.dark,
      },
    }),
    presetIcons({
      autoInstall: true,
    }),
  ],
  theme: themes.dark,  // 默认主题使用 dark
  content: {
    filesystem: ["src/**/*.tsx", "src/**/*.astro"],
  }
});
