function receivesAFunction(spy){
  return spy();
}
function returnsANamedFunction(){
  return function beforeAll() {
    return "before all";
  };
}
function returnsAnAnonymousFunction(){
  return function() {
    return "before all";
  };
}
