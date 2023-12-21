function Validation() {
    this.kiemTraRong = function (value, spanId, mess) {
      var isValid = true;
      if (value === "") {
        // show error
        getEle(spanId).innerHTML = mess;
        return false;
      }
      getEle(spanId).innerHTML = "";
      return true;
    };
    
    this.ktraTraDoDaiKiTu = function (value, spanId, mess, min, max) {
        if (value.trim().length >= min && value.trim().length <= max) {
          //true
          getEle(spanId).innerHTML = "";
          return true;
        }
        //false
        getEle(spanId).innerHTML = mess;
        return false;
      };
}

