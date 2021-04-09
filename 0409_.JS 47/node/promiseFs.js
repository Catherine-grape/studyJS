const fs = require('fs');
const exportsOBJ = {};

// function readFile(pathname) {
//   return new Promise((resolve, reject) => {
//     // 富媒体资源在获取内容的时候不能使用utf8格式
//     // 'sss.png'
//     let suffixReg = /\.[0-9a-zA-Z]+$/;
//     let suffix = suffixReg.exec(pathname) && suffixReg.exec(pathname)[1];
//     let encoding = 'utf8';
//     /^(PNG|GIF|JPG|JPEG|MP3|MP4)$/i.test(suffix) ? encoding = null:null;;

//     fs.readFile(pathname, encoding, (err, result) => {
//       if (err !== null) {
//         reject(err);
//         return;
//       }
//       resolve(result);
//     });
//   })
// };


//=>根据后缀名返回编码格式:UTF8/NULL
function suffixHandle(pathname) {
  let suffixREG = /\.([0-9a-zA-Z]+)$/,
    suffix = suffixREG.test(pathname) ? suffixREG.exec(pathname)[1] : '',
    encoding = 'utf8';
  /^(PNG|GIF|JPG|JPEG|WEBP|BMP|ICO|SVG|MP3|MP4|WAV|OGG|M3U8)$/i.test(suffix) ? encoding = null : null;
  return encoding;
};


//=>READ-FILE/READ-DIR/MK-DIR/RM-DIR/UN-LINK
['readFile', 'readdir', 'mkdir', 'rmdir', 'unlink'].forEach(item => {
  exportsOBJ[item] = function(pathname) {
    // pathname = path.resolve(pathname);
    return new Promise((resolve, reject) => {
      let encoding = suffixHandle(pathname),
        callback = (err, result) => {
          if (err !== null) {
            reject(err);
            return;
          }
          resolve(result);
        };
      if (item !== 'readFile') {
        encoding = callback;
        callback = null;
      }
      fs[item](pathname, encoding, callback);
    });
  }
});

module.exports = exportsOBJ