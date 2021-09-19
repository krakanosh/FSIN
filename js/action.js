// Скрытие формы после отправки и вывод сообщения
$(".btn.btn-default").click(function(){
  $("#contact-form").hide(800); // скрывает форму
  $(".alert.alert-success").show("slow"); // выводит скрытое сообщение
});