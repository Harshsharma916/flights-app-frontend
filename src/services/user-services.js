import { generateApiClient } from '../utils/apiUtils';
const ultronAPI = process.env.REACT_APP_ULTRON_URL;
const proxyAPI = generateApiClient('proxy');
const hulAPI = generateApiClient('hulk');
const galactusAPI = process.env.REACT_APP_GALACTUS_BASE;
const galactusAdminAPI = generateApiClient('galactusAdmin');

export const instagramHackService = () => proxyAPI.get(`/utm_insta`);

export const sendOTPService = ultronAPI + '/v2/auth/enc/sendOtp?source=MAGIK';
export const verifyOTPService =  ultronAPI + '/v2/auth/checkOtp?source=MAGIK';
export const checkPinCodeService = data => galactusAPI.get(`operations/zip?zip=${data?.pincode}`);
export const addNewAddressService = data => galactusAPI.post(`operations/address`, data);
export const updateThemeService = data => galactusAdminAPI.post(`orders/updatetheme`, data);
export const finalizeCardOrderService = data => galactusAPI.post(`orders/finalize`, data);
export const finalizeOrderService = data => galactusAPI.post(`orders/process_order`, data);
export const addPhotoToPostService = ({ data, id }) =>
  galactusAdminAPI.post(`orders/updatepost`, { photoUrl: data?.photoUrl, postId: id });
export const postOrderPost = data => galactusAdminAPI.post(`orders/post`, data);
export const getUserProfile = () => galactusAPI.get(`accounts/profile`);
export const updateProfileService = data => galactusAPI.post(`accounts/profile`, data);
export const getProductById = id => galactusAPI.get(`orders/product?productId=${id}`);
export const coupon = () => galactusAPI.get(`orders/coupon`);

export const notifyService = (data) => galactusAPI.post(`orders/notify`, data);
export const claimPostService = (data) => galactusAPI.post(`orders/claimpost`, data);
export const checkPromoCodeService = (data) => galactusAPI.post(`orders/promocode`, data);
export const porderService = (data) => galactusAPI.post(`orders/porder`, data);

export const whatsappLoginService = data => ultronAPI.post(`promoter/userLogin`, data);
export const sendOTPNonEncService = data => ultronAPI.post(`v2/auth/cap/sendOtp`, { data });
export const resendOTPService = data => galactusAdminAPI.post(`accounts/resend_otp`, data);
export const updateAddressService = address => ultronAPI.post(`/v2/user/address/${address.id}`, { data: address });
export const addContactService = data => ultronAPI.post(`v2/user/contact`, { data });
export const getPromoCodeService = ({ name }) => ultronAPI.get(`v2/promoCode/new/${name}?source=web`);
export const getPromoCodeWithPincodeService = ({ name, pincode }) =>
  ultronAPI.get(`/v2/promoCode/new/${name}?source=web&pincode=${pincode}`);
export const draftOrderService = data => ultronAPI.post(`v2/order/draft`, { data });
export const addVideocardsService = data => ultronAPI.post(`v2/user/videoCard/addVideocards`, data);
export const addAddressAndOrderService = data => ultronAPI.post(`v2/user/videoCard/addAddressAndOrder`, data);
export const feameExtractorService = data => proxyAPI.post(`/proxy/frame_extractor`, data);
export const createPhotoToVideoService = data => proxyAPI.post(`/proxy/photo_to_video`, data);
export const getUserProducts = () => ultronAPI.get(`v2/user/product`);
export const getUserPosts = () => ultronAPI.get(`/v2/user/post`);
export const getHistoricOrdersService = data => galactusAPI.get(`orders/orderhistory`, data);
export const getHistoricOrderByIdService = data => ultronAPI.get(`v2/user/viboOrder/history/${data}`);
export const getRewardsService = () => ultronAPI.get(`/v2/user/rewards/rewards/web`);
export const getHistoricRewardsService = () => ultronAPI.get(`/v2/user/rewards/historicRewards`);
export const claimRewardService = data =>
  ultronAPI.post(data.isJumbo ? `/v2/user/rewards/scratch` : `/v2/user/rewards/claim`, data.data);
export const updatePhonenumberService = data => ultronAPI.put(`/v2/user/rewards/updatePhone`, data);
export const getStreakStatsService = data => ultronAPI.get(`v2/user/streak/streakDetails`);
export const claimRewardServiceNew = ({ isJumbo, userRewardId, isHistoricRewardScrached }) => {
  if (!isHistoricRewardScrached) {
    return ultronAPI.post(isJumbo ? 'v2/user/rewards/claimJumbo' : 'v2/user/rewards/claimDaily');
  } else {
    return ultronAPI.post('v2/user/rewards/scratch', { userRewardId });
  }
};
// HULK
export const checkUserTypeService = data =>
  hulAPI.get(`check_access?anv_id=${data?.anoId}&phone_number=${data?.phone}`);

export const getPendingInvites = id => hulAPI.get(`get_requests?anv_id=${id}`);
export const getInvitedMembers = id => hulAPI.get(`get_members?anv_id=${id}`);
export const requestAccessService = data => hulAPI.post(`request_access`, data);
export const resolveOrRejectAccessRequestService = data => hulAPI.post(`grant_access`, data);
export const inviteMemberService = data => hulAPI.post(`invite_member`, data);

export const revokeAccessService = data => hulAPI.post(`revoke_access`, data);
