function addFruits(...fruits){
// if our arg is null return "nothing"
// if it has input, add them
    if (fruits.length !== 0){
      var fruitsAdd = 0;
      for (i = 0; i < fruits.length; i++)
        fruitsAdd += fruits[i]
        return fruitsAdd;
    }
    else return ("nothing")
  }
  console.log(addFruits());