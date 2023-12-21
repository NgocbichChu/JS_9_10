const dsnv = new DSNV();
// const validation = new Validation();


getLocalStorage();

function getEle(id) {
  return document.getElementById(id);
}

function layThongTinNhanVien(isAdd) {
  // dom toi cai o lay value
  const _taiKhoan = getEle("tknv").value;
  const _hoTen = getEle("name").value;
  const _email = getEle("email").value;
  const _matKhau = getEle("password").value;
  const _ngayLam = getEle("datepicker").value;
  const _luongCB = getEle("luongCB").value;
  const _chucVu = getEle("chucvu").value;
  const _gioLam = getEle("gioLam").value;

  const nv = new nhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCB,
    _chucVu,
    _gioLam
  );
  //method tinh luong
  nv.tingLuong();
  nv.rank();

  return nv;
}

function renderUI(data) {
  var content = "";
  for (var i = 0; i < data.length; i++) {
    const nv = data[i];
    content += `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.xepLoai}</td>
                <td>
                 <button class="btn btn-primary" onclick ="handleEdit('${nv.taiKhoan}')">Edit </button>
                
                  <button class="btn btn-danger" onclick ="handleDelete('${nv.taiKhoan}')"> Delete </button>
                  
                </td>
                
                
            </tr>
        `;
  }
  getEle("tableDanhSach").innerHTML = content;
}

// //FLAG
// var isValid = true;

// //taikhoan
// if(isAdd){
//   isValid &= Validation.kiemTraRong(_taiKhoan,"tbTKNV", "(*)Vui long nhap tai khoan") && Validation.ktraTraDoDaiKiTu(_taiKhoan,"tbTKNV", "(*) Kí tự từ 4-6",4,6);
// }

/**
 * them nhan vien
 */
function handleThenNV() {
  const nv = layThongTinNhanVien(true);
  //them nv
  dsnv.themNV(nv);

  renderUI(dsnv.arr);

  setLocalStorage();
}
/**
 * xoa nhan vien
 */
function handleDelete(id) {
  dsnv.xoaNV(id);

  renderUI(dsnv.arr);

  setLocalStorage();
}

/**
 * edit
 */
function handleEdit(id){
 const nv = dsnv.layThongTinNV(id);
 

 if (nv){
  getEle("tknv").value = nv.taiKhoan;
  getEle("name").value = nv.hoTen;
  getEle("email").value = nv.email;
  getEle("password").value = nv.matKhau;
  getEle("datepicker").value = nv.ngayLam;
  getEle("luongCB").value = nv.luongCB;
  getEle("chucvu").value = nv.chucVu;
  getEle("gioLam").value = nv.gioLam;
 }

 getEle("btnCapNhat").style.display = "inline-block";
 getEle("btnThemNV").style.display = "none";

}
/**
 * cap nhat
 */
function handleCapNhat(){
  const nv = layThongTinNhanVien(true);
  dsnv.capNhatNV(nv);

  renderUI(dsnv.arr);

  setLocalStorage();
}




//lưu dữ liệu xuống local storage của browser
function setLocalStorage() {
  //convert dâta JSON => string
  const dataString = JSON.stringify(dsnv.arr);
  // lưu xuống localStorage
  localStorage.setItem("DSNV", dataString);
}

function getLocalStorage() {
  const dataString = localStorage.getItem("DSNV");
  // convert string => JSON

  if (!dataString) return; //note nka mấy keooo

  const dataJson = JSON.parse(dataString);
  // phục hôif dâta cho dsnv.arr
  dsnv.arr = dataJson;
  //render UI
  renderUI(dsnv.arr);
}
