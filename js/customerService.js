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

const email = document.querySelector('#email');
function checkEmail(e){
    console.log(validate(e.target.value));
}
email.addEventListener('input',checkEmail);

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