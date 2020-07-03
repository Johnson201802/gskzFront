<template>
    <div class="egistered">
        <!-- egisteredTop start -->
        <div class="egisteredTop">
            <div class="topSon">
                <div class="topSonOne">
                    <div class="topleft">
                        <p>Hi,  您好,  欢迎来到公司快转网公司转让平台!</p>
                        <router-link to="/Login" class="p" tag="p">登录</router-link>
                        <p>免费注册</p>
                    </div>
                    <div class="topright">
                        <router-link to="/" class="p" exact>平台首页</router-link>
                        <router-link to="/" class="p" exact>帮助中心</router-link>
                        <router-link to="/" class="p" exact>关注我们</router-link>
                        <router-link to="/" class="p" exact>在线客服</router-link>
                        <a class="p" style="border-right: none;" href="javascript:void(0);">免费咨询热线 : 176-2150-2150</a>
                    </div>
                </div>
            </div>
            <div class="topSonTwo">
                <div class="topSonTwos">
                    <div class="one">
                        <h1>
                            <router-link to="/">
                                <img src="../../assets/images/Logo.png" alt="">
                            </router-link>
                        </h1>
                        <p>一站式公司交易平台</p>
                    </div>
                    <div class="two">
                        <router-link to="/"><i class="iconfont icon-shouye1"></i>返回首页</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- egisteredTop end -->

        <!-- egisteredMain start -->
        <div class="egisteredMain">
            <div class="loginnow">
                <div class="nowTop">注册账号</div>
                <div class="loginxx">
                    <input type="text" v-model="phoneNumber" placeholder="请输入您手机号">
                    <input type="text" v-model="userName" maxlength="10" placeholder="请输入您的呢称">
                    <input type="password" v-model="password" maxlength="20" placeholder="请输入您的登录密码">
                    <input type="password" v-model="passwordAgain" maxlength="20" placeholder="请再次确定您的密码">
                    <div class="slice">
                        <p class="slicep" ref="p">{{yanzheng}}</p>
                        <p>请按住滑块拖动至最右边</p>
                        <span ref="span"></span>
                        <el-slider class="block" :disabled=isdisabled v-model="value" @input="sliceing" @change="slicechange"></el-slider>
                    </div>
                    <div class="inof">
                        <input style="border-right: none;" type="text" v-model="VerificationCode" placeholder="请输入验证码">
                        <input style="width: 36%;border: 1px solid #eee;" type="button" @click="getCode" :value="code"/>
                    </div>
                    <button style="margin: 0;" @click="egistered">注册</button>
                    <div class="rlogin">
                        <el-checkbox v-model="checked"></el-checkbox>
                        <p>我已阅读并同意公司快转网</p>
                        <span @click="isagreement = true">《服务协议》</span>
                        <p>有账号 !</p>
                        <router-link tag="span" to="/Login">去登录</router-link>
                    </div>
                </div>
            </div>
            
        </div>
        <!-- egisteredMain end -->

        <!-- egisteredFooter start -->
        <div class="egisteredFooter">
            <p>公司快转网 · 公司转让买卖平台 版权所有 沪ICP备26515025456号-1  服务热线：<strong>176-2150-2150</strong></p>
        </div>
        <!-- egisteredFooter end -->

        <!-- 服务协议 start -->
        <div class="agreement" v-if="isagreement">
            <div class="father">
                <div class="xieyi">
                    <p>服务协议</p>
                    <i class="iconfont icon-chahao" @click="isagreement = false"></i>
                </div>
                <div style="padding:20px 10px 10px 10px;font-size: 16px;font-weight:600;text-align: center;">公司快转网用户注册协议及法律说明</div>
                <div style="padding:10px;">本协议是您与公司快转网（简称;本站，网址：web.qimingxiaoer.com）所有者之间就公司快转网网站服务等相关事宜所订立的契约，请您仔细阅读本注册协议，您点击;同意并注册按钮后，本协议即构成对双方有约束力的法律文件。</div>
                <div style="padding:10px;font-size: 14px;font-weight:600;">第1条 本站服务条款的确认和接纳</div>
                <div style="padding:10px;">1.1本站的各项电子服务的所有权和运作权归公司快转网所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。</div>
                <div style="padding:10px;">1.2用户点击同意本协议的，即视为用户确认自己具有享受本站服务、下单等相应的权利能力和行为能力，能够独立承担法律责任。</div>
                <div style="padding:10px;">1.3如果您在18周岁以下，您只能在父母或监护人的监护参与下才能使用本站。</div>
                <div style="padding:10px;">1.4公司快转网保留在中华人民共和国大陆地区施行法律允许的范围内独自决定拒绝服务、关闭用户账户、清除或编辑内容或取消订单的权利。</div>
                <div style="padding:10px;font-size: 14px;font-weight:600;">第2条 本站服务</div>
                <div style="padding:10px;">2.1公司快转网通过互联网依法为用户提供互联网信息等服务，用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。</div>
                <div style="padding:10px;">2.2用户必须自行准备如下设备和承担如下开支：（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；（2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。</div>
                <div style="padding:10px;font-size: 14px;font-weight:600;">第3条 用户信息</div>
                <div style="padding:10px;">3.1用户应自行诚信向本站提供注册资料，用户同意其提供的注册资料真实、准确、完整、合法有效，用户注册资料如有变动的，应及时更新其注册资料。如果用户提供的注册资料不合法、不真实、不准确、不详尽的，用户需承担因此引起的相应责任及后果，并且公司快转网保留终止用户使用公司快转网各项服务的权利。</div>
                <div style="padding:10px;">3.2用户在本站进行浏览、下单购物等活动时，涉及用户真实姓名/名称、通信地址、联系电话、电子邮箱等隐私信息的，本站将予以严格保密，除非得到用户的授权或法律另有规定，本站不会向外界披露用户隐私信息。</div>
                <div style="padding:10px;">3.3用户注册成功后，将产生用户名和密码等账户信息，您可以根据本站规定改变您的密码。用户应谨慎合理的保存、使用其用户名和密码。用户若发现任何非法使用用户账号或存在安全漏洞的情况，请立即通知本站并向公安机关报案。</div>
                <div style="padding:10px;">3.4用户同意，公司快转网拥有通过包括但不限于QQ、微信、短信、电话等形式，向在本站注册、购物用户发送订单信息、促销活动等告知信息的权利。</div>
                <div style="padding:10px;">3.5用户不得将在本站注册获得的账户借给他人使用，否则用户应承担由此产生的全部责任，并与实际使用人承担连带责任。</div>
                <div style="padding:10px;">3.6用户同意，公司快转网有权使用用户的注册信息、用户名、密码等信息，登录进入用户的注册账户，进行证据保全，包括但不限于公证、见证等。</div>
                <div style="padding:10px;font-size: 14px;font-weight:600;">第4条 用户依法言行义务</div>
                <div style="padding:10px;">本协议依据国家相关法律法规规章制定，用户同意严格遵守以下义务：</div>
                <div style="padding:10px;">4.1不得传输或发表：煽动抗拒、破坏宪法和法律、行政法规实施的言论，煽动颠覆国家政权，推翻社会主义制度的言论，煽动分裂国家、破坏国家统一的的言论，煽动民族仇恨、民族歧视、破坏民族团结的言论；</div>
                <div style="padding:10px;">4.2从中国大陆向境外传输资料信息时必须符合中国有关法规；</div>
                <div style="padding:10px;">4.3不得利用本站从事洗钱、窃取商业秘密、窃取个人信息等违法犯罪活动；</div>
                <div style="padding:10px;">4.4不得干扰本站的正常运转，不得侵入本站及国家计算机信息系统；</div>
                <div style="padding:10px;">4.5不得传输或发表任何违法犯罪的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的，淫秽的、不文明的等信息资料；</div>
                <div style="padding:10px;">4.6不得传输或发表损害国家社会公共利益和涉及国家安全的信息资料或言论；</div>
                <div style="padding:10px;">4.7不得教唆他人从事本条所禁止的行为；</div>
                <div style="padding:10px;">4.8不得利用在本站注册的账户进行牟利性经营活动；</div>
                <div style="padding:10px;">4.9不得发布任何侵犯他人著作权、商标权等知识产权或合法权利的内容；</div>
                <div style="padding:10px;">用户应不时关注并遵守本站不时公布或修改的各类合法规则规定。</div>
                <div style="padding:10px;">本站保有删除站内各类不符合法律政策或不真实的信息内容而无须通知用户的权利。</div>
                <div style="padding:10px;">若用户未遵守以上规定的，公司快转网有权作出独立判断并采取暂停或关闭用户帐号等措施。用户须对自己在网上的言论和行为承担法律责任。</div>
                <div style="padding:10px;font-size: 14px;font-weight:600;">第5条 商品信息</div>
                <div style="padding:10px;">本站上的商品价格、数量、是否有货等商品信息随时都有可能发生变动，本站不作特别通知。由于网站上商品信息的数量极其庞大，虽然本站会竭尽全力保证您所浏览商品信息的准确性，但由于众所周知的互联网技术因素等客观原因存在，本站网页显示的信息可能会有一定的滞后性或差错，对此情形您知悉并理解，公司快转网欢迎您的指出和纠错，并会视情况给予纠错者一定的奖励。</div>
                <div style="padding:10px;font-size: 14px;font-weight:600;">第6条 订单</div>
                <div style="padding:10px;">6.1在您下订单时，请您仔细确认所购商品的名称、价格、数量、类型等信息。购买人与使用者不一致的，购买人的行为和意思表示视为用户的行为和意思表示，用户应对购买人的行为及意思表示的法律后果承担连带责任。</div>
                <div style="padding:10px;">6.2除法律另有强制性规定外，双方约定如下：本站上销售方展示的商品和价格等信息仅仅是交易信息的发布，您购买下订单之前，请联系在线客服核实该商品的相关数据情况等，由于市场变化及各种以合理商业努力难以控制的因素的影响，本站无法保证您提交的订单信息中希望购买的商品都会有货；如您拟购买的商品，发生缺货，您有权取消订单。</div>
                <div style="padding:10px;font-size: 14px;font-weight:600;">第7条 所有权及知识产权条款</div>
                <div style="padding:10px;">7.1用户一旦接受本协议，即表明该用户主动将其在任何时间段在本站发表的任何形式的信息内容（包括但不限于客户评价、客户咨询、各类话题文章等信息内容）的财产性权利等任何可转让的权利，如著作权财产权（包括并不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权以及应当由著作权人享有的其他可转让权利），全部独家且不可撤销地转让给公司快转网所有，用户同意公司快转网有权就任何主体侵权而单独提起诉讼。</div>
                <div style="padding:10px;">7.2本协议已经构成《中华人民共和国著作权法》第二十五条（条文序号依照2011年版著作权法确定）及相关法律规定的著作财产权等权利转让书面协议，其效力及于用户在公司快转网网站上发布的任何受著作权法保护的作品内容，无论该等内容形成于本协议订立前还是本协议订立后。</div>
                <div style="padding:10px;">7.3公司快转网是本站的制作者,拥有此网站内容及资源的著作权等合法权利,受国家法律保护,有权不时地对本协议及本站的内容进行修改，并在本站张贴，无须另行通知用户。在法律允许的限度范围内，公司快转网对本协议及本站内容拥有解释权。</div>
                <div style="padding:10px;">7.4除法律另有强制性规定外，未经公司快转网明确的特别书面许可,任何单位或个人不得以任何方式非法地全部或部分复制、转载、引用、链接、抓取或以其他方式使用本站的信息内容，否则，公司快转网有权追究其法律责任。</div>
                <div style="padding:10px;">7.5本站所刊登的资料信息（诸如文字、图表、标识、按钮图标、图像、声音文件片段、数字下载、数据编辑和软件），均是公司快转网或其内容提供者的财产，受中国和国际版权法的保护。本站上所有内容的汇编是公司快转网的排他财产，受中国和国际版权法的保护。本站上所有软件都是公司快转网或其关联公司或其软件供应商的财产，受中国和国际版权法的保护。</div>
                <div style="padding:10px;font-size: 14px;font-weight:600;">第8条 协议更新及用户关注义务</div>
                <div style="padding:10px;">根据国家法律法规变化及网站运营需要，公司快转网有权对本协议条款不时地进行修改，修改后的协议一旦被张贴在本站上即生效，并代替原来的协议。用户可随时登录查阅现有的协议；用户有义务不时关注并阅读现有的协议及网站公告。如用户不同意更新后的协议，可以且应立即停止接受公司快转网网站依据本协议提供的服务；如用户继续使用本网站提供的服务的，即视为同意更新后的协议。公司快转网建议您在使用本站之前阅读本协议及本站的公告。如果本协议中任何一条被视为废止、无效或因任何理由不可执行，该条应视为可分的且并不影响任何其余条款的有效性和可执行性。</div>
                <div style="padding:10px;font-size: 14px;font-weight:600;">第9条 法律管辖和适用</div>
                <div style="padding:10px;">本协议的订立、执行和解释及争议的解决均应适用在中华人民共和国大陆地区适用之有效法律（但不包括其冲突法规则）。 如发生本协议与适用之法律相抵触时，则这些条款将完全按法律规定重新解释，而其它有效条款继续有效。 如缔约方就本协议内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，均由公司快转网所属公司之所在城市地区人民法院提起诉讼申请。</div>
                <div style="padding:10px;font-size: 14px;font-weight:600;">第10条 其他</div>
                <div style="padding:10px;">10.1公司快转网所有者是指在政府部门依法许可或备案的公司快转网网站经营主体。</div>
                <div style="padding:10px;">10.2公司快转网尊重用户和消费者的合法权利，本协议及本网站上发布的各类规则、声明等其他内容，均是为了更好的、更加便利的为用户和消费者提供服务。本站欢迎用户和社会各界提出意见和建议，公司快转网将虚心接受并适时修改本协议及本站上的各类规则。</div>
                <div style="padding:10px;">10.3本协议内容中以黑体、加粗、下划线、斜体等方式显著标识的条款，请用户着重阅读。</div>
                <div style="padding:10px;">10.4您点击本协议下方的;我已阅读并且同意公司快转网《服务协议》;按钮即视为您完全接受本协议，在点击之前请您再次确认已知悉并完全理解本协议的全部内容。</div>
            </div>
        </div>
        <!-- 服务协议 end -->


        <!-- 消息提示 start -->
        <div class="message" :class='{"show" : ismessage , "hide" : !ismessage}'>{{message}}</div>
        <!-- 消息提示 end -->
    </div>
