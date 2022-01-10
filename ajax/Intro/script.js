//creating Ajax
// first Method Using XMLHttpRequest
const request = new XMLHttpRequest();
request.onreadystatechange = function () { //onreadystatechange is an event listner
  if (this.readyState === 4 && this.status === 200) {
    console.log(this);
  }
};
request.open("GET", "./sample.txt");
request.send();

//second Method Using fetch()
fetch("./sample.txt")
  .then(resp => (resp))
  .then(data1 => console.log(data1))


  // fetch("./sample.txt").then((response) => {
  //   console.log(response);
  // });