<template>
  <div class="w-full flex justify-center md:px-32 md:py-32">
    <div class="max-w-[840px] bg-fff md:rounded-8 shadow-2xl p-20">
      <div class="title text-28 md:text-32" style="text-align: center">
        Personal Information Collection Statement
      </div>
      <div class="text">
        We will collect personal information that you actively provide and
        collect through automated means when you use product features and
        services. The specific functions and corresponding personal information
        are as follows:
      </div>

      <div class="sub_title text-18 md:text-24">
        1. Mobile number, registered account information, and public information
        shared by third-party platforms that register and authorize (account,
        avatar, nickname).
      </div>
      <ul>
        <li>
          1.1 When you log in with WeChat, we will obtain your WeChat virtual
          account ID, avatar, nickname, and gender through your authorization.
        </li>
        <li>
          1.2 When you use the “One-click login” function or “Mobile phone SMS
          verification code” method to log in, we will obtain the mobile phone
          number you provided. We will send text messages and MMS to your mobile
          phone number to provide you with content you may be interested in. If
          you do not wish to receive such information, you can unsubscribe
          through the method provided in the SMS.
        </li>
      </ul>

      <div class="sub_title text-18 md:text-24">2. Payment information</div>
      <div class="text">
        When you withdraw or pay, we will obtain the payment information shared
        by you through the third-party payment platform, but
        we will not obtain other information including payment account,
        password, fingerprint password.
      </div>

      <div class="sub_title text-18 md:text-24">3. Device information</div>
      <div class="text">
        In order to protect your account security and system security, we will
        obtain device model, system version, network type, IDFA, device ID, APP
        crash record, traffic statistics, operation log, device OAID, MEID,
        SSID, MAC address, IMSI, Android ID, IP address, device hardware serial
        number, device brand, device model, network conditions, and maintain
        product services. In addition, IMEI will also be used to associate user
        behavior. If you have not authorized the above device information, the
        number of novels and advertisements you see will not change, but the
        relevance will decrease and some activities will not be able to
        participate normally.
      </div>

      <div class="sub_title text-18 md:text-24">4. Clipboard</div>
      <div class="text">
        When the following situations occur, we need to read your clipboard
        information, but we will not collect or use your clipboard’s privacy
        information outside of this product.
      </div>
      <ul>
        <li>4.1 When selecting paste information for “Feedback”.</li>
        <li>
          4.2 When using a mobile phone number to log in, use the verification
          code to log in and enter the verification code.
        </li>
        <li>
          4.3 To determine whether you participate in specific activities we
          carry out with third parties, we will read your clipboard content to
          identify whether there is relevant command code information when
          starting this software. Only when the current clipboard has this
          command information, we will collect this information for verification
          and feedback to you activity benefits. But please rest assured that we
          will not store and interpret other information in your clipboard.
        </li>
      </ul>

      <div class="sub_title text-18 md:text-24">
        5. Application list information
      </div>
      <div class="text">
        When the following situations occur, we will read your application list
        information to identify whether you have downloaded related software.
      </div>
      <ul>
        <li>5.1 When you click to enter the “Welfare Center” page.</li>
        <li>5.2 When you watch advertisements.</li>
        <li>
          5.3 When you click on an advertisement to download related software.
        </li>
      </ul>

      <div class="sub_title text-18 md:text-24">6. Clipboard:</div>
      <div class="text">
        When the following situations occur, we need to read your clipboard
        information, but we will not collect or use your clipboard’s privacy
        information outside of this product.
      </div>
      <ul>
        <li>
          6.1 Participate in “Invite Friends” and copy the invitation code.
        </li>
        <li>6.2 Select paste information when giving “Feedback”.</li>
        <li>
          6.3 Use the verification code to log in and enter the verification
          code when logging in.
        </li>
        <li>
          6.4 To determine whether you participate in specific activities we
          carry out with third parties, we will read your clipboard content to
          identify whether there is relevant command code information when
          starting this software. Only when the clipboard has such command
          information, we will collect this information for verification and
          feedback to you activity benefits. But please rest assured that we
          will not store and interpret other information in your clipboard.
        </li>
      </ul>

      <div class="sub_title text-18 md:text-24">7. Calendar information:</div>
      <div class="text">
        The system calendar information obtained for the implementation of the
        punch-in/sign-in reminder function.
      </div>

      <div class="sub_title text-18 md:text-24">
        8. Information collected for personalized content recommendation:
      </div>
      <div class="text">
        In order to protect your account security and system security, we will
        obtain device model, system version, network type, IDFA, device ID, APP
        crash record, traffic statistics, operation log, device OAID, MEID,
        SSID, MAC address, IMSI, Android ID, IP address, device hardware serial
        number, device brand, device model, network conditions, and maintain
        product services. In addition, IMEI will also be used to associate user
        behavior. If you have not authorized the above device information, the
        number of novels and advertisements you see will not change, but the
        relevance will decrease and some activities will not be able to
        participate normally.
      </div>
      <ul>
        <li>
          8.1 Viewing history: Includes your viewing records (novels watched
          using the same account) and novel collection records (all novels
          collected in the chase using the same account).
        </li>
        <li>
          8.2 Viewing behavior: Includes viewing preferences, viewing novels,
          start viewing time, last viewing time, viewing duration.
        </li>
        <li>8.3 Device brand, device model, system version.</li>
      </ul>

      <div class="sub_title text-18 md:text-24">
        9. Other information you actively provide:
      </div>
      <div class="text">
        Such as the contact information you fill in when using the feedback
        function, uploaded pictures.
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
    const host = window.location.host
  const regex = /(?:www\.)?([a-zA-Z0-9-]+)\.com/
  const dataObj = await dataFetch(mock, host.match(regex)?.[1] || 'comon')
  name.value = dataObj.name
  data.value = dataObj.data
})
</script>
<style lang="scss" scoped>
.title {
  color: #333;
  line-height: 1.2;
  font-weight: 600;
  margin: 22px 0;
}
.sub_title {
  color: #333;
  line-height: 1.2;
  font-weight: 600;
  margin: 20px 0;
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
