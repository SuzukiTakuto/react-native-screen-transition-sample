import React from "react"
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native"
import { Props as ContainerProps } from "./index"
import styles from "./style"

type Props = {} & ContainerProps

const TabbarIconPresenter = ({
  path,
  title,
  index,
  onClick,
  isGame
}: Props) => {
  return (
    <View>
      {isGame ? (
        <Pressable
          onPress={() => onClick(index)}
          style={[
            styles.iconContainer,
            title === "" ? styles.micIconContainer : null
          ]}
        >
          <Image key={index} source={path} />
          {title !== "" && <Text style={styles.title}>{title}</Text>}
        </Pressable>
      ) : (
        <View
          style={[
            styles.iconContainer,
            title === "" ? styles.micIconContainer : null
          ]}
        >
          <Image key={index} source={path} />
          {title !== "" && <Text style={styles.title}>{title}</Text>}
        </View>
      )}
    </View>
  )
}

export default TabbarIconPresenter
