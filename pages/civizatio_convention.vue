<template>
  <div class="w-full flex justify-center md:px-32 md:py-32 leading-1.6">
    <div class="max-w-[840px] bg-fff md:rounded-8 shadow-2xl p-20">
      <div class="title text-28 md:text-32" style="text-align: center">
        National Youth Internet Civilization Convention
      </div>
      <div class="text">
        To enhance the awareness of young people to consciously resist bad
        information online, the “Ancient Language Theater” app calls on the
        majority of young people to actively learn the “National Youth Internet
        Civilization Convention”, enhance the awareness of protection, and surf
        the internet safely and civilly!
      </div>

      <div class="sub_title text-18 md:text-24">
        National Youth Internet Civilization Convention
      </div>
      <ul>
        <li>Be good at online learning, do not browse bad information;</li>
        <li>
          Be honest and friendly in communication, do not insult or deceive
          others;
        </li>
        <li>Maintain network security, do not disrupt network order;</li>
        <li>
          Be beneficial to physical and mental health, do not indulge in virtual
          space.
        </li>
      </ul>

      <div class="sub_title text-18 md:text-24">Interpretation</div>
      <div class="sub_title_1 text-16 md:text-20">
        1. Be good at online learning, do not browse bad information.
      </div>
      <div class="text">
        Meaning: Use the internet as a new tool for extracurricular learning and
        a new way to understand the world. Do not contact or browse
        inappropriate content related to pornography, hatred, violence, cults,
        or incitement to illegal activities. If you have already come into
        contact with this bad information, tell your parents and teachers in
        time to get help.
      </div>
      <div class="sub_title_1 text-16 md:text-20">
        2. Be honest and friendly in communication, do not insult or deceive
        others.
      </div>
      <div class="text">
        Meaning: When communicating through the internet, still be polite to
        people, do not use foul language; be sincere in attitude, do not deceive
        others; respect etiquette, do not do whatever you want. In short,
        respect others, and you will be respected by others.
      </div>
      <div class="sub_title_1 text-16 md:text-20">
        3. Enhance self-protection awareness, do not casually meet with
        netizens.
      </div>
      <div class="text">
        Meaning: Do not disclose any information about your family, including
        name, address, phone number, etc.; do not easily believe others; do not
        meet friends online without the consent of your parents; do not
        increasingly provoke maliciously; do not participate in bad online
        games, etc. When you encounter information that makes you uncomfortable,
        do not reply and immediately tell your parents and teachers.
      </div>
      <div class="sub_title_1 text-16 md:text-20">
        4. Maintain network security, do not disrupt network order.
      </div>
      <div class="text">
        Meaning: Dare to take on the responsibility of the “Network Security
        Messenger”. On the premise of ensuring that you do not participate in
        activities that violate morals and laws, for the little friends around
        you who have bad behaviors, you should persuade or tell parents and
        teachers.
      </div>
      <div class="sub_title_1 text-16 md:text-20">
        5. Be beneficial to physical and mental health, do not indulge in
        virtual space.
      </div>
      <div class="text">
        Meaning: Cultivate the ability to self-discipline. Make some internet
        rules, post them near the computer, and remind yourself all the time;
        each continuous internet time does not exceed 1 hour, insist on doing
        eye exercises; make a study plan, do not blindly surf the internet;
        insist on outdoor running, ensure a healthy body.
      </div>

      <div class="text">
        The internet presents a brand new life picture in front of us. At the
        same time, a beautiful internet life also needs us to create it with our
        own virtues and civilization. Let us actively respond to the call of the
        “National Youth Internet Civilization Convention”, start from me, start
        from now, self-respect, self-discipline, civilized internet!
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
  font-weight: 600;
  margin: 22px 0;
}
.sub_title {
  color: #333;
  font-weight: 600;
  margin: 20px 0;
}
.text {
  color: #444;
  margin: 16px 0;
  font-family: 'Arial, sans-serif';
}
li {
  color: #666;
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
