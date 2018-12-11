import ajax from './ajax'

const BASE_URL = '/api'

export const reqAddress = (geohash) => ajax(BASE_URL + `/position/${geohash}`)
export const reqFoodCategorys = () => ajax(BASE_URL + `index_category`)
export const reqShops = (longiteude, latitude) => ajax(BASE_URL + `/shops`, {longiteude, latitude})
//根据经纬度，获取商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL + '/search_shops', {geohash, keyword})
//用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + 'login_pwd', {name, pwd, captcha}, 'post')
//发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})
//手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'post')
//根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
//用户登出
export const reqLogout = () => ajax(BASE_URL + '/logout')

export const reqShopInfo=()=>ajax('/info')
export const reqShopRatings=()=>ajax('/ratings')
export const reqShopGoods=()=>ajax('/goods')
