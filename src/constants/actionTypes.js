//登入登出
export const ACTIONTYPE_ACCOUNT_LOGIN_FACEBOOK = 'ACCOUNT_LOGIN_FACEBOOK';
export const ACTIONTYPE_ACCOUNT_LOGIN_GOOGLE = 'ACCOUNT_LOGIN_GOOGLE';
export const ACTIONTYPE_ACCOUNT_LOGIN_PHONENUM = 'ACCOUNT_LOGIN_PHONENUM';
export const ACTIONTYPE_ACCOUNT_LOGINSUCCESS = 'ACCOUNT_LOGINSUCCESS';
export const ACTIONTYPE_ACCOUNT_LOGINREJECT = 'ACCOUNT_LOGINREJECT';
export const ACTIONTYPE_ACCOUNT_LOGOUT = 'ACCOUNT_LOGOUT';
//帳號活動
export const ACTIONTYPE_ACCOUNT_FIRSTLANDING = 'ACCOUNT_FIRSTLANDING';
export const ACTIONTYPE_ACCOUNT_SETIDENTIFY = 'ACCOUNT_SETIDENTIFY';
export const ACTIONTYPE_ACCOUNT_CHANGENICKNAME = 'ACCOUNT_CHNAGENICKNAME';
export const ACTIONTYPE_ACCOUNT_READSTORY = 'ACCOUNT_READSTORY';
export const ACTIONTYPE_ACCOUNT_SHARESTORY = 'ACCOUNT_SHARESTORY';
//BOOK
export const ACTIONTYPE_FLIPBOOK_PREPAGE = 'FLIPBOOK_PREPAGE';
export const ACTIONTYPE_FLIPBOOK_NEXTPAGE = 'FLIPBOOK_NEXTPAGE';
export const ACTIONTYPE_FLIPBOOK_FIRSTPAGE = 'FLIPBOOK_FIRSTPAGE'; 
export const ACTIONTYPE_FLIPBOOK_LASTPAGE = 'FLIPBOOK_LASTPAGE'; 
export const ACTIONTYPE_FLIPBOOK_SUCCESS = 'FLIPBOOK_SUCCESS'; 
export const ACTIONTYPE_FLIPBOOK_REJECT = 'FLIPBOOK_REJECT'; 
//ILLUSTRATION
export const ACTIONTYPE_ILLUSTRATION_AUTOPLAY = 'ILLUSTRATION_AUTOPLAY';
export const ACTIONTYPE_ILLUSTRATION_PAUSE = 'ILLUSTRATION_PAUSE';
export const ACTIONTYPE_ILLUSTRATION_PRE = 'ILLUSTRATION_PRE';
export const ACTIONTYPE_ILLUSTRATION_NEXT = 'ILLUSTRATION_NEXT';
export const ACTIONTYPE_ILLUSTRATION_FIRST = 'ILLUSTRATION_FIRST';
export const ACTIONTYPE_ILLUSTRATION_LAST = 'ILLUSTRATION_LAST';
export const ACTIONTYPE_ILLUSTRATION_SUCCESS = 'ILLUSTRATION_SUCCESS';
export const ACTIONTYPE_ILLUSTRATION_REJECT = 'ILLUSTRATION_REJECT';
//USERDEFINE_STORY
export const ACTIONTYPE_UPDATECONTENTS_SUCCESS = 'STORYCONTENTS_UPDATE_SUCCESS';
export const ACTIONTYPE_UPDATECONTENTS_REJECT = 'STORYCONTENTS_UPDATE_FAIL';
export const ACTIONTYPE_UPDATEILLUSTRATION_SUCCESS = 'ILLUSTRATION_UPDATE_SUCCESS';
export const ACTIONTYPE_UPDATEILLUSTRATION_REJECT = 'ILLUSTRATION_UPDATE_FAIL';
//FACEBOOK
export const ACTIONTYPE_FACEBOOK_CHKSTATUS = 'ACCOUNT_FACEBOOK_CHKSTATUS';
export const ACTIONTYPE_FACEBOOK_LOGINSUCCESS = 'ACCOUNT_FACEBOOK_LOGINSUCCESS';
export const ACTIONTYPE_FACEBOOK_LOGINREJECT = 'ACCOUNT_FACEBOOK_LOGINREJECT';
export const ACTIONTYPE_FACEBOOK_REFRESHAUTH = 'ACCOUNT_FACEBOOK_REFRESHAUTH';
//S3
export const ACTIONTYPE_AWS_S3_CONFIGBUCKET = 'ACCOUNT_AWS_S3_CONFIGBUCKET';
export const ACTIONTYPE_AWS_S3_PUTBUCKET = 'AWS_S3_PUTBUCKET';
export const ACTIONTYPE_AWS_S3_PUTBUCKETPOLICY = 'AWS_S3_PUTBUCKETPOLICY';
export const ACTIONTYPE_AWS_S3_POST = 'AWS_S3_POST';
export const ACTIONTYPE_AWS_S3_PUT = 'AWS_S3_PUT';
export const ACTIONTYPE_AWS_S3_GET = 'AWS_S3_GET';
export const ACTIONTYPE_AWS_S3_SUCCESS = 'AWS_S3_SUCCESS';
export const ACTIONTYPE_AWS_S3_REJECT = 'AWS_S3_REJECT';
//DYNAMODB
export const ACTIONTYPE_AWS_DYNAMODB_CONFIG = 'ACCOUNT_AWS_DYANMODB_CONFIG';
export const ACTIONTYPE_AWS_DYNAMODB_SCAN = 'AWS_DYANAMODB_SCAN';
export const ACTIONTYPE_AWS_DYNAMODB_QUERY = 'AWS_DYNAMODB_QUERY';
export const ACTIONTYPE_AWS_DYNAMODB_GETITEM = 'AWS_DYNAMODB_GETITEM';
export const ACTIONTYPE_AWS_DYNAMODB_PUTITEM = 'AWS_DYNAMODB_PUTITEM';
export const ACTIONTYPE_AWS_DYNAMODB_UPDATEITEM = 'AWS_DYNAMODB_UPDATEITEM';
export const ACTIONTYPE_AWS_DYNAMODB_DELETEITEM = 'AWS_DYNAMODB_DELETEITEM';
export const ACTIONTYPE_AWS_DYNAMODB_SUCCESS = 'AWS_DYNAMODB_SUCCESS';
export const ACTIONTYPE_AWS_DYNAMODB_REJECT = 'AWS_DYNAMODB_REJECT';
//Waiting
export const ACTIONTYPE_WAITING_START = 'WAITING_START';
export const ACTIONTYPE_WAITING_END = 'WAITING_END';
//Page
export const ACTIONTYPE_JUMPTOPAGE = 'JUMPTOPAGE';

export const ACTIONTYPES_ACCOUNT = {
  'LOGIN_FACEBOOK': ACTIONTYPE_ACCOUNT_LOGIN_FACEBOOK,
  'LOGIN_GOOGLE': ACTIONTYPE_ACCOUNT_LOGIN_GOOGLE,
  'LOGIN_PHONENUM': ACTIONTYPE_ACCOUNT_LOGIN_PHONENUM,
  'LOGIN_SUCCESS': ACTIONTYPE_ACCOUNT_LOGINSUCCESS,
  'LOGIN_REJECT': ACTIONTYPE_ACCOUNT_LOGINREJECT,
  'LOGOUT': ACTIONTYPE_ACCOUNT_LOGOUT,
}