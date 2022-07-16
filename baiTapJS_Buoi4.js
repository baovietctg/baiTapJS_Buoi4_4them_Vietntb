/**
 *! Bài tập 1 - xuất 3 số nguyên theo thứ tự tăng dần
 * Khối 1 - Input
 * Nhập 3 số nguyên
 * 
 * Khối 2:
 * B1: tạo biến và gán giá trị biến
 * - soNguyen1, soNguyen2, soNguyen3
 * B2: So sánh từng cặp số nguyên
 * B3: xác định thứ tự tăng dần của 3 số nguyên, thông báo kết quả
 * 
 * Khối 3 - Output
 * Xuất 3 số theo thứ tự tăng dần
 */

function sapXep() {
    var soNguyen1 = Number(document.getElementById("soNguyen1").value);
    var soNguyen2 = Number(document.getElementById("soNguyen2").value);
    var soNguyen3 = Number(document.getElementById("soNguyen3").value);
    var nhat = 0;
    var nhi = 0;
    var ba = 0;

    if (soNguyen1 > soNguyen2 && soNguyen2 > soNguyen3) {
        var nhat = soNguyen1;
        var nhi = soNguyen2;
        var ba = soNguyen3; // đúng
    } else if (soNguyen1 > soNguyen2 && soNguyen2 < soNguyen3 && soNguyen1 > soNguyen3) {
        var nhat = soNguyen1;
        var nhi = soNguyen3;
        var ba = soNguyen2; // đúng
    } else if (soNguyen1 < soNguyen2 && soNguyen2 > soNguyen3 && soNguyen1 < soNguyen3) {
        var nhat = soNguyen2;
        var nhi = soNguyen3;
        var ba = soNguyen1;
    } else if (soNguyen1 < soNguyen2 && soNguyen2 > soNguyen3 && soNguyen1 > soNguyen3) {
        var nhat = soNguyen2;
        var nhi = soNguyen1;
        var ba = soNguyen3;
    } else if (soNguyen3 > soNguyen1 && soNguyen3 > soNguyen2 && soNguyen1 > soNguyen2) {
        var nhat = soNguyen3;
        var nhi = soNguyen1;
        var ba = soNguyen2;
    } else if (soNguyen1 < soNguyen2 && soNguyen2 < soNguyen3) {
        var nhat = soNguyen3;
        var nhi = soNguyen2;
        var ba = soNguyen1;
    }
    var ketqua = String(ba) + ", " + String(nhi) + ", " + String(nhat)
    document.getElementById("txtResultbai1").innerHTML = ketqua;
}
document.getElementById("tinhBai1").onclick = sapXep;

/**
 *! Bài tập 2 - Gửi lời chào
 * Khối 1: Input
 * - Người sử dụng chọn: Bố, Mẹ, Anh trai, Em gái
 * 
 * Khối 2: 
 * B1: tạo biến và gán giá trị biến
 * - doiTuong : đối tượng sử dụng máy tính: Bố (B), Mẹ (M), Anh Trai (A), Em gái (E)
 * B2: Dùng lệnh if else để xác định lời chào phù hợp cho từng đối tượng sử dụng máy
 * B3: Thông báo lời chào
 * 
 * Khối 3: Output
 * Gửi lời chào phù hợp với người sử dụng máy tính
 * 
 */

function loiChao() {
    var doiTuong = document.getElementById("chonThanhVien").value;
    switch (doiTuong) {
        case "B":
            var loiChao = "Xin chào Bố, chúc bố lâu bị lộ!";
            break;
        case "M":
            var loiChao = "Xin chào Mẹ!";
            break;
        case "A":
            var loiChao = "Xin chào Anh trai!";
            break;
        case "E":
            var loiChao = "Xin chào Em gái!";
            break;
        default:
            var loiChao = "Xin chào người ẩn danh"
            break;
    }
    document.getElementById("txtResultbai2").innerHTML = loiChao;
}
document.getElementById("tinhBai2").onclick = loiChao;

