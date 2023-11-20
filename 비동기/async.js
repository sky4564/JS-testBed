// HTTP 통신 동작을 모방한 코드
function fetchItems() {
  return new Promise(function (resolve, reject) {
    
    setTimeout(function () {
      var items = [1, 2, 3];
      resolve(items);
    }, 3000);

  });
}



async function logItem() {
    let item = await fetchItems()
    console.log(item)
}

logItem()