</template>

<script>
import Cookies from 'js-cookie'
import axios from '../../api/axios'
export default {
    data(){
        return{
            checked:true,
            second:true,
            phoneNumber:"",
            userName:"",
            password:"",
            passwordAgain:"",
            code:"获取验证码",
            VerificationCode:"",
            value:0,
            isdisabled:false,
            yanzheng:"",
            isagreement:false,
            isok:false,
            message:"",
            ismessage:false,
            showhidetime:true,
            isgetyzm:false,
            statementlist:[]
        }
    },
    created(){
    },
    methods:{
        //切换登陆方式
        cisphone:function(){
            this.phoneNumber = ""
            this.password = ""
        },
        //获取验证码
        getCode:async function(){
            const {phoneNumber} = this
            if(!this.reg(phoneNumber)){
                this.showHide('您输入的手机号码有误')
                return
            }
            if(!this.second) return
            if(!this.isok){
                this.showHide('请将滑块拖动至最右边')
                return
            }
            let result = await axios('index/login/sendMsg',{tel:phoneNumber})
            if(result.status == 1025){
                this.showHide('该手机号短信条数受限，请明日在试',3000)
                return 
            }else if(result.status != 0){
                this.showHide('未知的错误',3000)
                return
            }
            this.code = "60秒后重发"
            result.yzm = this.statement(result.yzm)
            Cookies.set('yzm',result.yzm,{ expires: 1 / 288 })
            Cookies.set('phone',phoneNumber)
            this.showHide('验证码已发送,有效期5分钟')
            this.isgetyzm = true
            this.mysetInterval()
        },
        //二维码变成乱码
        statement:function(yzm){
            yzm = (yzm + "").split('')
            this.statementlist = []
            for(let i = 0;i < 6; i++){
                this.statementlist.push(Math.floor((Math.random() * 10) + (Math.random() * 10)))
            }
            this.statementlist.map((item,index)=>{
                yzm.splice(index,1,yzm[index] * item)
            })
            return yzm.join("")
        },
        //正则验证手机号码
        reg:function(phone){
            return /^1[3456789]\d{9}$/.test(phone)? true : false
        },

        //发送信息读秒
        mysetInterval:function(){
            this.second = false
            let num = 60
            let time = setInterval(()=>{
                if(num == 0){
                    this.code = "重新发送"
                    this.second = true
                    clearInterval(time)
                    return
                }
                num --
                this.code = `${num}秒后重发`
            },1000)
        },

        //滑块拖动中
        sliceing:function(num){
            this.$refs.p.style.width = num + "%"
            if(num > 15) this.$refs.span.style.left = num - 15 + "%"
        },

        //滑动结束
        slicechange:function(num){
            if(num < 100){
                let time = setInterval(()=>{
                    if(num == 0){
                        clearInterval(time)
                        return
                    }
                    num -- 
                    this.$refs.p.style.width = num + "%"
                    if(num > 15)this.$refs.span.style.left = num - 15 + "%"
                    this.value = num
                },4)
            }else{
                this.$refs.span.style.background = "url(" + require("../../assets/images/ok.png") + ")no-repeat center center",
                this.$refs.span.style.backgroundSize = "100% 100%",
                this.isdisabled = true
                this.isok = true
                this.yanzheng = "验证成功"
            }
        },

        //点击注册
        egistered:async function(){
            if(!this.validation()) return
            let data = {
                user_tel : Cookies.get('phone'),
                user_pwd : this.password,
                user_name : this.userName,
            }
            let result = await axios('index/login/register',data)
            if(result.code == 600){
                this.showHide('该手机号已被注册')
            }else{
                this.showHide('注册成功,稍后将自动跳转至登录页...',2000)
                setTimeout(()=>{
                    this.$router.push('/Login')
                },2500)
            }
        },

        //输入验证
        validation:function(){
            const {userName,password,passwordAgain,VerificationCode} = this
            if(userName.match(/^[ ]*$/)){
                this.showHide('请输入您的账户昵称!')
                return false
            }else if(password.match(/^[ ]*$/)){
                this.showHide('请输入您的账户密码!')
                return false
            }else if(password.length < 6){
                this.showHide('账户密码最少设置6位!')
                return false
            }else if(password != passwordAgain){
                this.showHide('两次密码不一致,请重新输入!')
                return false
            }else if(this.isewm(VerificationCode) != Cookies.get('yzm')){
                if(this.isgetyzm == true && VerificationCode == ""){ 
                    this.showHide('请输入验证码!')
                    return false
                }else if(this.isgetyzm == false){
                    this.showHide('请先获取验证码!')
                    return false
                }else if(this.isgetyzm == true && Cookies.get('yzm') == undefined){
                    this.showHide('验证码已过期,请重新获取!')
                    return false
                }else if(this.isewm(VerificationCode) != Cookies.get('yzm')){
                    this.showHide('验证码不正确,请重新输入!')
                    return false
                }else{
                    return true
                }
            }else if(!this.checked){
                this.showHide('请先同意服务协议!')
                return false
            }else{
                console.log(111113)
                return true
            }
        },

        //验证二维码
        isewm:function(yzm){
            yzm = (yzm + "").split('')
            this.statementlist.map((item,index)=>{
                yzm.splice(index,1,yzm[index] * item)
            })
            return yzm.join("")
        },

        //显示消失 对话框
        showHide:function(message,time = 2000){
            if(!this.showhidetime) return
            this.showhidetime = false
            this.ismessage = true
            this.message = message
            setTimeout(()=>{
                this.ismessage = false
                setTimeout(()=>{
                    this.showhidetime = true
                },400)
            },time)
        }
    }
}
</script>

