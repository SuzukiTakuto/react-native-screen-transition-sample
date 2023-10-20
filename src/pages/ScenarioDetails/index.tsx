import React, { FC } from "react"
import ScenarioDetailsPresenter from "./presenter"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootRoutesParamList } from "../../routes/Root"

type Props = NativeStackScreenProps<RootRoutesParamList, "ScenarioDetailsPage">
const ScenarioDetails: FC<Props> = ({ navigation, route }) => {
  // 実際はここでサーバーからauthorやauthorIconなど必要情報を取得する
  const author = "ぼぐちゃ"
  const authorIcon = require("./testIcon.png")
  const outline =
    "あなたの目の前には、先ほどから暗闇が広がっている。\n手足は何か器具のようなもので拘束されているようだ。\n\n暗がりの中ではあるが、その息遣いから、\n他にもこの空間に誰かがいることがわかる。\n\nどうやら、何かミスをして捕まったのだろう。\n警察に捕まったのか、恨みを買って私刑にかけられようとしているのか、どちらにしても、絶体絶命の状態だ。\n\n「お前たちには、ある「ゲーム」をしてもらう。」\n\nスピーカーから、アナウンスが流れる。\n\n\n全く聞いたことのない声だったが、\n声の主がこの場を支配していることはわかる。\n「ゲーム」とはロクでもないものに違いない。\n\nだが、退屈しのぎには、ちょうどいいだろう。\n「殺し」の技術に関しては自分が一番優れているのだから。\n\nしかし、油断は大敵だ。いつもそれを実感させられている。それぞれの思惑をもとに、孤高の殺し屋たちによる\n「ゲーム」が始まる。"
  const characters = [
    {
      icon: require("./testIcon.png"),
      nameKanji: "竹下波瑠",
      nameKana: "たけしたはる",
      age: 52,
      profession: "マジシャン",
      description:
        "背が低く、見た目は優しげな初老の男性の殺し屋。いつも右手で杖をついて歩いている。その界隈では有名な、いわゆる技術志向のマジシャン。10年ほどのブランクの後、2年ほど前に現場に復帰した。つけられた名前は、「奇跡の右腕」。"
    },
    {},
    {}
  ]

  // route.paramsとauthorとauthorIconを結合してpropsに渡す
  const props = { ...route.params, author, authorIcon }
  return <ScenarioDetailsPresenter {...props} />
}

export default ScenarioDetails
