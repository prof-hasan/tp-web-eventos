'use client'

import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './embla-carousel-arrow-button'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import  './css/embla.css'
import { EventsEntity } from '../../../../domain-events/src/events/types/events-entity'
import { EventCard } from '../../molecules'

type PropType = {
  slides: EventsEntity[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props

  const carouselOptions: EmblaOptionsType = {
    dragFree: options?.dragFree ?? true,
    align: options?.align ?? 'start',
    slidesToScroll: options?.slidesToScroll ?? 'auto',
    ...options
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className="carousel-section">
      <div className="carousel-viewport" ref={emblaRef}>
        <div className="carousel-container">
          {slides.map((object, index) => (
            <div className="carousel-slide" key={index}>
              <EventCard title={object.name} description={object.description} img={'placeholder'} />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <div className="carousel-buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel

export { EmblaCarousel }