<style lang="less">
    .egistered{
        font-size: 14px;
        .egisteredTop{
			min-width: 1200px;
            .topSon{
                height:40px;
                background-color: #F9F9F9;
                .topSonOne{
                    width:1200px;
                    margin:auto;
                    display: flex;
                    font-size: 12px;
                    justify-content: space-between;
                    .topleft{
                        display: flex;
                        line-height: 40px;
                        color:gray;
                        .p{
                            padding:0 10px;
                            line-height:40px;
                            margin:0 10px;
                            color:#F3A54D;
                        }
                    }
                    .topright{
                        display: flex;
                        color:gray;
                        line-height: 40px;
                        a,p{
                            margin-left:10px;
                            color:gray;
                            &:hover{
                            	text-decoration: none;
                            }
                        }
                        .p{
                            padding:0 10px;
                            line-height:10px;
                            border-right:1px solid #ccc;
                            margin:auto ;
                            margin-left:0;
                        }

                    }
                }
            }
            .topSonTwo{
                background-color: #fff;
                height:91px;
				margin: 30px auto;
                .topSonTwos{
                    width:1200px;
                    height:80px;
                    margin:auto;
                    display: flex;
                    justify-content: space-between;
                    .one{
                        display: flex;
                        h1{
                            margin-top:0;
                            img{
                                margin:auto 0;
                                max-height:91px;
                            }
                        }
                        p{
                            margin: 29px 0 0 0px;
                            float: left;
                            color: #cacaca;
                            font-size: 13px;
                        }
                    }
                    .two{
                        margin-right: 40px;
                        line-height: 80px;
                        a{
                            font-size: 17px;
                            line-height: 22px;
                            margin-right: 15px;
                            color: #6f6d6e;
							&:hover{
								text-decoration: none;
							}
                            i{
                                color:#F3A54D;
                                margin-right: 6px;
                                font-size: 22px;
                            }
                        }
                    }
                }
            }
        }
        .egisteredMain{
			min-width: 1200px;
            position: relative;
            height:600px;
            background: url(../../assets/images/gg.png) center top no-repeat;
            .loginnow{
                position: relative;
                top: 15px;
                left: 390px;
                width: 400px;
                height: 571px;
                margin: auto;
                right: 160px;
                background-color: #fff;
                border-radius: 10px;
                .nowTop{
                    background: #fff;
                    font-style: normal;
                    color: #5d5b5c;
                    font-size: 20px;
                    line-height: 70px;
                    border-radius: 8px 8px 0 0;
                    height: 70px;
                    text-align: center;
                }
                .loginxx{
                    box-sizing: border-box;
                    padding:20px 40px;
                    input{
                        display: block;
                        line-height: 40px;
                        width:100%;
                        margin-bottom:20px;
                        font-size: 12px;
                        height:40px;
                        outline: none;
                        border:1px solid #eee;
                        text-indent: 10px;
                        border-radius: 2px;
                    }
                    .slice{
                        position: relative;
                        width:100%;
                        height:40px;
                        p{
                            line-height: 40px;
                            background-color: #F0F0F0;
                            font-size: 12px;
                            text-align: center;
                            color: #51555c;
                        }
                        .slicep{
                            position: absolute;
                            top: 0;
                            left: 0;
                            background-color: #7AC23C;
                            height:40px;
                            color:#fff;
                            font-size: 12px;
                            text-align: center;
                            line-height: 40px;
                        }
                        .block{
                            position: absolute;
                            z-index: 999;
                            opacity: 0;
                            left: 30px;
                            top: 0;
                            width:90%;
                            height:38px;
                            line-height: 38px;
                            margin-top:1px;
                            text-align: center;
                            box-shadow: 0 0 1px 1px #eee;
                            background: #fff;
                            background: transparent;
                        }
                        span{
                            position: absolute;
                            left: 0;
                            top: 0;
                            display: block;
                            width:50px;
                            text-align: center;
                            height:40px;
                            background-color: #f3a54d;
                            border-radius: 0px;
                            background: url(../../assets/images/hua.png) no-repeat center center;
                            background-size: 100% 100%;
                        }
                    }
                    .inof{
                        display: flex;
                        margin-top:20px;
                        input{
                            border:1px solid #eee;
                            width:64%;
                        }
                        p{
                            display: block;
							margin: 0;
                            width:36%;
                            text-align: center;
                            line-height: 40px;
                            font-size: 12px;
                            background-color: #F0F0F0;
                            color:#f3a54d;
                        }
                    }
                    button{
                        text-align: center;
                        line-height: 40px;
                        margin-top: 30px;
                        height: 40px;
                        border-radius: 5px;
                        background: #F3A54D;
                        color: #fff;
                        width: 100%;
                        font-size: 16px;
                        outline: none;
                        border:none;
                        letter-spacing: 6px;
                    }
                    .rlogin{
                        margin-top:20px;
                        display: flex;
                        line-height: 20px;
                        justify-content: space-between;
                        p,span{
                            font-size: 12px;
                        }
                        span{
							cursor: pointer;
                            color:#f3a54d;
                        }
                    }
                }
            }
        }
        .egisteredFooter{
            p{
                width:1200px;
                line-height: 100px;
                margin:auto;
                text-align: center;
            }
        }
        .agreement{
            position: fixed;
            z-index: 99999;
            width:100%;
            height:100%;
            left: 0;
            top: 0;
            background-color: rgba(0, 0, 0, .3);
			@media screen and (max-width: 600px) {
			    .father {
			        width: 90%;
			    }
			}
			@media screen and (min-width: 600px) {
			    .father {
			        width:750px;
			    }
			}
            .father{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                height:550px;
                background-color: #fff;
                overflow: auto;
				border-radius: 5px;
                .xieyi{
					position: fixed;
					border:none;
					width: inherit;
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    padding:0 20px;
                    height:46px;
                    line-height: 46px;
                    background-color: #F8F8F8;
					border-radius: 5px;
					p{
						width: 90%;
						border-radius: 5px;
						text-align: center;
						font-size: 18px;
						font-weight: 600;
					}
                    i{
						cursor: pointer;
                        font-size: 30px;
						&:hover{
							color:#f3a54d;
						}
                    }
                }
            }
        }
        .message{
            position: fixed;
            z-index: 999;
            top:20px;
            left: 0;
            right: 0;
            margin: auto;
            width:300px;
            line-height: 50px;
            background-color: #7AC23C;
            text-align: center;
            border-radius: 4px;
            color:#fff;
            transition: .4s;
        }
        .show{
            top:40px;
            transform: rotateX(0);
        }
        .hide{
            transform: rotateX(90deg);
            top:10px;
        }
    }
</style>