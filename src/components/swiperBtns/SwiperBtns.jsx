import css from "./SwiperBtns.module.css";
import { useSwiper } from "swiper/react";
import btn from "../../assets/btn.png";

const SwiperBtns = () => {
  const swiper = useSwiper();

  return (
    <div className={css.swiper_btns}>
      <button onClick={() => swiper.slidePrev()}>
        <img src={btn} alt="" className={css.prev_btn} />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <img src={btn} alt="" className={css.next_btn} />
      </button>
    </div>
  );
};

export default SwiperBtns;
