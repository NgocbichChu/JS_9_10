function nhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam,_luongCB , _chucVu, _gioLam, _xepLoai) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCB = _luongCB;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.xepLoai = _xepLoai;
  this.tongLuong = 0;

  this.tingLuong = function () {
    var heSo =1;
    if(this.chucVu === 'Sếp'){
        heSo = 3;
    } else if (this.chucVu === 'Trưởng phòng') {
        heSo = 2;
    }

    this.tongLuong = Number(this.luongCB)*heSo ;
  };

  this.rank = function(){
    if (this.gioLam >= 192) {
      this.xepLoai += "Nhân viên Xuất sắc";
    } else if (this.gioLam >= 176) {
      this.xepLoai += "Nhân viên Giỏi";
    } else if (this.gioLam >= 160) {
      this.xepLoai += "Nhân viên Khá";
    } else if (this.gioLam < 160) {
      this.xepLoai += "Nhân viên trung bình";
    }

    return this.xepLoai;
}
}
