const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

// searchButton.addEventListener('click', function (e) {
// 	if(window.innerWidth < 576) {
// 		e.preventDefault();
// 		searchForm.classList.toggle('show');
// 		if(searchForm.classList.contains('show')) {
// 			searchButtonIcon.classList.replace('bx-search', 'bx-x');
// 		} else {
// 			searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 		}
// 	}
// })





// if(window.innerWidth < 768) {
// 	sidebar.classList.add('hide');
// } else if(window.innerWidth > 576) {
// 	searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 	searchForm.classList.remove('show');
// }


// window.addEventListener('resize', function () {
// 	if(this.innerWidth > 576) {
// 		searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 		searchForm.classList.remove('show');
// 	}
// })



// const switchMode = document.getElementById('switch-mode');

// switchMode.addEventListener('change', function () {
// 	if(this.checked) {
// 		document.body.classList.add('dark');
// 	} else {
// 		document.body.classList.remove('dark');
// 	}
// })

// function showMain(mainId) {
// 	// remove active class from all mains
	
// 	const mains = document.getElementsByTagName("main");
// 	for (let i = 0; i < mains.length; i++) {
// 	  mains[i].classList.remove("active");
// 	}
  
// 	// add active class to the main with the specified ID
// 	const main = document.getElementById(mainId);
// 	main.classList.add("active");
//   }

// CHUYEN TRANG TRONG MAIN CHINH
window.onload = function() {
	var links = document.querySelectorAll('#sidebar li');
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function() {
			var current = document.getElementsByClassName('active');
			current[0].classList.remove('active');
			this.classList.add('active');
			var target = this.querySelector('a').getAttribute('href').replace('#', '');
			var pages = document.querySelectorAll('main > div');
			for (var j = 0; j < pages.length; j++) {
				if (pages[j].classList.contains(target)) {
					pages[j].classList.add('active');
				} else {
					pages[j].classList.remove('active');
				}
			}
		});
	}
};






// DATAIL
  // Get the modal
  var modal = document.getElementById("detail");
  var modal_1 = document.getElementById("detail-ttdh");
  // Get the button that opens the modal
//   var btn = document.getElementsById("btn__chitiet-ddh")[0];

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close_chitiet")[0];
  // When the user clicks the button, open the modal 
//   var tableRows = document.querySelectorAll("#tbl-sp  tbody tr");

function openProgress(row){
	getProgress(row);
	modal_1.style.display = "block";
}
function closeProgress(){
	modal_1.style.display ="none";
	resetProgress();
}

  function openDetail() {
	modal.style.display = "block";
}

  // When the user clicks on <span> (x), close the modal
	function closeDetail() {
		modal.style.display = "none";
		const liElements  = document.querySelectorAll("#myList li");
		if(liElements){
		liElements.forEach(li => {
			const childElements = li.querySelectorAll('*');
			childElements.forEach(child => {
				// console.log(child.id);
				if (child.id) {
					// if (child.id === "input__roleID" || child.id === "input__status") {
						if (child.tagName === "SELECT"){
						document.getElementById(child.id).value="0";
					}else{
						document.getElementById(child.id).value="";
					}
					document.getElementById(child.id).readOnly=false;
			}
		});
		});
		}
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			const liElements  = document.querySelectorAll("#myList li");
			if(liElements){
			liElements.forEach(li => {
			const childElements = li.querySelectorAll('*');
			childElements.forEach(child => {
				// console.log(child.id);
				if (child.id) {
					// if (child.id === "input__roleID" || child.id === "input__status") {
						if (child.tagName === "SELECT"){
						document.getElementById(child.id).value="0";
						}else{
						document.getElementById(child.id).value="";
						}
						document.getElementById(child.id).readOnly=false;
			}
			});
			});
		}
		}else if(event.target == modal_1) {
			modal_1.style.display = "none";
			resetProgress();
		}
	}
//   ====================

// const username = document.getElementById('username').value;
// const password = document.getElementById('password').value;

// // Thiết lập cookie lưu trữ thông tin người dùng
// Cookies.set('username', username, { expires: 7 });

// // Lấy giá trị của cookie "username"
// username = Cookies.get('username');

// // Kiểm tra xem cookie có tồn tại không
// if (user_name) {
//   // Nếu cookie tồn tại, cập nhật giao diện trang web để hiển thị tên người dùng
//   document.getElementById('welcome-message').innerHTML = `Chào mừng ${username} đến với trang web của chúng tôi!`;
// } else {
//   // Nếu cookie không tồn tại, yêu cầu người dùng đăng nhập hoặc đăng ký
//   alert('Vui lòng đăng nhập hoặc đăng ký để sử dụng các tính năng của trang web!');
// }

const tableRows = document.querySelectorAll(".table-data tbody tr");

//DDH
function getIdDDH(btn){
	// btn = document.getElementById("btn__chitiet-ddh");
	var row = btn.parentNode.parentNode;
	var td = row.getElementsByTagName("td");
	document.getElementById("id_ddh").innerHTML=td[0].innerText;
	openDetail(btn);
}

