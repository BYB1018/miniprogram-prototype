const fs = require('fs');
const path = require('path');

// 创建目录结构
const dirs = ['pages'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log(`Created directory: ${dir}`);
  }
});

// 文件内容映射
const files = {
  'index.html': `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta
</rewritten_file> 