function receivesAFunction (spy) {
  spy();
}

function returnsANamedFunction() {
  return function named(){
    console.log("My name is Ali")
  }
}


function returnsAnAnonymousFunction () {
  return function() {
    console.log('anonymous');
  }
}
