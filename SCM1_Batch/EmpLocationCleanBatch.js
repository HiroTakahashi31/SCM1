//request��require
var request = require('request');

//�w�b�_�[���`
var headers = {
  'Content-Type':'application/json'
}

//�I�v�V�������`
var options = {
  url: 'http://scm1test.azurewebsites.net/api/auth/',
  method: 'POST',
  headers: headers,
  json: true,
  form: {"Empno":"46012", "Password":"46012"}
}

//���N�G�X�g���M
request(options, function (error, response, body) {
  //�R�[���o�b�N�ŐF�X�ȏ���
})