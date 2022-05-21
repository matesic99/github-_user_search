const sunIcon = document.getElementById('light')
const moonIcon = document.getElementById('dark')

const userTheme = localStorage.getItem("theme")
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

const themeToggle = () =>{
  moonIcon.classList.toggle('display-none');
  sunIcon.classList.toggle('display-none');
}  




const themeSwitch = ()=>{

  if(document.documentElement.classList.contains("dark")){
  document.documentElement.classList.remove("dark")
  localStorage.setItem("theme","light")
  themeToggle();
  return;
  
  }
  document.documentElement.classList.add("dark")
  localStorage.setItem("theme","dark")
  themeToggle();
  
  
  
  };
  
  
  sunIcon.addEventListener("click",()=>{
  themeSwitch()
  
  });
  
  moonIcon.addEventListener("click",()=>{
      themeSwitch()
      
  });