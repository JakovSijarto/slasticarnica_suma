<template>
  <div class="w-full flex justify-center flex-col items-center">
    <div class="w-[1350px] h-[720px] max-[1400px]:w-full">
      <img src="../assets/home/herophoto.jpg" alt="" class="w-full h-full pt-8 object-cover max-[1024px]:pt-0">
    </div>
    <div class="flex w-[1350px] flex-col items-center pt-[100px] pb-[45px] max-[1400px]:w-full">
      <p class="text-[#3d3d3d] uppercase leading-[1.3em] tracking-[0.1em] text-[28px] !font-normal text-center pb-4 mx-4">dobrodošli u šumu</p>
      <p class="italic text-[#444] text-[17px] tracking-[.05em] pb-[73px] text-center mx-4">gde pravimo kolače inspirisane prirodom</p>
      <div class="text-center flex w-[1350px] justify-between max-[1400px]:w-full px-4 max-[790px]:flex-col">
        <div>
          <router-link to="/torte">
            <img src="../assets/home/home-torte.jpg" alt="" class="w-[350px] h-[350px] max-[1080px]:w-[250px] max-[1080px]:h-[250px] object-cover max-[790px]:w-full max-[790px]:h-[350px]">
            <p class="mt-[10px] text-[#989898] font-bold max-[790px]:my-[2em] max-[790px]:mb-[4em]">TORTE</p>
          </router-link>
        </div>
        <div>
          <router-link to="/poklonkutije">
          <img src="../assets/home/home-poklon-kutije.jpg" alt="" class="w-[350px] h-[350px] max-[1080px]:w-[250px] max-[1080px]:h-[250px]  object-cover max-[790px]:w-full max-[790px]:h-[350px]">
          <p class="mt-[10px] text-[#989898] font-bold max-[790px]:my-[2em] max-[790px]:mb-[4em]">POKLON KUTIJE</p>
        </router-link>
        </div>
        <div>
          <router-link to="/kolacinakomad">
          <img src="../assets/home/home-kolaci.jpg" alt="" class="w-[350px] h-[350px] max-[1080px]:w-[250px] max-[1080px]:h-[250px]  object-cover max-[790px]:w-full max-[790px]:h-[350px]">
          <p class="mt-[10px] text-[#989898] font-bold max-[790px]:my-[2em] max-[790px]:mb-[4em]">KOLAČI</p> 
        </router-link>
        </div>
      </div>
    </div>
    <div class="w-[1350px] flex items-center gap-[3em] mb-[3em]  max-[1400px]:w-full px-4 max-[930px]:flex-col">
      <img src="../assets/home/home-first-photo.jpg" alt="" class="h-[350px] max-[930px]:w-full max-[930px]:h-[250px] object-cover">
      <p class="font-light text-[15px] leading-[27px] text-[#989898]">Torte i poslastice u Šumi su zdrave i hranljive kao obrok, a ukusne kao domaći kolači. Potrudili smo se da spojimo najbolje od oba sveta – da kolači budu kremasti, krckavi, sočni, da se tope, ali od sastojaka koji u sebi sadrže proteine, nezasićene masne kiseline, vlakna, vitamine i minerale. To postižemo tako što biramo čiste sastojke, osnovne sirovine koje bismo pojeli i u izvornom obliku – pogledajte sastojke naših kolača i videćete orašaste plodove, sveže voće i povrće, integralna brašna, začine i lekovito bilje. <br> <br> Pravimo putere od badema, lešnika i pistaća koje mešamo u kore i filove, pravimo domaći marcipan sa brašnom od koštica šljive, kao i vege mleka od kokosa, suncokreta, lešnika, badema koja koristimo u tortama, sladoledima i toplim napicima. Većina sastojaka u Šumi je stigla pravo ubrana sa drveta, polja ili livade. Torte ukrašavamo cvetovima kamilice i hibiskusa, lomljenim bademima i lešnicima, listovima sušene nane i žalfije. Trudimo se da svojim izgledom budu isto što su po sastavu i što bliže prirodi.</p>
    </div>
    <div class="w-[1350px] flex items-center gap-[3em] mb-[3em]  max-[1400px]:w-full px-4 max-[930px]:flex-col">
      <img src="../assets/home/home-second-photo.jpg" alt="" class="h-[350px] min-[930px]:hidden max-[930px]:w-full max-[930px]:h-[250px] object-cover">   
      <p class="font-light text-[15px] leading-[27px] text-[#989898]">Naše kolače možete poručiti na adresu ili ih probati kod nas u radnji, u Siminoj 22a, ispod Doma Vojske, kod Skadarske. Tu je naše skrovište u kom se možete i vi ušuškati ispod drveta limuna, uz prijatnu muziku i kafu.<br> <br>  Kafu nabavljamo od zanatske pržionice Zrno, posuđe od lokalne zanatske radionice porcelana Boya Porcelain, sokove od socijalnog preduzeća Dobra bašta koje se bavi ekonomskim osnaživanjem žena na selu – biramo saradnike koji vode računa o kvalitetu svojih proizvoda i dobrobiti ljudi za koje proizvode.</p>
      <img src="../assets/home/home-second-photo.jpg" alt="" class="h-[350px] max-[930px]:hidden">      
    </div>
    <div class="w-[1350px] flex items-center gap-[3em] mb-[3em]  max-[1400px]:w-full px-4 max-[930px]:flex-col">
      <img src="../assets/home/hero-third-photo.jpg" alt="" class="h-[350px] max-[930px]:w-full max-[930px]:h-[250px] object-cover">
      <p class="font-light text-[15px] leading-[27px] text-[#989898]">Jedini sastojak koji stiže pripremljen u Šumu je čokolada. Njoj ne možemo da odolimo, ali je zato nabavljamo od jednog od najboljih proizvođača čokolade na svetu, belgijske firme Callebaut. Koristimo čokoladu bez šećera, zaslađenu šećernim alkoholima, mlečnu, belu i tamnu, koju mešamo sa voćem, lekovitim biljem i orašastim plodovima. Izbegavamo beli, rafinisani šećer i umesto njega koristimo voće, ječmeni slad, kokosov šećer ili čokoladu koja je zaslađena šećernim alkoholima.<br> <br>  Ove namirnice imaju niži glikemijski indeks od šećera i svakako veću hranljivost. Šuma ne prati nijednu poslastičarsku školu, već sami smišljamo svoje recepte. Biramo sastojke čijom kombinacijom se smanjuje glikemijski indeks, povećava udeo vlakana, dodaju hranljive masnoće i vitamini svežeg voća i povrća. Kada kombinujemo ukuse, inspiraciju tražimo u prirodi, koju zajedno dobro poznajemo.</p>
    </div>
    <hr class="w-[1350px] mb-[40px] h-[2px] bg-[#ebebeb] max-[1400px]:w-full">
    <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    @autoplayTimeLeft="onAutoplayTimeLeft"
    class="mySwiper"
  >
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car1.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car2.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car3.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car4.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car5.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car6.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car7.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car8.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car9.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car10.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car11.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car12.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car13.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car14.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car15.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car16.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car17.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car18.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car19.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car20.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>
  <SwiperSlide>
    <img src="../assets/home/home_carousel/img_car21.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
  </SwiperSlide>

    <template #container-end>
      <div class="autoplay-progress">
        <svg viewBox="0 0 48 48" ref="progressCircle">
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref="progressContent"></span>
      </div>
    </template>
  </swiper>
    
  </div>
</template>
<script>
  import { ref } from 'vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';


  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const progressCircle = ref(null);
      const progressContent = ref(null);
      const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.value.style.setProperty('--progress', 1 - progress);
        progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
      };
      return {
        onAutoplayTimeLeft,
        progressCircle,
        progressContent,
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>


<style scoped>
@media only screen and (max-width: 1200px) {
  .swiper {
  width: 95% !important;
}
}
@media only screen and (max-width: 500px) {
  .swiper {
    height: 400px !important;
}
}
.swiper {
  width: 50%;
  height: 600px;
  margin-bottom: 8em;
  margin-top: 2em;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}

</style>