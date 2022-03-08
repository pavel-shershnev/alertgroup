<template>
  <div class="main">
    <div class="main__container">
      <div class="main__page page">

          <header class="page__header _container"><h1>Lorem ipsum dolor sit</h1></header>

          <div class="page__filters filters _container _filters">
<!-- ******filter flat size**************************** -->
            <div class="filters__column">
              <div class="filter__title"><h3>КОМНАТЫ</h3></div>
              <div class="filter__items">
                <div class="filter__checkbox" :class="isActiveXS ? '_green' : '' ">
                  <label for="XS" @click="isActiveXS = !isActiveXS"></label>
                  <input type="checkbox" id="XS" value="XS" v-model="flatSizeFilter">
                  XS
                </div>
                <div class="filter__checkbox" :class="isActive1k ? '_green' : '' ">
                  <label for="1k" @click="isActive1k = !isActive1k"></label>
                  <input type="checkbox" id="1k" value="1k" v-model="flatSizeFilter">
                  1k
                </div>
                <div class="filter__checkbox" :class="isActive2k ? '_green' : '' ">
                  <label for="2k" @click="isActive2k = !isActive2k"></label>
                  <input type="checkbox" id="2k" value="2k" v-model="flatSizeFilter">
                    2k
                </div>
                <div class="filter__checkbox" :class="isActive3k ? '_green' : '' ">
                  <label for="3k" @click="isActive3k = !isActive3k"></label>
                  <input type="checkbox" id="3k" value="3k" v-model="flatSizeFilter">
                  3k
                </div>
                <div class="filter__checkbox" :class="isActive4k ? '_green' : '' ">
                  <label for="4k" @click="isActive4k = !isActive4k"></label>
                  <input type="checkbox" id="4k" value="4" v-model="flatSizeFilter">
                  4k
                </div>
              </div>
            </div>
            <div class="vertborder">
            </div>
<!-- ******filter**************************** -->
            <div class="filters__column">
              <div class="filter__title"><h3>ЭТАЖ</h3></div>
              <div class="filter__items">
                <div class="filter__input">1</div>
                <div class="filter__u">-</div>
                <div class="filter__input">99</div>
              </div>
              <div class="filter__range-slider">
                <!-- v-model="range" -->
              <v-range-slider
                max="100"
                min="0"
                hide-details
                class="align-center"
                thumb-color="#70D24E"
                track-color="#D8D8D8"
                track-fill-color="#70D24E"

              >
            <!-- <template v-slot:prepend>
              <v-text-field
                :value="range[0]"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(range, 0, $event)"
              ></v-text-field>
            </template> -->
            <!-- <template v-slot:append>
              <v-text-field
                :value="range[1]"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(range, 1, $event)"
              ></v-text-field>
            </template> -->
          </v-range-slider>
              </div>
            </div>
            <div class="vertborder">
            </div>
<!-- ******filter**************************** -->
            <div class="filters__column">
              <div class="filter__title"><h3>ПЛОЩАДЬ, м<sup>2</sup></h3></div>
              <div class="filter__items">
                <div class="filter__input">1</div>
                <div class="filter__u">-</div>
                <div class="filter__input">99</div>
              </div>
            </div>
            <div class="vertborder">
            </div>
<!-- ******filter**************************** -->
            <div class="filters__column">
              <div class="filter__title"><h3>СТОИМОСТЬ, млн. р.</h3></div>
              <div class="filter__items">
                <div class="filter__input">1</div>
                <div class="filter__u">-</div>
                <div class="filter__input">99</div>
              </div>
            </div>
            <div class="vertborder">
            </div>
<!-- ********************************** -->
            <div class="filters__column _revers">
              <div class="filter__button" @click="applyFilters">Применить</div>
              <div class="filter_cancel__items">
                <div class="filter__cancel" @click="clearFilters">Сбросить фильтр</div>
                <hr class="filter__hr">
              </div>
            </div>
          </div>

          <div class="page__flats _container flat">
            <div class="flat__card" v-for="(item, idx) in filteredData" :key="idx">
              <div class="flat__top top _card-container">
                <div class="top__left">{{item.floor}} этаж</div>
                <div class="top__right">
                  {{item.rooms}} комн.({{item.size}})
                  <span>-</span>
                  {{item.square}}м<sup>2</sup>
                </div>
              </div>
              <div class="flat__content  flat-content">
                <div class="flat-content__top">
                  <div class="flat-content__flat-number">№{{item.number}}</div>
                </div>
                <div class="flat-content__image">
                  <img src="../assets/img/image 3.jpg" alt="план квартиры">
                </div>
              </div>
              <div class="flat__footer footer-flat">
                <div class="footer-flat__cost">{{item.price}}р.</div>
                <div class="footer-flat__square">
                  {{Math.round(item.price / item.square)}}р. за м<sup>2</sup>
                </div>
              </div>
              <div class="flat__button">Подробнее</div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      data: [],
      flatSizeFilter: [],
      isActiveXS: false,
      isActive1k: false,
      isActive2k: false,
      isActive3k: false,
      isActive4k: false,
      filteredData: [],
    };
  },
  computed: {
  },
  methods: {
    applyFilters() {
      this.filteredData = this.data.filter((flat) => this.flatSizeFilter.includes(flat.size));
    },
    clearFilters() {
      this.filteredData = this.data;
      this.flatSizeFilter = [];
      this.isActiveXS = false;
      this.isActive1k = false;
      this.isActive2k = false;
      this.isActive3k = false;
      this.isActive4k = false;
    },
  },
  mounted() {
    this.data = this.$store.getters.getData;
    this.filteredData = this.data;
    console.log('this.data', this.data);
  },
  components: {},
};
</script>