/**
 *! Bài tập 3 - tính sổ nguyên lẻ, số nguyên chẵn trong 3 số nguyên nhập vào
 * Khối 1 - Input
 * - Nhập 3 số nguyên
 * 
 * Khối 2
 * B1: tạo biến và gán giá trị cho biến
 * - soNguyen1, soNguyen2, soNguyen3
 * B2: xác định từng số nguyên là số lẻ hay số chẵn
 * B3: tổng hợp lại có bao nhiêu số lẻ, bao nhiêu số chẵn, thông báo lên giao diện
 *  
 * 
 * 
 * Khối 3 - Output
 * Thông báo trong 3 số nguyên có bao nhiêu số lẻ, số chẵn
 */

// function soChanLe() {
//     var so1 = Number(document.getElementById("soNguyen1").value);
//     var so2 = Number(document.getElementById("soNguyen2").value);
//     var so3 = Number(document.getElementById("soNguyen3").value);
//     var count = 0;

//         so1 % 2 == 0 ? count++ : count;
//         so2 % 2 == 0 ? count++ : count;
//         so3 % 2 == 0 ? count++ : count;
//         document.getElementById('txtResultbai3').innerHTML = `Có ${count} số chẵn và ${3 - count
//             } số lẻ`;
// }
// document.getElementById("tinhBai3").onclick = soChanLe;

// function chanle() {
//     var so1 = Number(document.getElementById("soNguyen1").value);
//     var so2 = Number(document.getElementById("soNguyen2").value);
//     var so3 = Number(document.getElementById("soNguyen3").value);
//     var count = 0;

//     so1 % 2 == 0 ? count++ : count;
//     so2 % 2 == 0 ? count++ : count;
//     so3 % 2 == 0 ? count++ : count;
//     document.getElementById('txtResultbai3').innerHTML = `Có ${count} số chẵn và ${3 - count
//         } số lẻ`;
// }
// document.getElementById("tinhBai3").onclick = chanle;


function chanle() {
    var so1 = Number(document.getElementById("so1").value);
    var so2 = Number(document.getElementById("so2").value);
    var so3 = Number(document.getElementById("so3").value);
    var count = 0;

    so1 % 2 == 0 ? count++ : count; //viết gọn của if....els
    so2 % 2 == 0 ? count++ : count;
    so3 % 2 == 0 ? count++ : count;
    document.getElementById("txtResultbai3").innerHTML = `Có ${count} số chẵn và ${3 - count
        } số lẻ`;
}
document.getElementById("tinhBai3").onclick = chanle;

/**
 *! Bài tập 4 - Xác định loại hình tam giác
 * Khối 1 - Input
 * - Nhập vào chiều dài 3 cạnh của hình tam giác
 * 
 * Khối 2:
 * B1: Tạo biến và gán giá trị cho biến
 * - canhA, canhB, canhC (chiều dài cạnh A, cạnh B, cạnh C)
 * B2: Xác định loại tam giác thông qua mối quan hệ chiều dài của 3 cạnh
 * - Nếu canhA == canhB và canhB == canhC => hình tam giác đều
 * - Nếu canhA == canhB hoặc canhB == canhC hoặc canh A == canhC => tam giác cân
 * - Nếu có bình phương 1 cạnh bằng tổng bình phương 2 cạnh còn lại => tam giác vuông
 * 
 * Khối 3 - Output
 * - Loại tam giác (thường, cân, đều, vuông) 
 */


function hinhTamGiac() {
    var canhA = Number(document.getElementById("canhA").value);
    var canhB = Number(document.getElementById("canhB").value);
    var canhC = Number(document.getElementById("canhC").value);
    var ketqua = "";
    if (canhA == canhB && canhB == canhC) {
        ketqua = "Hình tam giác đều";
    } else if (canhA == canhB || canhB == canhC || canhA == canhC) {
        ketqua = "Hình tam giác cân ";
    } else if ((canhA * canhA == canhB * canhB + canhC * canhC) || (canhB * canhB == canhA * canhA + canhC * canhC) || (canhC * canhC == canhB * canhB + canhA * canhA)) {
        ketqua = "Hình tam giác vuông";
    } else {
        ketqua = "Hình tam giác khác";
    }
    document.getElementById("txtResultbai4").innerHTML = ketqua;
}
document.getElementById("tinhBai4").onclick = hinhTamGiac;

