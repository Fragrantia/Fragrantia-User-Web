//https://github.com/manishsaraan/email-validator
var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
function validate (email) {
  if (!email) return false;

  var emailParts = email.split('@');

  if (emailParts.length !== 2) return false;

  var account = emailParts[0];
  var address = emailParts[1];

  if (account.length > 64) return false;

  else if (address.length > 255) return false;

  var domainParts = address.split('.');
  
  if (domainParts.some(function (part) {
    return part.length > 63;
  })) return false;

  return tester.test(email);
}
const title = document.querySelector('#title');
const email = document.querySelector('#email');
const mainF = document.querySelector('#contactusmain');
// function checkEmail(e){
//     console.log(validate(e.target.value));
// }
// email.addEventListener('input',checkEmail);

$(function() {
  $('select#category').selectric();
});

var fileInput = document.querySelector('input.file_input');
FilePond.registerPlugin(FilePondPluginFileValidateType);
FilePond.registerPlugin(FilePondPluginFileValidateSize);
FilePond.create(fileInput,{
  storeAsFile: true,
  maxFiles:3,
  maxParallelUploads:3,
  labelIdle:"클릭하여 파일을 업로드 하시거나 드래그 하십시오...",
  acceptedFileTypes: ['image/png', 'image/jpeg','application/x-zip-compressed'],
  
  maxFileSize:'10MB',

})
const reset = document.getElementById('reset');
reset.addEventListener('click',function(){
  title.value='';
  email.value='';
  mainF.value='';
})

const submit = document.getElementById('submit');
submit.addEventListener('click',function(){
  var c ={
    t:title.value.length>0,
    e:validate(email.value),
    m:mainF.value.length>0
  }
  console.log(c)
  if(
    Object.values(c).every((erew)=>{
      console.log(erew)
      return erew;
    })
  ){
    title.value='';
    email.value='';
    mainF.value='';
    alert('제출되었습니다!');
  }
  else{
    var msg='필수 양식을 적어주세요!';
    alert(msg);
  }
})