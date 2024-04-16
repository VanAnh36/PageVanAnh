$(".option").click(function () {
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
  })