/**
 *! Bài tập thêm số 1 - tìm ngày tháng năm của ngày trước và sau
 * Khối 1 - Input
 * Nhập ngày, Nhập tháng, Nhập năm
 * 
 * Khối 2:
 * B1: tạo biến và gán giá trị biến
 * - ngayNhap, thangNhap, namNhap: ngày nhập vào, tháng nhập vào, năm nhập vào
 * - ngayTruoc, ngaySau, thangTruoc,thangSau, namTruoc, namSau: ngày Hôm qua, ngày Mai....
 * B2: - Kiểm tra: có phải ngày cuối tháng/cuối năm và ngày đầu tháng/đầu năm (lưu ý tháng 2 có 28 ngày) 
 * B3: tính ngayTruoc - ngaySau; thangTruoc - thangSau, namTruoc - namSau
 * 
 * Khối 3 - Output
 * Hiển thị ngày Hôm qua và hiển thị ngày Mai
 */

function tinhNgayTruoc() {
    var ngay = Number(document.getElementById("ngay").value);
    var thang = Number(document.getElementById("thang").value);
    var nam = Number(document.getElementById("nam").value);
    var ngayTruoc = 0;
    var thangTruoc = 0;
    var namTruoc = 0;
    var ngaySau = 0;
    var thangSau = 0;
    var namSau = 0;

    if (ngay == 1) {
        if (thang == 1) {
            ngayTruoc = 31;
            thangTruoc = 12;
            namTruoc = nam - 1
        } else if (thang == 2 || thang == 4 || thang == 6 || thang == 8 || thang == 9 || thang == 11) {
            ngayTruoc = 31;
            thangTruoc = thang - 1;
            namTruoc = nam;
        } else if (thang == 5 || thang == 7 || thang == 10 || thang == 12) {
            ngayTruoc = 30;
            thangTruoc = thang - 1;
            namTruoc = nam;
        } else {
            ngayTruoc = 28;
            thangTruoc = thang - 1;
            namTruoc = nam;
        }
    } else if (ngay == 31) {
        if (thang == 2 || thang == 4 || thang == 6 || thang == 9 || thang == 11) {
            ngayTruoc = "Vui lòng chọn lại Ngày hoặc Tháng";
            thangTruoc = "";
            namTruoc = "Tháng " + thang + " không có 31 ngày";
        } else {
            ngayTruoc = ngay - 1;
            thangTruoc = thang;
            namTruoc = nam;
        }
    } else {
        ngayTruoc = ngay - 1;
        thangTruoc = thang;
        namTruoc = nam;
    }

    console.log(ngayTruoc);
    document.getElementById("txtNgayHomQua").innerHTML = ngayTruoc + "/" + thangTruoc + "/" + namTruoc;
}
document.getElementById("tinhNgayHomQua").onclick = tinhNgayTruoc;


