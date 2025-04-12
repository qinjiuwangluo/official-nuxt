import { ref } from 'vue';

const cache = ref(null);
const useMock = async () => {
  if (!cache.value) {
    cache.value = await $fetch("/api/mock");
  }
  return cache.value;
};

export { useMock as u };
//# sourceMappingURL=useMockData-gb9asm_Q.mjs.map
