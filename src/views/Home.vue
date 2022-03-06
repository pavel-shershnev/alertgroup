<template>
  <div class="main">
    <div class="main__container">
      <div class="main__page page">

          <div class="page__header _container"><h1>Lorem ipsum dolor sit</h1></div>

          <div class="page__filters filters _container _filters">
<!-- ********************************** -->
            <div class="filters__column">
              <div class="filter__title"><h3>КОМНАТЫ</h3></div>
              <div class="filter__items">
                <div class="filter__checkbox">S</div>
                <div class="filter__checkbox _green">1k</div>
                <div class="filter__checkbox">2k</div>
                <div class="filter__checkbox">3k</div>
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
              <v-range-slider
                v-model="range"
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
              <div class="filter__title"><h3>ПЛОЩАДЬ, м2</h3></div>
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
            <div class="flat__card">
              <div class="flat__top top _card-container">
                <div class="top__left">3 этаж</div>
                <div class="top__right">1 комната<span>-</span>22.94м</div>
              </div>
              <div class="flat__content  flat-content">
                <div class="flat-content__top">
                  <div class="flat-content__flat-number">№256</div>
                </div>
                <div class="flat-content__image">
                  <img src="../assets/img/image 3.jpg" alt="план квартиры">
                </div>
              </div>
              <div class="flat__footer footer-flat">
                <div class="footer-flat__cost">2 729 860р.</div>
                <div class="footer-flat__square">119 000 р. за м</div>
              </div>
              <div class="flat__button">Подробнее</div>
            </div>
            <!--  -->
            <div class="flat__card">
              <div class="flat__top top _card-container">
                <div class="top__left">3 этаж</div>
                <div class="top__right">1 комната<span>-</span>22.94м</div>
              </div>
              <div class="flat__content  flat-content">
                <div class="flat-content__top">
                  <div class="flat-content__flat-number">№256</div>
                </div>
                <div class="flat-content__image">
                  <img src="../assets/img/image 3.jpg" alt="план квартиры">
                </div>
              </div>
              <div class="flat__footer footer-flat">
                <div class="footer-flat__cost">2 729 860р.</div>
                <div class="footer-flat__square">119 000 р. за м</div>
              </div>
            </div>
            <!--  -->
            <div class="flat__card">
              <div class="flat__top top _card-container">
                <div class="top__left">3 этаж</div>
                <div class="top__right">1 комната<span>-</span>22.94м</div>
              </div>
              <div class="flat__content  flat-content">
                <div class="flat-content__top">
                  <div class="flat-content__flat-number">№256</div>
                </div>
                <div class="flat-content__image">
                  <img src="../assets/img/image 3.jpg" alt="план квартиры">
                </div>
              </div>
              <div class="flat__footer footer-flat">
                <div class="footer-flat__cost">2 729 860р.</div>
                <div class="footer-flat__square">119 000 р. за м</div>
              </div>
            </div>
            <!--  -->
            <div class="flat__card">
              <div class="flat__top top _card-container">
                <div class="top__left">3 этаж</div>
                <div class="top__right">1 комната<span>-</span>22.94м</div>
              </div>
              <div class="flat__content  flat-content">
                <div class="flat-content__top">
                  <div class="flat-content__flat-number">№256</div>
                </div>
                <div class="flat-content__image">
                  <img src="../assets/img/image 3.jpg" alt="план квартиры">
                </div>
              </div>
              <div class="flat__footer footer-flat">
                <div class="footer-flat__cost">2 729 860р.</div>
                <div class="footer-flat__square">119 000 р. за м</div>
              </div>
            </div>
            <!--  -->
            <div class="flat__card">
              <div class="flat__top top _card-container">
                <div class="top__left">3 этаж</div>
                <div class="top__right">1 комната<span>-</span>22.94м</div>
              </div>
              <div class="flat__content  flat-content">
                <div class="flat-content__top">
                  <div class="flat-content__flat-number">№256</div>
                </div>
                <div class="flat-content__image">
                  <img src="../assets/img/image 3.jpg" alt="план квартиры">
                </div>
              </div>
              <div class="flat__footer footer-flat">
                <div class="footer-flat__cost">2 729 860р.</div>
                <div class="footer-flat__square">119 000 р. за м</div>
              </div>
            </div>
            <!--  -->
            <div class="flat__card">
              <div class="flat__top top _card-container">
                <div class="top__left">3 этаж</div>
                <div class="top__right">1 комната<span>-</span>22.94м</div>
              </div>
              <div class="flat__content  flat-content">
                <div class="flat-content__top">
                  <div class="flat-content__flat-number">№256</div>
                </div>
                <div class="flat-content__image">
                  <img src="../assets/img/image 3.jpg" alt="план квартиры">
                </div>
              </div>
              <div class="flat__footer footer-flat">
                <div class="footer-flat__cost">2 729 860р.</div>
                <div class="footer-flat__square">119 000 р. за м</div>
              </div>
            </div>
            <!--  -->
            <div class="flat__card">
              <div class="flat__top top _card-container">
                <div class="top__left">3 этаж</div>
                <div class="top__right">1 комната<span>-</span>22.94м</div>
              </div>
              <div class="flat__content  flat-content">
                <div class="flat-content__top">
                  <div class="flat-content__flat-number">№256</div>
                </div>
                <div class="flat-content__image">
                  <img src="../assets/img/image 3.jpg" alt="план квартиры">
                </div>
              </div>
              <div class="flat__footer footer-flat">
                <div class="footer-flat__cost">2 729 860р.</div>
                <div class="footer-flat__square">119 000 р. за м</div>
              </div>
            </div>
            <!--  -->
            <div class="flat__card">
              <div class="flat__top top _card-container">
                <div class="top__left">3 этаж</div>
                <div class="top__right">1 комната<span>-</span>22.94м</div>
              </div>
              <div class="flat__content  flat-content">
                <div class="flat-content__top">
                  <div class="flat-content__flat-number">№256</div>
                </div>
                <div class="flat-content__image">
                  <img src="../assets/img/image 3.jpg" alt="план квартиры">
                </div>
              </div>
              <div class="flat__footer footer-flat">
                <div class="footer-flat__cost">2 729 860р.</div>
                <div class="footer-flat__square">119 000 р. за м</div>
              </div>
            </div>
            <!--  -->
            <div class="flat__card">
              <div class="flat__top top _card-container">
                <div class="top__left">3 этаж</div>
                <div class="top__right">1 комната<span>-</span>22.94м</div>
              </div>
              <div class="flat__content  flat-content">
                <div class="flat-content__top">
                  <div class="flat-content__flat-number">№256</div>
                </div>
                <div class="flat-content__image">
                  <img src="../assets/img/image 3.jpg" alt="план квартиры">
                </div>
              </div>
              <div class="flat__footer footer-flat">
                <div class="footer-flat__cost">2 729 860р.</div>
                <div class="footer-flat__square">119 000 р. за м</div>
              </div>
            </div>
            <!--  -->
            <div class="flat__card">
              <div class="flat__top top _card-container">
                <div class="top__left">3 этаж</div>
                <div class="top__right">1 комната<span>-</span>22.94м</div>
              </div>
              <div class="flat__content  flat-content">
                <div class="flat-content__top">
                  <div class="flat-content__flat-number">№256</div>
                </div>
                <div class="flat-content__image">
                  <img src="../assets/img/image 3.jpg" alt="план квартиры">
                </div>
              </div>
              <div class="flat__footer footer-flat">
                <div class="footer-flat__cost">2 729 860р.</div>
                <div class="footer-flat__square">119 000 р. за м</div>
              </div>
            </div>
            <!--  -->
            <div class="flat__card">
              <div class="flat__top top _card-container">
                <div class="top__left">3 этаж</div>
                <div class="top__right">1 комната<span>-</span>22.94м</div>
              </div>
              <div class="flat__content  flat-content">
                <div class="flat-content__top">
                  <div class="flat-content__flat-number">№256</div>
                </div>
                <div class="flat-content__image">
                  <img src="../assets/img/image 3.jpg" alt="план квартиры">
                </div>
              </div>
              <div class="flat__footer footer-flat">
                <div class="footer-flat__cost">2 729 860р.</div>
                <div class="footer-flat__square">119 000 р. за м</div>
              </div>
            </div>
            <!--  -->
            <div class="flat__card">
              <div class="flat__top top _card-container">
                <div class="top__left">3 этаж</div>
                <div class="top__right">1 комната<span>-</span>22.94м</div>
              </div>
              <div class="flat__content  flat-content">
                <div class="flat-content__top">
                  <div class="flat-content__flat-number">№256</div>
                </div>
                <div class="flat-content__image">
                  <img src="../assets/img/image 3.jpg" alt="план квартиры">
                </div>
              </div>
              <div class="flat__footer footer-flat">
                <div class="footer-flat__cost">2 729 860р.</div>
                <div class="footer-flat__square">119 000 р. за м</div>
              </div>
            </div>
            <!--  -->
          </div>

        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>
