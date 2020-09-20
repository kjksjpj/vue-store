import store from '@/store'
import axios from 'axios'
let target2 = "http://127.0.0.1:81"
//获得分销系统的用户信息
function getDistributionUserInfo() {
    let user = store.state.user.user;
    axios
        .get(target2 +'/api/v1/getUserInfo', {params: {userId: user.username}})
        .then(res => {
            if (res.data.success === true) {
                store.dispatch('setIsJoinDist', true)
                store.dispatch('setDistInfo', res.data.data)
            }
        })
        .catch(err => {
            return Promise.reject(err);
        });
}

//加入分销
function join(data) {
    let user = store.state.user.user;
    axios({
        method: 'post',
        url: target2 + "/api/v1/memberAdd",
        data: {
            disModelId: data,
            disNote: "nothing",
            disPlatformId: "dist",
            disUserName: user.username,
            disUserId: user.username,
            secret: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzExMTczMzk4MDcsInBheWxvYWQiOiJcInhpYW9qaWFuZ1wiIn0.rOY3JXrYpNMWwATmY7r3jm0Ec6SuhNPyrP2rGD43Isk",
        }
    })
        .then(res => {
            if (res.data.success === true) {
                getDistributionUserInfo();
            }
        })
        .catch(err => {
            return Promise.reject(err);
        });

}

export {getDistributionUserInfo, join}