function getIdDDH_progress(btn){
	// btn = document.getElementById("btn__chitiet-ddh");
	var row = btn.parentNode.parentNode;
	var td = row.getElementsByTagName("td");
	document.getElementById("id_ddh_progress").innerHTML=td[0].innerText;	
	openProgress(row);
}

function getDetailInfoAcc(){
	var tableRows = document.querySelectorAll(".table-data tbody tr");
// Duyệt qua các thẻ tr và thiết lập sự kiện click cho nút "Xóa" của mỗi thẻ tr
for (var i = 0; i < tableRows.length; i++) {
  var detail_btn = tableRows[i].querySelector(".btn__chitiet");
  detail_btn.addEventListener("click", function() {
    // Lấy dữ cliệu từ các ô td của thẻ tr được click
    var cells = this.parentNode.parentNode.getElementsByTagName("td");
	// Lấy id của phần tử con của ul
	const liElements  = document.querySelectorAll("#myList li");
	var ids=[];
	liElements.forEach(li => {
		const childElements = li.querySelectorAll('*');
		childElements.forEach(child => {
		  if (child.id) {
			ids.push(child.id);
			console.log(child.id)
			}
		});
	  });
	  	if(ids[0] === "input__userID"){
			var length = (cells.length);
			var id_user = cells[length-2].innerText;
			var name_user = cells[1].innerText;
			var phone_user = cells[length-3].innerText;
			document.getElementById("input__userID").value = id_user;
			document.getElementById("input__userName").value = name_user;
			document.getElementById("input__phone").value = phone_user;
			openDetail();
		}else{
			var id_bh=cells[0].innerText;
			var id_sp = cells[1].innerText;
			document.getElementById("input__IDbh").value = id_bh;
			document.getElementById("input__IDproduct").value = id_sp;
			openDetail();
		}
	});
}
}

function getDetailInfo(){
	// Duyệt qua các thẻ tr và thiết lập sự kiện click cho nút "Xóa" của mỗi thẻ tr
	for (var i = 0; i < tableRows.length; i++) {
	  var change_btn = tableRows[i].querySelector(".btn__chitiet");
	  change_btn.addEventListener("click", function() {
		// Lấy dữ cliệu từ các ô td của thẻ tr được click
		var cells = this.parentNode.parentNode.getElementsByTagName("td");
		// Lấy id của phần tử con của ul
		const liElements  = document.querySelectorAll("#myList li");
		var count = 0;
		liElements.forEach(li => {
			const childElements = li.querySelectorAll('*');
			childElements.forEach(child => {
			  if (child.id) {
				console.log(count, child.id)
				if(child.id !== "input__img"){
					var tmp = cells[count].innerText;
					document.getElementById(child.id).value=tmp;
				}
				count++;
			  }
			});
		  });
		openDetail();
		});
	}
	}


// LAY ID USER CHO DIALOG

// const deleteButtons = document.querySelectorAll(".btn__xoa");
const confirmDialog_kh = document.getElementById('confirmDialog_');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');
for (let i = 0; i < tableRows.length; i++) {
  let row = tableRows[i];
  let delBtn = row.querySelector(".btn__xoa");
  if(delBtn){
	delBtn.addEventListener("click", function() {
		let cells = row.getElementsByTagName("td");
		let id = cells[0].innerText;
		document.getElementById("id_").innerHTML = id;
		if(confirmDialog_kh){
		confirmDialog_kh.style.display = 'block';
		confirmBtn.addEventListener('click', () => {
		  row.remove();
		  confirmDialog_kh.style.display = 'none';
		});
		cancelBtn.addEventListener('click', () => {
		  confirmDialog_kh.style.display = 'none';
		});
	}
	  });
  }
}

