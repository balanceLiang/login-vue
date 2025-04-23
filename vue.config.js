module.exports = {
    publicPath: './', // ← 使用相對路徑，以避免在 IIS 上路徑錯誤
    outputDir: 'dist', // ← 預設為 dist，可自訂
    assetsDir: 'static', // ← 靜態資源子資料夾
    productionSourceMap: false, // ← 避免打包 sourcemap 檔案
  }
  