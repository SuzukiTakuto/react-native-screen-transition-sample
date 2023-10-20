import React from "react"
import ScenarioItemPresenter from "./presenter"

type Props = {
  thumbnail: any
  title: string
  rating: number
  numberOfPeople: number
  timeLimit: number
}

const ScenarioItem = ({
  thumbnail,
  title,
  rating,
  numberOfPeople,
  timeLimit
}: Props) => {
  function decimalToHoursAndMinutes(decimalTime: number): string {
    const hours = Math.floor(decimalTime)
    const minutes = Math.round((decimalTime - hours) * 60)

    if (minutes === 0) {
      return `${hours}時間`
    } else {
      return `${hours}時間${minutes}分`
    }
  }
  return (
    <ScenarioItemPresenter
      thumbnail={thumbnail}
      title={title}
      rating={rating}
      numberOfPeople={numberOfPeople}
      timeLimit={decimalToHoursAndMinutes(timeLimit)}
    />
  )
}

export default ScenarioItem