function selectBtn(btn) {
	var btnID = btn.id;
	var row = btn.parentNode.parentNode.parentNode;
	var ttddh = row.getElementsByClassName("ttddh")[0];
	var ttddh_value = ttddh.innerHTML;
	if (btnID === "toggle-green"){
	// Lấy dòng chứa nút được click
	// var row = btn.parentNode.parentNode.parentNode;
	// Thay đổi màu của dòng
	
	row.style.backgroundColor = "var(--green-btnxh)";

	// Thay đổi nút thành thẻ p có nội dung "Đã chọn"
	var edit = btn.parentNode;
	var p = document.createElement("p");
	p.innerHTML = "Đã xác nhận";
	btn.parentNode.parentNode.replaceChild(p, edit);
	ttddh_value.innerHTML ='2';
	}
	else{
		row.style.backgroundColor = "var(--red-btnh)";

	// Thay đổi nút thành thẻ p có nội dung "Đã chọn"
	var edit = btn.parentNode;
	var p = document.createElement("p");
	p.innerHTML = "Đã hủy";
	btn.parentNode.parentNode.replaceChild(p, edit);
	}
	getProgress(row);
}
function selectStatus(row) {
		var ttddh = row.getElementsByClassName("ttddh")[0];
		var ttddh_value = ttddh.innerHTML;
		var edit = ttddh.parentNode.querySelector(".btns");
		var p = document.createElement("p");
		console.log(ttddh_value);
		if ( ttddh_value == 2){
			row.style.backgroundColor = "var(--green-btnxh)";	
			p.innerHTML = "Đã xác nhận";
			ttddh.parentNode.replaceChild(p, edit);
		}
		else if(ttddh_value == 5){
			row.style.backgroundColor = "var(--red-btnh)";
			p.innerHTML = "Đã hủy";
			ttddh.parentNode.replaceChild(p, edit);
		}else if(ttddh_value == 3){
			row.style.backgroundColor = "var(--orange-btnvc)";
			p.innerHTML = "Vận chuyển";
			ttddh.parentNode.replaceChild(p, edit);
		}
		else if(ttddh_value == 4){
			row.style.backgroundColor = "var(--yellow-btndg)";
			p.innerHTML = "Đã giao";
			ttddh.parentNode.replaceChild(p, edit);
		}
		getProgress(row);
}

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const li_huy = document.querySelectorAll("#step li.li");

function resetProgress() {
	one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
	five.classList.remove("active");
	li_huy.forEach(element => {
        element.classList.remove("huy");
    	});
}	
function getProgress(row){
	if(row.style.backgroundColor === "var(--green-btnxh)"){
			one.classList.add("active");
    		two.classList.add("active");
    		three.classList.remove("active");
   	 		four.classList.remove("active");
	}else if(row.style.backgroundColor === "var(--red-btnh)"){
		one.classList.add("active");
    	five.classList.add("active");
    	li_huy.forEach(element => {
        element.classList.add("huy");
    	});
	}else if(row.style.backgroundColor === "var(--orange-btnvc)"){
		one.classList.add("active");
		two.classList.add("active");
		three.classList.add("active");
   	 	four.classList.remove("active");
		five.classList.remove("active");
	}else if(row.style.backgroundColor === "var(--yellow-btndg)"){
		one.classList.add("active");
		two.classList.add("active");
		three.classList.add("active");
   	 	four.classList.add("active");
		five.classList.remove("active");
	}
}
// show dialog xac nhan, huy ddh
const tableDDH = document.querySelectorAll('#ddh-data tbody tr');
const confirmDialog_xn = document.getElementById('confirmDialog_xn');
const confirmDialog_huy = document.getElementById('confirmDialog_huy');
const confirmBtn1 = document.getElementById('confirmBtn1');
const cancelBtn1 = document.getElementById('cancelBtn1');
		for (let i = 0; i < tableDDH.length; i++) {
	  	let row = tableDDH[i];
		selectStatus(row);
		resetProgress();
	  	let xnBtn = row.querySelector("#toggle-green");
		let huyBtn = row.querySelector("#toggle-red");
		if(xnBtn && huyBtn){
	  	xnBtn.addEventListener("click", function() {
		let cells = row.getElementsByTagName("td");
		let id = cells[0].innerText;
		document.getElementById("id_").innerHTML = id;
		confirmDialog_xn.style.display = 'block';
		confirmBtn.addEventListener('click', () => {
			confirmDialog_xn.style.display = 'none';
		  	selectBtn(xnBtn);
		  	// const now = new Date();
			// const datetime = now.toLocaleString();
			// document.getElementById("dateNow").innerHTML=datetime;
		  	getProgress(row);
		});
		cancelBtn.addEventListener('click', () => {
		  confirmDialog_xn.style.display = 'none';
		});
	  });
	  huyBtn.addEventListener("click", function() {
		let cells = row.getElementsByTagName("td");
		let id = cells[0].innerText;
		document.getElementById("id_1").innerHTML = id;
		confirmDialog_huy.style.display = 'block';
		confirmBtn1.addEventListener('click', () => {
			confirmDialog_huy.style.display = 'none';
		  	selectBtn(huyBtn);	
		  	// const now = new Date();
  			// const datetime = now.toLocaleString();
		  	// document.getElementById("dateNow").innerHTML=datetime;
		});
		cancelBtn1.addEventListener('click', () => {
		  confirmDialog_huy.style.display = 'none';
		});
	  });
	}
} 



// one.onclick = function(){
//     one.classList.add("active");
//     two.classList.remove("active");
//     three.classList.remove("active");
//     four.classList.remove("active");
// }
// two.onclick = function(){
//     one.classList.add("active");
//     two.classList.add("active");
//     three.classList.remove("active");
//     four.classList.remove("active");
// }
// three.onclick = function(){
//     one.classList.add("active");
//     two.classList.add("active");
//     three.classList.add("active");
//     four.classList.remove("active");

// }	
// four.onclick = function(){
//     one.classList.add("active");
//     two.classList.add("active");
//     three.classList.add("active");
//     four.classList.add("active");
// }