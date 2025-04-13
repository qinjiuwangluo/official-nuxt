<template>
  <div class="w-full flex justify-center md:px-32 md:py-32">
    <div class="w-full max-w-[840px] bg-fff md:rounded-8 shadow-2xl p-20">
      <div class="title text-28 md:text-32">
        Third-Party Sharing of Personal Information
      </div>
      <div class="w-full overflow-x-scroll">
        <table>
          <thead>
            <tr>
              <th>Third Party Company Name</th>
              <th>Product Type</th>
              <th>Shared Information Name</th>
              <th>Purpose of Usage</th>
              <th>When to be Used</th>
              <th>Sharing Method</th>
              <th>Privacy Policy Link</th>
              <th>Code Package Name</th>
              <th>Embedded Related SDK</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Beijing Baidu Netcom Science and Technology Co., Ltd.</td>
              <td>Baidu Advertising</td>
              <td>
                Device brand, Model, Software system version, Resolution,
                Network signal strength, Total disk space, System memory space,
                Screen width and height, Screen pixel density, System version
                number, Device manufacturer, Device model, Mobile operator, SIM
                card information, Mobile restart information, Mobile system
                update time, Mobile system creation time, IDFA (collected only
                on iOS), OAID and other basic information, IMEI (collected only
                on Android), Sensor information (used for innovative interactive
                ads such as shake), Network status (determine network status,
                provide different types of ads)
              </td>
              <td>Advertising monitoring and effectiveness evaluation</td>
              <td>When the user clicks on or views the advertisement</td>
              <td>SDK local collection</td>
              <td style="max-width: 200px; word-wrap: break-word">
                <a href="https://union.baidu.com/bqt#/policies" target="_blank"
                  >https://union.baidu.com/bqt#/policies</a
                >
              </td>
              <td>
                com.baidu.mobads.sdk, com.baidu.mobads.proxy, com.baidu.mobstat
              </td>
              <td>
                Baidu Mobile Statistics: Used for statistical analysis; Baidu
                Union Ads: Used for advertising/promotion.
              </td>
            </tr>
            <tr>
              <td>Hubei Toutiao Technology Co., Ltd.</td>
              <td>Pangle</td>
              <td>
                Device information (including hardware model, operating system
                version, device identifiers (IMEI, IMSI, MAC address, OAID,
                MEID, AndroidID, IDFA, IDFV)), your operation information
                (including advertising browsing, clicking, conversion and other
                related operation records), the overall installation and usage
                of the application, and other information provided by other
                partners authorized by you. The system will automatically
                analyze and calculate the above information, predict your
                preference characteristics, and provide personalized recommended
                advertisements and services based on the calculation results.
              </td>
              <td>Advertising monitoring and effectiveness evaluation</td>
              <td>When the user clicks on or views the advertisement</td>
              <td>SDK local collection</td>
              <td style="max-width: 200px; word-wrap: break-word">
                <a
                  href="https://ad.oceanengine.com/union/media/privacy"
                  target="_blank"
                  >https://ad.oceanengine.com/union/media/privacy</a
                >
              </td>
              <td>
                com.bykv.vk, com.bytedance.embedapplog, bykvm_19do.bykvm_19do,
                com.bytedance, com.bytedance.msdk.adapter.pangle,
                com.ss.android, com.bytedance.sdk, com.bytedance.mobsec, ms.bd.c
              </td>
              <td>
                Toutiao Reward Ads: Used for advertising/promotion; Byte Mobile
                Security SDK: Used for security/reinforcement.
              </td>
            </tr>
            <tr>
              <td>Tencent Technology (Beijing) Co., Ltd.</td>
              <td>Youlianghui</td>
              <td>
                Access to the internet, obtain phone status (permission to get
                phone IMEI below Android 10), OAID, AndroidID, read and write
                external storage devices, get phone wifi and network status,
                WIFI’s SSID name, install applications, location information,
                acceleration sensor, access to the program installation list
                permission; embedded third-party SDK: MMA China advertising
                monitoring universal SDK (device hardware information: hardware
                type (model), screen size, IMEI, MAC, AAID, MEID/ESN, OAID;
                device system information: operating system type, operating
                system version; device network information: WIFI information
                (name, BSSID; device location information: latitude and
                longitude).
              </td>
              <td>Advertising monitoring and effectiveness evaluation</td>
              <td>When the user clicks on or views the advertisement</td>
              <td>SDK local collection</td>
              <td style="max-width: 200px; word-wrap: break-word">
                <a
                  href="https://www.tencent.com/zh-cn/privacy-policy.html"
                  target="_blank"
                  >https://www.tencent.com/zh-cn/privacy-policy.html</a
                >
              </td>
              <td>com.qq.e</td>
              <td>
                Tencent Union Ads: Used for advertising/promotion; Tencent
                Browsing Service: Used for content browsing.
              </td>
            </tr>
            <tr>
              <td>Beijing Kuaishou Technology Co., Ltd.</td>
              <td>Kuaishou</td>
              <td>
                Device identification information (IMEI, MEID, IMSI, Android ID,
                IDFA, IDFV, UAID (China Mobile UAID, China Unicom UAID and China
                Telecom UAID, only for Android devices), OAID, ICCID, Openudid,
                GAID and other comprehensive device parameters and system
                information to form device identifiers, different identifiers
                will be different in validity period, whether they can be reset
                by users, acquisition methods and different systems), network
                device hardware address (MAC address), network-related
                information (WLAN access point (such as SSID, BSSID), Bluetooth,
                base station, IP address, network operator, network status,
                type, access method, network quality data), device parameter
                information (device name, device model, device serial number),
                software and hardware operating system information (application
                version, operating system, language, resolution).
              </td>
              <td>Advertising monitoring and effectiveness evaluation</td>
              <td>When the user clicks on or views the advertisement</td>
              <td>SDK local collection</td>
              <td style="max-width: 200px; word-wrap: break-word">
                <a
                  href="https://www.kuaishou.com/about/policy?tab=privacy"
                  target="_blank"
                  >https://www.kuaishou.com/about/policy?tab=privacy</a
                >
              </td>
              <td>
                com.ksad.download, com.kuaishou, com.kwad, com.kwai,
                com.tachikoma, com.yxcrop.kuaishou.addfp, com.kwad.sdk,
                com.yxcorp.kuaishou
              </td>
              <td>Kuaishou Ads: Used for advertising/promotion.</td>
            </tr>
            <tr>
              <td>Shenzhen Tencent Computer System Co., Ltd.</td>
              <td>Tencent Bugly</td>
              <td>
                Device unique identification code (ID, UUID, IMEI,
                AndroidID/OAID), SD card capacity, APP package name and version
                and its process name, Crash information and thread stack, device
                MAC address, IP address, access network permission, geographical
                location information, device model, operating system version,
                battery, signal strength.
              </td>
              <td>Analysis and statistics system errors</td>
              <td>Used when the user uses the APP</td>
              <td>SDK local collection</td>
              <td style="max-width: 200px; word-wrap: break-word">
                <a href="https://privacy.qq.com/" target="_blank"
                  >https://privacy.qq.com/</a
                >
              </td>
              <td>com.tencent.bugly</td>
              <td>　</td>
            </tr>
            <tr>
              <td>Shenzhen Tencent Computer System Co., Ltd.</td>
              <td>WeChat SDK</td>
              <td>
                Device model, operating system, unique device identifier (such
                as AndroidID/OAID on Android, IDFA before iOS 14.5), login IP
                address, WeChat software version number, the way, type and
                status of network access (such as SSID and BSSID), network
                quality data, device accelerators (such as gravity sensing
                devices), operation logs, service log information (such as your
                search and viewing operations in WeChat, service failure
                information, recommended URLs), applications installed, running
                processes, data stored in the device’s memory.
              </td>
              <td>
                Log in and share the page to WeChat friends and WeChat Moments
              </td>
              <td>Used when the user uses third-party login and sharing</td>
              <td>SDK local collection</td>
              <td style="max-width: 200px; word-wrap: break-word">
                <a
                  href="https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy"
                  target="_blank"
                  >https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy</a
                >
              </td>
              <td>com.tencent.mm</td>
              <td>　</td>
            </tr>
            <tr>
              <td>Alipay (China) Network Technology Co., Ltd.</td>
              <td>Alipay</td>
              <td>none</td>
              <td>Data statistics, promotion efficiency</td>
              <td>Used when the user launches the application</td>
              <td>SDK local collection</td>
              <td style="max-width: 200px; word-wrap: break-word">
                http://www.msa-alliance.cn/col.jsp?id=120
              </td>
              <td>none</td>
              <td></td>
            </tr>
            <tr>
              <td>Beijing Chuangzhi Technology Co., Ltd.</td>
              <td>Sigmob</td>
              <td>
                Device identifier (IMEI, GAID, OAID), device brand, device name,
                device model, device IP, UA, MAC address, WIFI SSID/BSSID,
                Android ID, device resolution, device width and height, device
                storage space, remaining disk size of the device, mobile
                operator, network status, system startup time, battery status,
                Bluetooth name, device language, time zone, country code,
                operating system version, system update time, application name,
                application version number, application installation list,
                device sensor information, geographical location.
              </td>
              <td>Advertising monitoring and effectiveness evaluation</td>
              <td>When the user clicks on or views the advertisement</td>
              <td>SDK local collection</td>
              <td style="max-width: 200px; word-wrap: break-word">
                <a
                  href="https://doc.sigmob.com/#/ToBid%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E9%9A%90%E7%A7%81%E6%9D%A1%E6%AC%BE/%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96/"
                  >https://doc.sigmob.com/#/ToBid%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E9%9A%90%E7%A7%81%E6%9D%A1%E6%AC%BE/%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96/</a
                >
              </td>
              <td>com.sigmob.sdk</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const name = ref('comon')
const data = ref({})
const mock = await useMock()
onMounted(async () => {
  const dataObj = await dataFetch(mock, window.location.host.split('.')[1])
  name.value = dataObj.name
  data.value = dataObj.data
})
</script>
<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
  text-align: left;
}
.title {
  color: #333;
  line-height: 1.2;
  font-size: 32px;
  font-weight: 600;
  margin: 22px 0;
}
.sub_title {
  color: #333;
  line-height: 1.2;
  font-weight: 600;
  margin: 20px 0;
}
.sub_title_1 {
  color: #333;
  line-height: 1.2;
  font-weight: 600;
  font-size: 18px;
  margin: 18px 0;
}
.text {
  color: #444;
  line-height: 1.6;
  margin: 16px 0;
  font-family: 'Arial, sans-serif';
}
li {
  color: #666;
  line-height: 1.6;
  margin: 10px 0 10px 20px;
  list-style-type: disc;
}
strong {
  padding-right: 10px;
}
a {
  text-decoration: underline;
  color: blue;
}
</style>
