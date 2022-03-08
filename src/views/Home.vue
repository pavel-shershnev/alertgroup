<template>
  <div class="main">
    <div class="main__container">
      <div class="main__page page">

          <header class="page__header _container"><h1>Lorem ipsum dolor sit</h1></header>

          <div class="page__filters filters _container _filters">
<!-- ******filter by flat size**************************** -->
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
<!-- ******filter by floor**************************** -->
            <div class="filters__column">
              <div class="filter__title"><h3>ЭТАЖ</h3></div>
              <div class="filter__items">
                <div class="filter__input"><input type="text" v-model="floorsFilter[0]"></div>
                <div class="filter__u">-</div>
                <div class="filter__input"><input type="text" v-model="floorsFilter[1]"></div>
              </div>
              <div class="filter__range-slider">
                <v-range-slider
                  v-model="floorsFilter"
                  max="10"
                  min="1"
                  hide-details
                  class="align-center"
                  thumb-color="#70D24E"
                  track-color="#D8D8D8"
                  track-fill-color="#70D24E"
                >
                </v-range-slider>
              </div>
            </div>
            <div class="vertborder">
            </div>
<!-- ******filter by square**************************** -->
            <div class="filters__column">
              <div class="filter__title"><h3>ПЛОЩАДЬ, м<sup>2</sup></h3></div>
              <div class="filter__items">
                <div class="filter__input"><input type="text" v-model="squareFilter[0]"></div>
                <div class="filter__u">-</div>
                <div class="filter__input"><input type="text" v-model="squareFilter[1]"></div>
              </div>
              <div class="filter__range-slider">
                <v-range-slider
                  v-model="squareFilter"
                  max="99"
                  min="1"
                  hide-details
                  class="align-center"
                  thumb-color="#70D24E"
                  track-color="#D8D8D8"
                  track-fill-color="#70D24E"
                >
                </v-range-slider>
              </div>
            </div>
            <div class="vertborder">
            </div>
<!-- ******filter by price**************************** -->
            <div class="filters__column">
              <div class="filter__title"><h3>СТОИМОСТЬ, млн. р.</h3></div>
              <div class="filter__items">
                <div class="filter__input"><input type="text" v-model="priceFilter[0]"></div>
                <div class="filter__u">-</div>
                <div class="filter__input"><input type="text" v-model="priceFilter[1]"></div>
              </div>
              <div class="filter__range-slider">
                <v-range-slider
                  v-model="priceFilter"
                  max="10"
                  min="1"
                  step="0.01"
                  hide-details
                  class="align-center"
                  thumb-color="#70D24E"
                  track-color="#D8D8D8"
                  track-fill-color="#70D24E"
                >
                </v-range-slider>
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

          <div class="page__flats _container flat" v-if="filteredData.length !==0">
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
          <div class="page__flats _container flat page__header" v-else>
            <h3>Нет квартир по данным фильтрам</h3>
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
      filteredData: [],

      flatSizeFilter: ['XS', '1k', '2k', '3k', '4'],
      isActiveXS: true,
      isActive1k: true,
      isActive2k: true,
      isActive3k: true,
      isActive4k: true,

      floorsFilter: [1, 10],
      squareFilter: [1, 99],
      priceFilter: [1, 10],
    };
  },
  computed: {
  },
  methods: {
    applyFilters() {
      this.filteredData = this.data
        .filter((flat) => this.flatSizeFilter.includes(flat.size))
        .filter((flat) => flat.floor >= this.floorsFilter[0]
        && flat.floor <= this.floorsFilter[1])
        .filter((flat) => flat.square >= this.squareFilter[0]
        && flat.square <= this.squareFilter[1])
        .filter((flat) => flat.price / 1000000 >= this.priceFilter[0]
        && flat.price / 1000000 <= this.priceFilter[1]);
    },
    clearFilters() {
      this.filteredData = this.data;
      this.flatSizeFilter = ['XS', '1k', '2k', '3k', '4'];
      this.isActiveXS = true;
      this.isActive1k = true;
      this.isActive2k = true;
      this.isActive3k = true;
      this.isActive4k = true;
      this.floorsFilter = [1, 10];
      this.squareFilter = [1, 99];
      this.priceFilter = [1, 10];
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
