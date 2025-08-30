function checkPassword(e) {
  e.preventDefault();
  const pw = document.getElementById("pw").value;
  if (pw === "cat") {
    window.location.href = "dd.html";
  } else {
     if (pw === "dog") 
{    window.location.href = "zz.html";
  
  } else {
    alert("パスワードが違います！");
  } 
  }}
