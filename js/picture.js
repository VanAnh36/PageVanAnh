/*$(".option").click(function () {
	$(".option").removeClass("active");
	$(this).addClass("active");
  });
  const expandBtns = document.querySelectorAll(".option")
  expandBtns.forEach((btn, index) =>{
	btn.addEventListener("click",()=>{
		for(let i=0; i< expandBtns.length;i++){
			if(index ==i){
				expandBtns[i].parentElement.classList.toggle
				("expand");
			}
			else{
				expandBtns[i].parentElement.classList.remove
				("expand");
			}
		}
	})
  })*/
  // Sử dụng jQuery cho sự kiện click
$(".option").click(function () {
	$(".option").removeClass("active");
	$(this).addClass("active");
  });
  
  // Sử dụng JavaScript thuần cho sự kiện click
  const expandBtns = document.querySelectorAll(".option");
  
  expandBtns.forEach((btn, index) => {
	btn.addEventListener("click", () => {
	  expandBtns.forEach((btn, i) => {
		const parentElement = btn.parentElement;
		if (index === i) {
		  parentElement.classList.toggle("expand");
		} else {
		  parentElement.classList.remove("expand");
		}
	  });
	});
  });
  