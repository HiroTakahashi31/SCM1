//request��require
var request = require('request');

//�w�b�_�[���`
var headers = {
  'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
  ,'Content-Type': "application/json"
  ,'Accept-Language': "ja,en-US;q=0.8,en;q=0.6"
  ,'Accept-Encoding': "gzip, deflate, br"
}

//�I�v�V�������`
var options = {
  url: 'http://scm1api.azurewebsites.net/api/emplocation/ClearEmpLocationInfo',
  method: 'DELETE',
  headers: headers,
  json: { EmpNo: "DailyClearBatch" } 
}


//���N�G�X�g���M
request.delete(options, function (error, response, body) {
  //�R�[���o�b�N�ŐF�X�ȏ���
});