function DSNV(){
    this.arr =[];

    this.themNV = function(nv){
        this.arr.push(nv);
    };
    this.timViTriNV = function (id) {
        /**
         * Giải thuật tìm vị trí:
         * 0. tạo biêns index = -1;
         * 1. Duyệt mảng arr
         *      1.1 phần tử trong mảng nv = arr[i]
         *      1.2 nếu nv.taiKhoan === id
         *      1.3 nếu đúng thì index =i
         *      1.4 Thoát vòng lặp break
         *  2. tra ve index
         */
    
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
          const nv = this.arr[i];
          if (nv.taiKhoan === id) {
            index = i;
            break;
          }
        }
        return index;
      };

    this.xoaNV = function(id){
        const index = this.timViTriNV(id);
        if (index !== -1) {
          this.arr.splice(index, 1);
        }
    };

    this.layThongTinNV = function(id){
        const index  = this.timViTriNV(id);

        if (index !== -1){
            return this.arr[index];
        }
        return null;
    }

    this.capNhatNV = function(nv){
      const index = this.timViTriNV(nv.taiKhoan);
      if (index !== -1){
         this.arr[index] = nv;
    }
    };
    this.searchNV = function(){};
}