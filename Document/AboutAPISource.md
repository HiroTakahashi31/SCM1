

## �͂��߂�
����md�t�@�C����API�̃\�[�X�����p�ł��B

***
### 1. �\�[�X�̊T�v
�{�\�[�X(SCM1_API�\�����[�V����)��UI������̃��N�G�X�g���󂯁A  
DB�փA�N�Z�X���A�f�[�^��CRUD���鏈�����s���܂��B��1  
������͕K���������ʁ�2��API���Ă�UI���ɕԋp���܂��B��3  

    ��1 ����UI����js�ŏ���������Ȃ����G�ȏ��������������ꍇ��  
        API���ŏ������s����������܂���  
    ��2 [���������FOK]�A[�������s�FNG]�A[�ُ�I���FER]  
    ��3 �f�[�^�擾�����̏ꍇ�͎擾�����f�[�^���ԋp���܂�

�܂��A�{�\�[�X��Azure���WebApps�ɓW�J����Ă���A  
�A�g���Ă���DB��Azure���SQL Database�ł��B  

�ȉ��A�A�v���P�[�V�����\���}�ł��B
![�A�v���P�[�V�����\���}](./mdFileResource/ApplicationConstitution.jpg?raw=true)

***
### 2. �A�v���̍\��
���̃A�v����VisualStudio2017�ŊJ�����Ă��܂��B.NET Framework��4.6.2�ł��B  
�\�����[�V�����̃t�@�C���\���͈ȉ��̂悤�ɂȂ��Ă��܂��B��2017/11/10����  
![�\�����[�V�����G�N�X�v���[���[](./mdFileResource/SolutionCompositionOverView.jpg?raw=true)

API���@�����Ɓ��̂悤��(�����w��)���Ԃŏ������s���܂��B  
>APIController��PresentationService��Service��Repository��DataAccess

##### �ȉ��A�e�t�H���_���̐����ł�
+ APIController  
  UI����@�����API�̎󂯌��ƂȂ�\�[�X���i�[����Ă��܂��B  
  (MVC��Controller�Ɠ��������ł�)  
  APIController��HTTP���N�G�X�g�̎��(GET,POST�Ȃ�)�Ɋ�Â����A  
  ���\�b�h�Ő��藧���Ă��܂��B

+ App_Data�AApp_Start  
  APIController�̃��[�e�B���O�ݒ�Ƃ����L�q����Ă��܂��B  
  StackOverFlow�ɂ���[WebAPIConfig.cs]�ɂ��낢�돑���ƁA  
  API���������ۂ̃A�h���X�ƃp�����[�^�[�̑Ή��Ƃ����ς�����炵���̂ŒǋL���Ă܂��B

+ DataAccess  
  DB�ւ̐ڑ����s���ASQL�𓊂���DataAccess.cs���i�[����Ă��܂��B  
  �܂����w�ɂ���SQL�t�H���_�ɂ́ADB��̃e�[�u������SQL���L�q���ꂽxml�t�@�C�����u����Ă��܂��B  
  ���Ȃ݂�DataAccess.cs�ł�Dapper���g�p����DB�ڑ����s���ASQL�t�H���_��SQL�𕶎��񉻂��ĐH�킹�Ă��܂��B

+ Model  
  DB����̎擾�l���i�[�����邽�߂̃��f���N���X���i�[����Ă��܂��B  
  ��{�I�ɂ�DB��̊e�e�[�u���ɂ��P�N���X��z�肵�Ă��܂����A  
  �����ɕK�v�ȃf�[�^�N���X���ǉ�����Ă�����������܂���B�B

+ PresentationService  
  Controller�w�ŌĂяo�����A�r�W�l�X�N���X�̎n�_�̂悤�Ȉʒu�Â��ł��B  
  ���̒i�K�ł�API�Ƃ̊֌W�͔�������c���Ă��銴���ł��傤���B  
  ��������Service�N���X���Ă΂�܂��B

+ Service  
  PresentationService�w�ŌĂяo�����A�r�W�l�X���W�b�N���̉�ł��B
  �����ł�DB��̃e�[�u������1cs�t�@�C��(�P�N���X)�����C���[�W�ł��B    
  ���̒i�K�ł�Service�N���X��API�Ƃ̊֌W�͑a�����ɂȂ��Ă��܂��B  
  �Ⴆ�ΎЈ��}�X�^Service�N���X�́u�Ј��}�X�^�����������Ă���v�Ƃ����r�W�l�X���W�b�N�́A  
  ���O�C��������APIPresentationService�N���X�ł��g���܂����A  
  ���O�C�������Ƃ͕ʂɁA�e�Ј��̃}�X�^�����e���s�������ꍇ�̎Ј����\�������ɂ��g����Ǝv���܂��B

+ Repository  
  Service�w�ŌĂяo�����A�r�W�l�X�N���X�̏I�_�̂悤�Ȉʒu�Â��ł��B  
  ���̒i�K�ł�Service�N���X�̃��W�b�N�ŕK�v�ȁA  
  DB�f�[�^�ւ�CRUD�������������邽�߂ɂǂ�SQL���ĂԂ���(�p�����[�^�[�Ƌ���)�w�肵�Ă��܂��B


# �����܂ŏ��������I

