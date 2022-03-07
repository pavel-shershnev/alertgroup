<template>
  <div class="main">
    <div class="main__container">
      <div class="main__page page">

          <header class="page__header _container"><h1>Lorem ipsum dolor sit</h1></header>

          <div class="page__filters filters _container _filters">
<!-- ********************************** -->
            <div class="filters__column">
              <div class="filter__title"><h3>КОМНАТЫ</h3></div>
              <div class="filter__items">
                <div class="filter__checkbox">XS</div>
                <div class="filter__checkbox _green">1k</div>
                <div class="filter__checkbox">2k</div>
                <div class="filter__checkbox">3k</div>
                <div class="filter__checkbox">4k</div>
              </div>
            </div>
            <div class="vertborder">
            </div>
<!-- ********************************** -->
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
<!-- ********************************** -->
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
<!-- ********************************** -->
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
              <div class="filter__button">Применить</div>
              <div class="filter_cancel__items">
                <div class="filter__cancel">Сбросить фильтр</div>
                <hr class="filter__hr">
              </div>
            </div>
          </div>

          <div class="page__flats _container flat">
            <div class="flat__card" v-for="(item, idx) in data" :key="idx">
              <div class="flat__top top _card-container">
                <div class="top__left">{{item.floor}} этаж</div>
                <div class="top__right">
                  {{item.rooms}} комнатная
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
    };
  },
  mounted() {
    this.data = this.$store.getters.getData;
    console.log('this.data', this.data);
  },
  components: {},
};
</script>
