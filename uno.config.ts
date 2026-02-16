import { defineConfig, transformerDirectives, presetUno, presetIcons } from "unocss";
import { presetTheme } from "unocss-preset-theme";

const themes = {
  dark: {
    colors: {
      // 基础背景色
      primary: "#75BFFF",      // 链接色（亮蓝）
      text: "#FFFFFF",         // 主标题/正文
      icon: "#FFFFFF",         // 图标背景（白色）
      bg: "#202124",           // 主背景色
      modal: "#28292d",        // 卡片/模块背景
      
      // 文字颜色
      gray: "#A0A0A0",         // 次要文字/日期
      border: "#3A3C40",       // 边框/分隔线
      
      // 代码块高亮色
      selection: "#28292d",    // 选中背景
      comment: "#6A9955",      // 注释（推测）
      string: "#E6C229",       // 字符串值/URL
      keyword: "#D186FF",      // 键名/属性名
      function: "#75BFFF",     // 函数名（推测）
      variable: "#5DADE2",     // 变量（推测）
      type: "#5DADE2",         // 布尔值/特殊关键字
      number: "#E6C229",       // 数字（推测）
      operator: "#CCCCCC",     // 标点符号/结构符
      constant: "#E6C229",     // 常量（推测）
      
      // 其他UI元素
      accent: "#FF9800",       // 按钮/强调色
      iconFg: "#2196F3",       // 图标前景色
    },
  } as any,
  light: {
    colors: {
      primary: "#75BFFF",
      text: "#000",
      icon: "rgba(116,115,115,1)",
      bg: "#fff",
      modal: "#fff",
      gray: "#f5f5f5",
      border: "#e5e5e5",
      selection: "#e5e5e5",
    },
  },
};

export default defineConfig({
  transformers: [transformerDirectives({ enforce: "pre" })],
  presets: [
    presetUno({
      dark: "class",  // 保持 class 模式，确保 dark mode 生效
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
  theme: themes.dark,  // 使用深色主题作为默认
  content: {
    filesystem: ["src/**/*.tsx", "src/**/*.astro"],  // 保持扫描路径不变
  }
});
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