function tinhNgaySau() {
    var ngay = Number(document.getElementById("ngay").value);
    var thang = Number(document.getElementById("thang").value);
    var nam = Number(document.getElementById("nam").value);
    var ngayTruoc = 0;
    var thangTruoc = 0;
    var namTruoc = 0;
    var ngaySau = 0;
    var thangSau = 0;
    var namSau = 0;

    if (thang == 2) {
        if (ngay == 29 || ngay == 30 || ngay == 31) {
            ngaySau = "Vui lòng chọn lại Ngày hoặc Tháng";
            thangSau = "";
            namSau = "Tháng " + thang + " không có ngày này";
        } else if (ngay == 28) {
            ngaySau = 1;
            thangSau = thang + 1;
            namSau = nam;
        } else {
            ngaySau = ngay + 1;
            thangSau = thang;
            namSau = nam;
        }
    } else if (ngay == 31) {
        if (thang == 12) {
            ngaySau = 1;
            thangSau = 1;
            namSau = nam + 1
        } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
            ngaySau = "Vui lòng chọn lại Ngày hoặc Tháng";
            thangSau = "";
            namSau = "Tháng " + thang + " không có 31 ngày";
        } else if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10) {
            ngaySau = 1;
            thangSau = thang + 1;
            namSau = nam;
        }
    } else if (ngay == 30) {
        if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
            ngaySau = 1;
            thangSau = thang + 1;
            namSau = nam;
        } else {
            ngaySau = ngay + 1;
            thangSau = thang;
            namSau = nam;
        }
    } else {
        ngaySau = ngay + 1;
        thangSau = thang;
        namSau = nam;
    }
    document.getElementById("txtNgayHomQua").innerHTML = ngaySau + "/" + thangSau + "/" + namSau;
}
document.getElementById("tinhNgaySau").onclick = tinhNgaySau;


/**
 *! Bài tập thêm số 2 - tính số ngày của một tháng
 * Khối 1 - Input
 * Nhập tháng, Nhập năm
 * 
 * Khối 2:
 * B1: tạo biến và gán giá trị biến
 * - month, year:  tháng nhập vào, năm nhập vào
 * B2:
 * - Kiểm tra: năm nhập vào có phải năm nhuận, nếu là năm nhuận => tháng 2 có 29 ngày 
 * - Xác định tháng được người dùng nhập vào
 * B3: tính số ngày trong tháng
 * B4: thông báo kết quả
 * 
 * Khối 3 - Output
 * Hiển thị số ngày trong tháng
 */

function tinhSoNgay() {
    var month = Number(document.getElementById("month").value);
    var year = Number(document.getElementById("year").value);
    var soNgay = 0;
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        if (month == 2) {
            soNgay = 29;
        } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            soNgay = 31;
        } else {
            soNgay = 30;
        }
    } else {
        if (month == 2) {
            soNgay = 28;
        } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            soNgay = 31;
        } else {
            soNgay = 30;
        }
    }
    document.getElementById("txtSoNgay").innerHTML = "Tháng " + month + " năm " + year + " có " + soNgay + " ngày";
}
document.getElementById("tinhNgay").onclick = tinhSoNgay;


/**
*! Bài tập thêm số 3 - cách đọc 1 số có 3 chữ số
* Khối 1 - Input
* Nhập số nguyên có 3 chữ số
* 
* Khối 2:
* B1: tạo biến và gán giá trị biến
* - num: số có 3 chữ số
* B2:
* - tính hàng trăm, hàng chục, hàng đơn vị
* + hangTram = Math.floor(num / 100)
* + hangChuc = Math.floor(num / 10)
* + hangDonVi = num % 10
* B3: Sử dụng switch case để hiển thị cách đọc số:
* B4: thông báo kết quả
* 
* Khối 3 - Output
* Hiển thị cách đọc số có 3 chữ số đã nhập
*/

function docSo() {
    var num = Number(document.getElementById("soBaChuSo").value);
    var hangTram = Math.floor(num / 100);
    var hangChuc = Math.floor((num % 100) / 10);
    var hangDonVi = num % 10;
    var docHangTram = "";
    var docHangChuc = "";
    var docHangDV = "";
    console.log(hangTram, hangChuc, hangDonVi);
    switch (hangTram) {
        case 1:
            docHangTram = "Một";
            break;
        case 2:
            docHangTram = "Hai";
            break;
        case 3:
            docHangTram = "Ba";
            break;
        case 4:
            docHangTram = "Bốn";
            break;
        case 5:
            docHangTram = "Năm";
            break;
        case 6:
            docHangTram = "Sáu";
            break;
        case 7:
            docHangTram = "Bảy";
            break;
        case 8:
            docHangTram = "Tám";
            break;
        case 9:
            docHangTram = "Chín";
            break;
        default:
            alert("Nhập số có 3 chữ số!!!")
            break;
    }
}
document.getElementById("docSo").onclick = docSo;



