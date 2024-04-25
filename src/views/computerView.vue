<template>
    <div id="ComputerView">
        <div id="content" style="padding: 50px;height: calc(100vh)" align="center">
            <img src="../assets/image/tuojie_logo.png" style="width: 200px;border-radius: 80px;margin-top: 30px;">
            <h1>
                <span id="productName">启麓 OpenRoad</span>
            </h1>
            <p style="font-size: 50px;font-weight: bold;">
                知识问答 || 智能创作 || 语音聊天
            </p>

            <vs-row justify="space-around" align="center">
                <vs-col w="2">
                    <vs-button icon color="dribbble" size="xl" flat style="padding: 20px;"
                        @click="openDownloadAlert('iOS')">
                        <i class='bx bxl-apple'></i>
                        iOS
                    </vs-button>
                </vs-col>

                <vs-col w="2">
                    <vs-button icon color="dribbble" size="xl" flat style="padding: 20px;"
                        @click="openDownloadAlert('android')">
                        <i class='bx bxl-android'></i>
                        android
                    </vs-button>
                </vs-col>

                <vs-col w="2">
                    <vs-button icon color="dribbble" size="xl" flat style="padding: 20px;"
                        @click="openDownloadAlert('windows')">
                        <i class='bx bxl-windows'></i>
                        windows
                    </vs-button>
                </vs-col>

                <vs-col w="2">
                    <vs-button icon color="dribbble" size="xl" flat style="padding: 20px;"
                        @click="openDownloadAlert('harmonyos')">
                        <i class='bx bx-radio-circle'></i>
                        harmonyos
                    </vs-button>
                </vs-col>

                <vs-col w="2">
                    <vs-button icon color="dribbble" size="xl" flat style="padding: 20px;"
                        @click="openDownloadAlert('macOS')">
                        <i class='bx bxl-apple'></i>
                        macOS
                    </vs-button>
                </vs-col>

                <vs-col w="2">
                    <vs-button icon color="dribbble" size="xl" flat style="padding: 20px;"
                        @click="openDownloadAlert('more')">
                        <i class='bx bxs-extension'></i>
                        更多版本
                    </vs-button>
                </vs-col>
            </vs-row>

            <p style="color: grey;font-size: 20px;"><i class='bx bxs-chevrons-down'></i></p>

        </div>

        <div id="footer" style="padding: 20px;">
            <p>
                <a href="https://www.tuojiekj.top">字节漫游</a>
                |
                <a href="https://vip.openroad.tuojiekj.top">星会员</a>
                |
                <a href="https://kf.openroad.tuojiekj.top">客服中心</a>
                |
                使用 <a href="https://hyperos.mi.com/font/rare-word">MiSans</a> 书写文本
            </p>
            <p>Copyright © 2023 - 2024 PointerWandering. All Rights Reserved. 指针漫游 版权所有</p>
        </div>

        <vs-dialog not-center v-model="alertInfo.alertActive">
            <template #header>
                <h4 class="not-margin">
                    <b>{{ alertInfo.alertTitle }}</b>
                </h4>
            </template>


            <div class="con-content">
                <p>
                    {{ alertInfo.alertContent }}
                </p>
            </div>

            <template #footer>
                <div class="con-footer">
                    <vs-button @click="alertInfo.alertActive = false" transparent>
                        确认
                    </vs-button>
                </div>
            </template>
        </vs-dialog>
    </div>
</template>


<script>
export default {
    name: "ComputerView",
    data() {
        return {
            alertInfo: { alertActive: false, alertTitle: "", alertContent: "" }
        }
    },
    mounted() {

    },
    methods: {
        NavigationToPage(pathname) {
            this.active = pathname
            if (pathname != this.currentllyNavItem) {
                this.$router.replace(pathname)
                this.currentllyNavItem = pathname
            } else {
                return
            }
        },
        is_andriod_ios() {
            var u = navigator.userAgent;
            return {
                //移动终端浏览器版本信息
                trident: u.indexOf("Trident") > -1, //IE内核
                presto: u.indexOf("Presto") > -1, //opera内核
                webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
                gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
                mobile:
                    !!u.match(/AppleWebKit.*Mobile/i) ||
                    !!u.match(
                        /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
                    ), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
                iPhone: u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf("iPad") > -1, //是否iPad
                webApp: u.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
            };
        },
        openDownloadAlert(type) {
            if (type != "android") {
                this.alertInfo = { alertActive: true, alertTitle: "提示", alertContent: "更多版本正在开发中！小主稍安勿躁！" }
            } else {
                if (this.is_andriod_ios.ios) {
                    this.alertInfo = { alertActive: true, alertTitle: "提示", alertContent: "你的设备不被允许下载安卓APP" }
                } else {
                    const fileUrl = "../assets/app/openroad.apk"; // 文件的URL地址
                    const link = document.createElement('a');
                    link.href = fileUrl;
                    link.setAttribute('download', "openroad.apk");
                    link.click();
                }
            }
        }

    }
}
</script>

<style>
@import '../assets/font/font.css';

#ComputerView {
    font-family: 'MiSans_re';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: url("../assets/image/background.png");
}

#productName {
    background: linear-gradient(90deg, #3d36ce, #71c3ff 35%, #aeacff 65%, #f8a9ff);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 100px;
}

a {
    text-decoration: none;
    color: black;
}
</style>