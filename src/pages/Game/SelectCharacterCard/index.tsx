import React from "react"
import SelectCharacterCardPresenter from "./presenter"

export type Props = {
  character: {
    icon: any
    nameKanji: string
    nameKana: string
    age: number
    profession: string
    description: string
  }
}

const SelectCharacterCard = ({ character }: Props) => {
  return <SelectCharacterCardPresenter character={character} />
}

export default SelectCharacterCard
