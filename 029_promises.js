"use strict";
//	use strict. Required for es6
//  it is going to return a Promise andˀ this promise is going to contain a Status.  Passing in the resolve argument is saying what will happen when this funciton is successful.  Resolve eventhough its a argument is also acting as function. Returning as a key value pair.  The Promise is called performUpload.
let performUpload = function (imgStatus) {
    return new Promise((resolve) => {
        console.log(`Status: ${imgStatus}`);
        setTimeout(() => {
            resolve({ imgStatus: imgStatus });
        }, 1000);
    });
};
var upload;
var compress;
var transfer;
performUpload('uploading...')
    .then((res) => {
    upload = res;
    return performUpload('compressing...');
})
    .then((res) => {
    compress = res;
    return performUpload('transferring...');
})
    .then((res) => {
    transfer = res;
    return performUpload('Image upload completed.');
});
//# sourceMappingURL=029_promises.js.map