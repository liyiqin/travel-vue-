<template>
  <div>
    <city-header></city-header>
    <city-search :cities="data.cities"></city-search>
    <city-list :cities="data.cities" :hot="data.hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="data.cities" @change="handleLetterClick"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './componets/Hearder';
import CitySearch from './componets/Search';
import CityList from './componets/List';
import CityAlphabet from './componets/Alphabet.vue';
import axios from 'axios';
import { onMounted, ref, reactive } from 'vue';
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  setup() {
    const { letter, handleLetterClick } = useLetterLogin();
    const { data } = useCityLogin();
    return { data, letter, handleLetterClick };
  },
};
function useCityLogin() {
  const data = reactive({
    cities: {},
    hotCities: [],
  });
  async function getCityInfo() {
    let res = await axios.get('/api/city.json');
    res = res.data;
    if (res.ret && res.data) {
      const result = res.data;
      data.cities = result.cities;
      data.hotCities = result.hotCities;
    }
  }
  onMounted(() => {
    getCityInfo();
  });
  return { data };
}
function useLetterLogin() {
  const letter = ref('');
  function handleLetterClick(selected) {
    letter.value = selected;
  }
  return { letter, handleLetterClick };
}
</script>

<style lang="stylus" scoped></style>
