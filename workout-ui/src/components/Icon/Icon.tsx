import React from "react"
import { Icon as SemanticIcon} from "semantic-ui-react"

import styles from "./Icon.module.css"

interface Props {
  type: IconType
  onClick: () => void
  centered?: boolean
}

export enum IconType {
  Add = 0
}

const selectIcon = (type: IconType) => {
  switch (type) {
    case IconType.Add:
      return <SemanticIcon name="plus circle" color="blue" size="huge" />
  }
}

const Icon: React.FC<Props> = (props: Props) => {
  const icon = selectIcon(props.type)

  return <div className={props.centered == false ? '' : styles.centered}>
    <a onClick={props.onClick} >
      {icon}
    </a>
  </div>
}

export default Icon